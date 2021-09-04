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
} from "./styles/payment";
import {
  UserIcon,
  AtSymbolIcon,
  PhoneIcon,
  OfficeBuildingIcon,
  InboxIcon,
} from "@heroicons/react/outline";
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
  return (
    <div style={{ padding: "0 2em 2em 2em", minHeight: "300px" }}>
      <div>
        <h2>Checkout</h2>
        <p>Product</p>
        <p>Product</p>
        <p>Product</p>
        <hr />
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm userData={data} previous={previous} next={next} />
      </Elements>
      <div style={{ display: "flex", justifyContent: "space-between" }}></div>
    </div>
  );
}
function Form3() {
  return (
    <div style={{ padding: "0 2em 2em 2em", minHeight: "300px" }}>
      <h1>Compra exitosa</h1>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Link to="/">Ir a la página principal</Link>
      </div>
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
      console.log(auth.currentUser.email);
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
