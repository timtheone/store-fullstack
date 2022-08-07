import { GoodsJsonldGoods } from "../../apiClient/data-contracts";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

type CardProps = {
  img: string;
  goodsItem: { item: GoodsJsonldGoods; quantity: number };
};

const CardCart = ({ img, goodsItem }: CardProps) => {
  const { addToCart, removeFromCart, state } = useContext(CartContext);

  const count = state.cart.find(
    (el) => el.item.id === goodsItem.item.id
  )?.quantity;

  return (
    <div className="rounded-lg flex">
      <img src={img} className="w-20 h-24 sm:w-32 sm:h-36 rounded-xl" />
      <div className="py-3 px-3 flex flex-col w-full">
        <div className="flex justify-between">
          <h3 className="font-bold text-base sm:text-lg">
            {goodsItem.item.name}
          </h3>
          <h3 className="font-bold text-base sm:text-lg ml-16">
            {count && count * goodsItem.item.regprice}р.
          </h3>
        </div>
        {/* <p className="text-sm text-gray-500">Есть в наличии</p> */}
        <div className="flex border-2 border-gray-300 rounded-lg w-20 justify-between shadow-md mt-auto">
          <button
            className="ml-3"
            onClick={() => {
              removeFromCart(goodsItem.item);
            }}
          >
            <MinusIcon />
          </button>
          <p>{goodsItem.quantity}</p>
          <button
            className="mr-3"
            onClick={() => {
              addToCart(goodsItem.item);
            }}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
