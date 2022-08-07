import apiClient from "./client";

const getCatalog = async () => {
  return await apiClient.getCatalogCollection().then((res) => res.data);
};
export default getCatalog;
