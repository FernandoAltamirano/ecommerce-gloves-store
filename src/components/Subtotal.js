import React, { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { formatter } from "../utils/formatter";
function Subtotal() {
  const [{ cart }, _] = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getTotal();
  }, [cart]);

  const getTotal = () => {
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
      subtotal += cart[i].price;
    }
    setTotal(formatter(subtotal));
  };

  return (
    <div>
      <p>
        Subtotal : <strong>{total}</strong>
      </p>
    </div>
  );
}

export default Subtotal;
