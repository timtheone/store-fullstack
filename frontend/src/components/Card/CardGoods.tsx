import CardBase from "./CardBase";
import { PlusIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { GoodsJsonldGoods } from "../../apiClient/data-contracts";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Товар добавлен в корзину!");

type CardProps = {
  img: string;
  goodsItem: GoodsJsonldGoods;
};

const CardGoods = ({ img, goodsItem }: CardProps) => {
  const { addToCart } = useContext(CartContext);
  return (
    <CardBase>
      <img src={img} className="w-full h-36 rounded-t-lg" />
      <div className="mx-2 pb-2 mt-3 flex flex-col h-2/5">
        <h4 className="font-bold line-clamp-2 leading-5">{goodsItem.name}</h4>
        <p className="text-xs mt-2 text-gray-700">
          {goodsItem.quantity} {goodsItem.measure.name}
        </p>
        <div className="flex items-center mt-auto justify-between">
          <p className="font-bold text-sm">{goodsItem.regprice}р.</p>
          <button
            className="p-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors ease-in-out duration-300"
            onClick={() => {
              addToCart(goodsItem);
              notify();
            }}
          >
            <PlusIcon className=" text-white" />
          </button>
        </div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            boxShadow: "none",
            border: "1px solid #e1e1e1",
          },
        }}
      />
    </CardBase>
  );
};

export default CardGoods;
