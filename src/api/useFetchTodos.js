import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";

import { getTodosByDate } from "./utils";
import { fetchTodos } from "./api";
import { filtersAtom } from "../store/filtersAtom";
import filterObject from "../utils/filterObject";

const useFetchTodos = (select) => {
  const selectedFilters = useAtomValue(filtersAtom);
  const todosFilterSelector = (todos) => {
    if (selectedFilters.length === 0) {
      return select(todos);
    }
    const filteredTodos = filterObject(todos, (todo) =>
      selectedFilters.includes(todo.type)
    );
    return select(filteredTodos);
  }
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: Infinity,
    select: todosFilterSelector,
  });
};

const useTodosBeingCreated = () => {
  const selector = (todos) => {
    return Object.keys(todos)
      .map((id) => todos[id])
      .filter((todo) => todo.type === "unsaved" && todo.isLoading);
  };
  return useFetchTodos(selector);
};

const useTodosByDate = () => {
  return useFetchTodos(getTodosByDate);
};

const useTodosCount = (dateKey) => {
  const countSelector = (todos) => {
    const todosByDate = getTodosByDate(todos);
    const todosForDate = todosByDate.get(dateKey) ?? [];
    const unsavedTodosCount = todosForDate.filter(
      (todo) => todo.type === "unsaved" && !todo.isLoading
    ).length;
    const todosBeingCreatedCount = todosForDate.filter(
      (todo) => todo.type === "unsaved" && todo.isLoading
    ).length;
    const savedTodosCount = todosForDate.filter(
      (todo) => todo.type === "saved"
    ).length;
    return { unsavedTodosCount, todosBeingCreatedCount, savedTodosCount };
  };
  return useFetchTodos(countSelector);
};

export { useFetchTodos, useTodosCount, useTodosByDate, useTodosBeingCreated };
