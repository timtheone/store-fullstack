import { useContext, useEffect } from "react";
import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";
import { CatalogJsonld as CatalogType } from "../../apiClient/data-contracts";
import CardCatalog from "../../components/Card/CardCatalog";
import useCatalogQuery from "./useCatalogQuery";

type OutletContextType = { catalog: CatalogType[] };

export const useCatalog = () => {
  return useOutletContext<OutletContextType>();
};

const Catalog = () => {
  const params = useParams();
  const { data: catalog, isSuccess } = useCatalogQuery();
  return (
    <main className=" mx-auto max-w-screen-xl px-5">
      {!params.id ? (
        <>
          <h1 className=" text-4xl font-bold mt-16">Каталог</h1>
          <section className="flex flex-row flex-wrap gap-7 mt-11 justify-center">
            {isSuccess &&
              catalog &&
              catalog["hydra:member"].map((item) => (
                <Link to={`${item.id}`} key={item["@id"]}>
                  <CardCatalog
                    img={`https://source.unsplash.com/random/50×30/?food&${item.id}`}
                    title={item.name}
                  />
                </Link>
              ))}
          </section>
        </>
      ) : (
        <Outlet context={{ catalog: catalog?.["hydra:member"] }} />
      )}
    </main>
  );
};

export default Catalog;
