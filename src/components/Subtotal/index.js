import React, { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { formatter } from "../../utils/formatter";

function Subtotal({ dcto, showDcto }) {
  const [{ cart }, _] = useCart();
  const [total, setTotal] = useState(0);
  const [dctoTotal, setDctoTotal] = useState(0);

  useEffect(() => {
    getTotal();
  }, [cart, dcto]);

  const getTotal = () => {
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
      subtotal += cart[i].subtotal;
    }
    if (dcto) {
      setDctoTotal(formatter(subtotal * dcto));
      subtotal *= 1 - dcto;
    }
    setTotal(formatter(subtotal));
  };

  return <p>{showDcto ? dctoTotal : total}</p>;
}

export default Subtotal;
