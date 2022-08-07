import { GoodsOrderJsonld } from "../apiClient/data-contracts";
import apiClient from "./client";

const postGoods = async (data: GoodsOrderJsonld) => {
  return await apiClient.postGoodsOrderCollection(data);
};
export default postGoods;
