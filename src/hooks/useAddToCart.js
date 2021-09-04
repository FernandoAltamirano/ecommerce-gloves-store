import { useCart } from "./useCart";

export const useAddToCart = () => {
  const [state, dispatch] = useCart();

  function addToCart(data) {
    dispatch({
      type: "ADD_TO_CART",
      payload: data,
    });
    const newData = [...state.cart, data];
    localStorage.setItem(
      "session",
      JSON.stringify({ ...state, cart: newData })
    );
  }

  return { addToCart };
};
