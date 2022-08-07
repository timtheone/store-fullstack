import {
  createContext,
  Dispatch,
  ReactNode,
  Reducer,
  useEffect,
  useReducer,
} from "react";
import { GoodsJsonldGoods } from "../apiClient/data-contracts";

type CartContextState = {
  cart: Array<{
    quantity: number;
    item: GoodsJsonldGoods;
  }>;
};

type CartContextType = {
  state: CartContextState;
  addToCart: (goodsItem: GoodsJsonldGoods) => void;
  removeFromCart: (goodsItem: GoodsJsonldGoods) => void;
  resetCart: () => void;
};

export enum ActionType {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  RESET_CART = "RESET_CART",
}

export type Action =
  | {
      type: ActionType.ADD_TO_CART;
      payload: GoodsJsonldGoods;
    }
  | {
      type: ActionType.REMOVE_FROM_CART;
      payload: GoodsJsonldGoods;
    }
  | {
      type: ActionType.RESET_CART;
    };

const cartReducer = (
  state: CartContextState = { cart: [] },
  action: Action
) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART: {
      const duplicatedItem = state.cart.find(
        (el) => el.item.id === action.payload.id
      );

      if (duplicatedItem) {
        const deduplicatedItemIndex = state.cart.findIndex((item) => {
          return item.item.id === duplicatedItem.item.id;
        });

        return {
          ...state,
          cart: [
            ...state.cart.slice(0, deduplicatedItemIndex),
            { item: action.payload, quantity: duplicatedItem.quantity++ },
            ...state.cart.slice(deduplicatedItemIndex + 1),
          ],
        };
      }

      return {
        ...state,
        cart: [...state.cart, { item: action.payload, quantity: 1 }],
      };
    }
    case ActionType.REMOVE_FROM_CART: {
      const itemToDelete = state.cart.find(
        (el) => el.item.id === action.payload.id
      );
      const itemToDeleteIndex = state.cart.findIndex((item) => {
        return item.item.id === action.payload.id;
      });

      if (itemToDelete && itemToDelete.quantity >= 1) {
        return {
          ...state,
          cart: [
            ...state.cart.slice(0, itemToDeleteIndex),
            { item: action.payload, quantity: itemToDelete.quantity-- },
            ...state.cart.slice(itemToDeleteIndex + 1),
          ],
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart.slice(0, itemToDeleteIndex),
          ...state.cart.slice(itemToDeleteIndex + 1),
        ],
      };
    }
    case ActionType.RESET_CART: {
      return { ...state, cart: [] };
    }
    default: {
      throw new Error(`Unhandled action type: ${JSON.stringify(action)}`);
    }
  }
};

export const CartContext = createContext<CartContextType>({
  state: {
    //@ts-ignore
    cart: [],
  },
  addToCart: () => {},
  removeFromCart: () => {},
  resetCart: () => {},
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<Reducer<CartContextState, Action>>(
    cartReducer,
    //@ts-ignore
    { cart: JSON.parse(window.localStorage.getItem("cart")) || [] }
  );

  useEffect(() => {
    if (state.cart.length > 0) {
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }, [state]);

  const addToCart = (payload: GoodsJsonldGoods) => {
    dispatch({
      type: ActionType.ADD_TO_CART,
      payload: payload,
    });
  };

  const removeFromCart = (payload: GoodsJsonldGoods) => {
    dispatch({
      type: ActionType.REMOVE_FROM_CART,
      payload: payload,
    });
  };

  const resetCart = () => {
    dispatch({
      type: ActionType.RESET_CART,
    });
    window.localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ addToCart, removeFromCart, state, resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
