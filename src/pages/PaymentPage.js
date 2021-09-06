import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { MultiStepForm, Step } from "react-multi-form";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import {
  Payment,
  PaymentContainer,
  Logo,
  PaymentInput,
  PaymentRow,
  PaymentButton,
  ItemsContainer,
} from "./styles/payment";
import {
  UserIcon,
  AtSymbolIcon,
  PhoneIcon,
  OfficeBuildingIcon,
  InboxIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import { useCart } from "../hooks/useCart";
import { formatter } from "../utils/formatter";
import { amount } from "../utils/amount";
const stripePromise = loadStripe(
  "pk_test_51JPvd9KWzGO7vcPg13w0f6N1OyemzSR2TByUhH1kM8ceHmxslcs32n6VPSEh094mwW4odTeNZnkl9OrwMGKVCkqG002rX67nve"
);

function Form1({ data, updateData, next }) {
  return (
    <div
      style={{
        padding: "0 2em 2em 2em",
        minHeight: "300px",
      }}
    >
      <PaymentRow>
        <PaymentInput>
          <UserIcon width="20" color="gray" />
          <input
            type="text"
            placeholder="Nombres"
            name="name"
            onChange={(ev) => updateData(ev.target)}
          />
        </PaymentInput>
        <PaymentInput>
          <UserIcon width="20" color="white" />
          <input
            name="lastname"
            type="text"
            placeholder="Apellidos"
            onChange={(ev) => updateData(ev.target)}
          />
        </PaymentInput>
      </PaymentRow>
      <PaymentRow>
        <PaymentInput>
          <AtSymbolIcon width="20" color="gray" />
          <input
            name="email"
            type="text"
            placeholder="Correo electrónico"
            disabled
            value={data.email}
          />
        </PaymentInput>
        <PaymentInput>
          <PhoneIcon width="20" color="gray" />
          <input
            name="phone"
            type="text"
            placeholder="Teléfono"
            onChange={(ev) => updateData(ev.target)}
          />
        </PaymentInput>
      </PaymentRow>
      <PaymentRow>
        <PaymentInput>
          <OfficeBuildingIcon width="20" color="gray" />
          <input
            name="address"
            type="text"
            placeholder="Dirección"
            onChange={(ev) => updateData(ev.target)}
          />
        </PaymentInput>
        <PaymentInput>
          <InboxIcon width="20" color="gray" />
          <input
            name="code"
            type="text"
            placeholder="Código postal"
            onChange={(ev) => updateData(ev.target)}
          />
        </PaymentInput>
      </PaymentRow>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <PaymentButton onClick={next}>Siguiente</PaymentButton>
      </div>
    </div>
  );
}
function Form2({ data, previous, next }) {
  const [{ cart, coupon }, _] = useCart();

  return (
    <div style={{ padding: "0 2em 2em 2em", minHeight: "300px" }}>
      <div>
        <h2>Checkout</h2>
        <ItemsContainer>
          {cart?.map((item) => (
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px",
              }}
            >
              <p>{item.name}</p>
              <p>{formatter(item.subtotal)}</p>
            </div>
          ))}
        </ItemsContainer>
        <hr />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5px 20px",
          }}
        >
          <h4>
            <strong>Total (sin descuento)</strong>
          </h4>
          <p>
            {cart.length > 0 &&
              formatter(amount(cart.map((item) => item.subtotal)))}
          </p>
        </div>
        {coupon && (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px 20px",
            }}
          >
            <h3>
              <strong>Total (con descuento)</strong>
            </h3>
            <h2 style={{ marginTop: 30 }}>
              <strong>
                {cart.length > 0 &&
                  formatter(amount(cart.map((item) => item.subtotal)) * 0.7)}
              </strong>
            </h2>
          </div>
        )}
      </div>
      <hr />
      <div style={{ marginTop: 30 }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm userData={data} previous={previous} next={next} />
        </Elements>
      </div>
    </div>
  );
}
function Form3() {
  return (
    <div style={{ padding: "0 2em 2em 2em", minHeight: "300px" }}>
      <h1>Compra exitosa</h1>
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "3em",
          color: "#24a19c",
          fontWeight: "bold",
        }}
      >
        <CheckCircleIcon width="60" color="#24a19c" />
        Ir a la página principal
      </Link>
    </div>
  );
}
function PaymentPage() {
  const history = useHistory();
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    code: "",
  });
  const next = () => setStep(step + 1);
  const previous = () => setStep(step - 1);
  const updateData = (target) =>
    setData({ ...data, [target.name]: target.value });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) return history.push("/signin");
      setData({ ...data, email: auth.currentUser.email });
    });
  }, []);

  return (
    <PaymentContainer>
      <Logo>
        <p>Logo</p>
      </Logo>
      <Payment>
        <div>
          <h1 style={{ margin: "0 0 .6em 0" }}>Información de venta</h1>
          <div>
            <MultiStepForm activeStep={step}>
              <Step label="Información personal">
                <Form1 data={data} updateData={updateData} next={next} />
              </Step>
              <Step label="Información de pago">
                <Form2 data={data} previous={previous} next={next} />
              </Step>
              <Step label="Pedido completado">
                <Form3 previous={previous} />
              </Step>
            </MultiStepForm>
          </div>
        </div>
      </Payment>
    </PaymentContainer>
  );
}

export default PaymentPage;
