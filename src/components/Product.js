import React from "react";
import { nanoid } from "nanoid";
import { useCart } from "../hooks/useCart";
import { formatter } from "../utils/formatter";

function Product({ id, title, price }) {
  const [_, dispatch] = useCart();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        key: nanoid(),
        id,
        title,
        price,
      },
    });
  };

  return (
    <div>
      <span>{id}</span>
      <p>{title}</p>
      <span>{formatter(price)}</span>
      <button onClick={addToCart}>Add to cart</button>
      <hr />
    </div>
  );
}

export default Product;
