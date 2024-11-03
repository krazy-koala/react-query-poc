import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUnsavedTodo } from "./api";

const MUTATION_KEY = ["unsavedTodos"];

const getPlaceholderId = (title, description) => `${title},${description}`;

const useCreateUnsavedTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    staleTime: Infinity,
    mutationKey: MUTATION_KEY,
    mutationFn: ({ title, description, createdAt }) => {
      return createUnsavedTodo(title, description, createdAt);
    },
    onMutate: (variables) => {
      queryClient.setQueryData(["todos"], (oldData) => {
        // We won't get a todo with an id until the POST response so we have to create
        // a unique id by using the todo's attributes. 
        const id = getPlaceholderId(variables.title, variables.description);
        // Create a placeholder and insert it into the "todos" cache.  The placeholder
        // can carry extra info about the todo that can be used for rendering HTTP status.
        const unsavedTodoPlaceholder = {
          ...variables,
          id,
          type: "unsaved",
          isLoading: true,
        };
        return {
          ...oldData,
          [id]: unsavedTodoPlaceholder,
        }
      });
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["todos"], (oldData) => {
        const newData = { ...oldData };
        // Delete placeholder todo from cache.
        const placeholderId = getPlaceholderId(data.title, data.description);
        delete newData[placeholderId];
        // Add actual unsaved todo to cache.
        const unsavedTodo = {
          ...data,
          type: "unsaved",
          isLoading: false,
        };
        return {
          ...newData,
          [unsavedTodo.id]: unsavedTodo,
        }
      });
    },
  });
};

export { useCreateUnsavedTodo };
