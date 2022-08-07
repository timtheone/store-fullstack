import apiClient from "./client";

const getOrders = async () => {
  return await apiClient.getGoodsOrderCollection().then((res) => res.data);
};
export default getOrders;
