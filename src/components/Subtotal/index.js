import React, { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { formatter } from "../../utils/formatter";

function Subtotal({ coupon, showDcto }) {
  const [{ cart }, _] = useCart();
  const [total, setTotal] = useState(0);
  const [dcto, setDcto] = useState(0);

  useEffect(() => {
    getTotal();
    console.log(total);
  }, [cart, coupon]);

  const getTotal = () => {
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
      subtotal += cart[i].subtotal;
    }
    if (coupon) {
      setDcto(formatter(subtotal * 0.3));
      subtotal *= 0.7;
    }
    setTotal(formatter(subtotal));
  };

  return <p>{!showDcto ? total : dcto}</p>;
}

export default Subtotal;
