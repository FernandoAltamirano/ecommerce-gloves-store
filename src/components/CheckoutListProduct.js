import React from "react";
import { useCart } from "../hooks/useCart";

function CheckoutListProduct({ id, title, price }) {
  const [_, dispatch] = useCart();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id,
      },
    });
  };
  return (
    <div>
      <span>{id}</span>
      <p>{title}</p>
      <span>S/ {price}</span>
      <button onClick={removeFromCart}>Remove from cart</button>
      <hr />
    </div>
  );
}

export default CheckoutListProduct;
