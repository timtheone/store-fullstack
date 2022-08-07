import { useQuery } from "@tanstack/react-query";
import getGoods from "../../api/getGoods";

const useGoodsQuery = (id?: string) => {
  return useQuery(["goods", id], () => getGoods(id));
};

export default useGoodsQuery;
