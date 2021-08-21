import React from "react";
import CheckoutList from "../components/CheckoutList";
import Header from "../components/Header";
import Subtotal from "../components/Subtotal";

function CheckoutPage() {
  return (
    <div>
      <Header />
      <div>
        <CheckoutList />
        <Subtotal />
      </div>
    </div>
  );
}

export default CheckoutPage;
