import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveTodo } from "./api";

const MUTATION_KEY = ["saveTodo"];

const useSaveTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    staleTime: Infinity,
    mutationKey: MUTATION_KEY,
    mutationFn: (unsavedTodo) => {
      return saveTodo(unsavedTodo);
    },
    onMutate: (unsavedTodo) => {
      queryClient.setQueryData(["todos"], (oldData) => {
        return {
          ...oldData,
          [unsavedTodo.id]: { ...oldData[unsavedTodo.id], isSaving: true },
        };
      });
    },
    onSuccess: (savedTodo) => {
      queryClient.setQueryData(["todos"], (oldData) => {
        return {
          ...oldData,
          [savedTodo.id]: { ...savedTodo, isSaving: false, type: "saved" },
        };
      });
    },
  });
};

export default useSaveTodo;
