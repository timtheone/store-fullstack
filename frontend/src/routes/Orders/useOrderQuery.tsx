import { useQuery } from "@tanstack/react-query";
import getOrders from "../../api/getOrders";

const useOrderQuery = () => {
  return useQuery(["orders"], getOrders);
};

export default useOrderQuery;
