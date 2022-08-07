import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import useOrderMuration from "../routes/Cart/useOrderMutation";

type CartSummaryProps = {
  totalPrice: number;
};
const CartSummary = ({ totalPrice }: CartSummaryProps) => {
  const { state, resetCart } = useContext(CartContext);
  const mutation = useOrderMuration();
  let goodsIds: { id: string; quantity: number }[] = [];
  state.cart.forEach((goodsItem, index, arr) => {
    goodsIds.push({ id: goodsItem.item["@id"], quantity: goodsItem.quantity });
  });
  const createOrderHandler = () => {
    goodsIds.forEach((goodsItemData) => {
      mutation.mutate({
        quantity: goodsItemData.quantity,
        //@ts-ignore
        goods: [goodsItemData.id],
      });
    });
    resetCart();
  };

  return (
    <section>
      <div className="flex w-full justify-between bg-black text-white rounded-md p-5">
        <h3>Итого: </h3>
        <h3>{totalPrice}р.</h3>
      </div>
      <button
        onClick={createOrderHandler}
        className="w-full bg-blue-600 text-white rounded-md mt-3 p-3 text-center hover:bg-blue-700 transition-colors ease-in-out duration-300 "
      >
        Оформить заказ
      </button>
    </section>
  );
};

export default CartSummary;
