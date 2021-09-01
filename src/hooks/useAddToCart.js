import { nanoid } from "nanoid";
import { useCart } from "./useCart";

export const useAddToCart = () => {
  const [state, dispatch] = useCart();

  function addToCart(data) {
    const addProduct = {
      ...data,
      key: nanoid(),
    };
    dispatch({
      type: "ADD_TO_CART",
      payload: addProduct,
    });
    const newData = [...state.cart, addProduct];
    localStorage.setItem(
      "session",
      JSON.stringify({ ...state, cart: newData })
    );
  }

  return { addToCart };
};
