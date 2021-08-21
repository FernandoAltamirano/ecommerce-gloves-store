import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import CheckoutListProduct from "./CheckoutListProduct";

function CheckoutList() {
  const [{ cart }, _] = useCart();

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <div>
      {cart?.length < 1 ? (
        <p>
          No agregaste productos al carrito.{" "}
          <Link to="/products">Click aqui para añadir algun producto</Link>{" "}
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <CheckoutListProduct key={item.key} {...item} />
          ))}
        </>
      )}
    </div>
  );
}

export default CheckoutList;
