import React from "react";
import { useCart } from "../../hooks/useCart";
import { TrashIcon } from "@heroicons/react/solid";
import { NameProduct } from "../CheckoutList/styles";

function CheckoutListProduct({ id, title, price, image }) {
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
    <tr>
      <td>
        <NameProduct>
          <img
            src={image}
            alt=""
            width="30"
            style={{ borderRadius: "999px", marginRight: "20px" }}
          />
          <p>{title}</p>
        </NameProduct>
      </td>
      <td>
        <p>S/ {price}</p>
      </td>
      <td>
        <p>1</p>
      </td>
      <td>
        <p> S/ {price}</p>
      </td>
      <td>
        <TrashIcon cursor="pointer" width="30" onClick={removeFromCart} />
      </td>
    </tr>
  );
}

export default CheckoutListProduct;
