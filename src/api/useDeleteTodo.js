import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "./api";

const MUTATION_KEY = ["deleteTodo"];

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    staleTime: Infinity,
    mutationKey: MUTATION_KEY,
    mutationFn: (todoToDelete) => {
      return deleteTodo(todoToDelete);
    },
    onMutate: (todoToDelete) => {
      queryClient.setQueryData(["todos"], (oldData) => {
        return {
          ...oldData,
          [todoToDelete.id]: { ...oldData[todoToDelete.id], isDeleting: true },
        };
      });
    },
    onSuccess: (deletedTodo) => {
      queryClient.setQueryData(["todos"], (oldData) => {
        const newData = { ...oldData };
        delete newData[deletedTodo.id];
        return newData;
      });
    },
  });
};

export default useDeleteTodo;
