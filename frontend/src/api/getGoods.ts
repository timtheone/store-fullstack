import apiClient from "./client";

const getGoods = async (catalogId?: string) => {
  if (catalogId) {
    return await apiClient
      .getGoodsCollection({ "catalog.id": Number(catalogId) })
      .then((res) => res.data);
  }

  throw Error("Not Found");
};
export default getGoods;
