import { useMutation, useQueryClient } from "@tanstack/react-query";
import postGoods from "../../api/createGoods";

const useOrderMuration = () => {
  const queryClient = useQueryClient();
  return useMutation(["order"], postGoods, {
    onSuccess: () => {
      queryClient.invalidateQueries(["orders"]);
    },
  });
};

export default useOrderMuration;
