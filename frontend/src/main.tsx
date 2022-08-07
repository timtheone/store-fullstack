import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { CartContextProvider } from "./contexts/CartContext";
import "./index.css";
import Cart from "./routes/Cart/cart";
import Catalog from "./routes/Catalog/catalog";
import Goods from "./routes/Goods/goods";
import Orders from "./routes/Orders/orders";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={
                <h1 className=" text-2xl font-bold ml-8 py-10">
                  Dummy landing page
                </h1>
              }
            />
            <Route path="cart" element={<Cart />} />
            <Route path="catalog" element={<Catalog />}>
              <Route path=":id" element={<Goods />} />
            </Route>
            <Route path="orders" element={<Orders />} />
            <Route
              path="*"
              element={
                <main>
                  <h1 className="text-2xl ml-7 pt-20 text-center">
                    Такого пути нет.
                  </h1>
                </main>
              }
            />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
