import React from "react";
import { useCart } from "../../hooks/useCart";
import { TrashIcon } from "@heroicons/react/solid";
import { NameProduct } from "../CheckoutList/styles";

function CheckoutListProduct({ id, name, price, image, quantity, subtotal }) {
  const [state, dispatch] = useCart();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id,
      },
    });
    const newList = state.cart.filter((item) => item.id !== id);
    localStorage.setItem(
      "session",
      JSON.stringify({ ...state, cart: newList })
    );
  };
  return (
    <tr style={{ paddingBottom: 20 }}>
      <td>
        <NameProduct>
          <img
            src={image.data}
            alt=""
            width="30"
            style={{ borderRadius: "999px", marginRight: "20px" }}
          />
          <p>{name}</p>
        </NameProduct>
      </td>
      <td>
        <p>S/ {price}</p>
      </td>
      <td>
        <p>{quantity}</p>
      </td>
      <td>
        <p> S/ {subtotal.toFixed(2)}</p>
      </td>
      <td>
        <TrashIcon cursor="pointer" width="30" onClick={removeFromCart} />
      </td>
    </tr>
  );
}

export default CheckoutListProduct;
