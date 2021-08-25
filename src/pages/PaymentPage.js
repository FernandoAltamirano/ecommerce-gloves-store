import React from "react";
import { Redirect } from "react-router-dom";

import { useUser } from "../hooks/useUser";
function PaymentPage() {
  const { user } = useUser();
  return (
    <>
      {!user ? (
        <Redirect to="/signin" />
      ) : (
        <div>
          <p>Payment page</p>
        </div>
      )}
    </>
  );
}

export default PaymentPage;
