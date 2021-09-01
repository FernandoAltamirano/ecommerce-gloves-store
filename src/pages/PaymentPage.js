import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { auth } from "../firebase";

function PaymentPage() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        history.push("/signin");
      }
    });
  }, []);

  return (
    <div>
      <p>Payment page</p>
    </div>
  );
}

export default PaymentPage;
