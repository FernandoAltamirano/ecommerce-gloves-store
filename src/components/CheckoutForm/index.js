import { useEffect, useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "../../hooks/useCart.js";
import accounting from "accounting";
import { PaymentButton } from "../../pages/styles/payment";
import { amount } from "../../utils/amount.js";
import { db } from "../../firebase.js";
import { sendSaleToFirestore } from "../../utils/firestore.js";
const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "rgb(240, 57, 122)",
      color: "#333",
      fontSize: "18px",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

function CheckoutForm({ userData, previous, next }) {
  const [{ cart, coupon }, dispatch] = useCart();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (!error) {
        const { type } = paymentMethod;
        try {
          const subtotal = amount(cart.map((item) => item.subtotal));
          // console.log({ subtotal: subtotal * 100, type });
          const { status } = await fetch("http://localhost:3001/api/checkout", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              type,
              amount: !coupon
                ? Number(subtotal) * 100
                : (Number(subtotal) * 100 * 0.7).toFixed(0),
            }),
          });
          console.log(status);
          if (status === 200) {
            await sendSaleToFirestore({
              cartData: { cart, coupon, total: subtotal },
              userData,
            });
            dispatch({
              type: "EMPTY_CART",
              payload: [],
            });
            localStorage.setItem(
              "session",
              JSON.stringify({ cart: [], coupon: false })
            );
          }
          elements.getElement(CardElement).clear();
          setLoading(false);
          next();
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
        setLoading(false);
      }
    }
  };

  return (
    <form>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <PaymentButton onClick={previous}>Anterior</PaymentButton>
        <PaymentButton
          onClick={handleSubmit}
          aria-disabled={loading ? true : false}
          loading={loading}
        >
          {loading ? "Cargando" : "Comprar"}
        </PaymentButton>
      </div>
    </form>
  );
}

export default CheckoutForm;
