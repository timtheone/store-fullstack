import { useNavigate, useParams } from "react-router-dom";
import useGoodsQuery from "./useGoodsQuery";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import { useCatalog } from "../Catalog/catalog";
import CardGoods from "../../components/Card/CardGoods";

export default function Goods() {
  const params = useParams();
  const navigate = useNavigate();
  const { catalog } = useCatalog();

  const { data: goods, isSuccess } = useGoodsQuery(params.id);
  return (
    <>
      <div className="mt-16 flex items-center">
        <CaretLeftIcon
          //   style={{ width: 50, height: 50, cursor: "pointer" }}
          className=" w-7 h-7 sm:w-12 sm:h-12 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        {catalog && params.id && (
          <h1 className=" text-base sm:text-4xl font-bold">
            {catalog[Number(params.id)].name}
          </h1>
        )}
      </div>
      {goods && goods["hydra:member"].length <= 0 && (
        <p>К сожалению в этой категории в данный момент нету товаров</p>
      )}
      <section className="flex flex-row flex-wrap gap-7 mt-11 justify-center">
        {isSuccess &&
          goods["hydra:member"] &&
          goods["hydra:member"].map((item) => (
            <CardGoods
              key={item["@id"]}
              goodsItem={item}
              img={`https://source.unsplash.com/random/50×30/?food&${item.id}`}
            />
          ))}
      </section>
    </>
  );
}
