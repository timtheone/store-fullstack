import { useQuery, useQueryClient } from "@tanstack/react-query";
import getCatalog from "../../api/getCatalog";

const useCatalogQuery = () => {
  return useQuery(["catalog"], getCatalog);
};

export default useCatalogQuery;
