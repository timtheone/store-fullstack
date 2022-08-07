import { useContext } from "react";
import CardCart from "../../components/Card/CardCart";
import CartSummary from "../../components/CartSummary";
import { CartContext } from "../../contexts/CartContext";

export default function Cart() {
  const { state } = useContext(CartContext);

  const totalPrice = state.cart.reduce((prev, current) => {
    return current.item.regprice * current.quantity + prev;
  }, 0);

  return (
    <main className=" mx-auto max-w-screen-xl px-5 flex flex-col items-center">
      {state.cart.length > 0 ? (
        <>
          <h1 className=" text-4xl font-bold mt-16">Корзина</h1>
          <section className="flex flex-col gap-4 mt-7">
            {state.cart.length > 0 &&
              state.cart.map((goodsItem) => (
                <CardCart
                  key={goodsItem.item["@id"]}
                  img={`https://source.unsplash.com/random/50×30/?food&${goodsItem.item.id}`}
                  goodsItem={goodsItem}
                />
              ))}
            <CartSummary
              totalPrice={Math.round((totalPrice + Number.EPSILON) * 100) / 100}
            />
          </section>
        </>
      ) : (
        <h1 className=" text-4xl font-bold mt-16">Ваша корзина пуста</h1>
      )}
    </main>
  );
}
