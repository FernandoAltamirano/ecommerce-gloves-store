import React, { useEffect, useRef, useState } from "react";
import CheckoutList from "../components/CheckoutList";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Subtotal from "../components/Subtotal";
import { Wrapper } from "../globalStyles";
import {
  Title,
  Right,
  Content,
  SaleDetails,
  Details,
  Discount,
  SubtotalRow,
  Total,
  SaleButton,
} from "./styles/checkout";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useCart } from "../hooks/useCart";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
const COUPON = "123";

function CheckoutPage() {
  const [{ cart, coupon }, dispatch] = useCart();
  const couponRef = useRef();
  const history = useHistory();
  const [couponActive, setCouponActive] = useState(
    JSON.parse(localStorage.getItem("session"))?.coupon || false
  );

  const applyCoupon = () => {
    if (couponRef.current.value === COUPON && !coupon) {
      dispatch({
        type: "APPLY_COUPON",
        payload: true,
      });
      setCouponActive(true);
    }
    localStorage.setItem("session", JSON.stringify({ cart, coupon: true }));
    couponRef.current.value = "";
  };

  return (
    <div>
      <Header />
      <Wrapper>
        <Title>
          {" "}
          <ShoppingCartIcon width="50" />
          <h1>Carro de compra</h1>
        </Title>
        <Content>
          <CheckoutList />
          <Right>
            <SaleDetails>
              <Discount>
                <input type="text" ref={couponRef} />
                <SaleButton
                  disable={coupon ? true : false}
                  disabled={coupon ? true : false}
                  onClick={applyCoupon}
                >
                  Aplicar cupón
                </SaleButton>
              </Discount>
              <Details>
                <h2>Tu compra</h2>
                <SubtotalRow>
                  <p>Costo ({cart.length} producto)</p> <Subtotal />
                </SubtotalRow>
                {couponActive && (
                  <SubtotalRow>
                    <p>Descuento por cupón</p>{" "}
                    <Subtotal coupon={coupon} showDcto={true} />
                  </SubtotalRow>
                )}
                <hr />
                <Total>
                  <h2>Total</h2>
                  <strong>
                    <Subtotal coupon={coupon} />
                  </strong>
                </Total>
              </Details>
              <SaleButton onClick={() => history.push("/payment")}>
                Ir a pagar
              </SaleButton>
              <div
                style={{ textAlign: "center", fontSize: "14px", color: "gray" }}
              >
                <p>
                  <strong>
                    En caso seleccione entrega a domicilio se le
                    <br /> cargara un costo de envio a su compra
                  </strong>
                </p>
              </div>
            </SaleDetails>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <SaleButton
                style={{
                  width: "40%",
                  display: "flex",
                  paddingBottom: 7,
                  paddingTop: 7,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  color: "var(--green)",
                  borderColor: "var(--green)",
                  borderStyle: "solid",
                  borderWidth: 2,
                }}
              >
                {" "}
                <ShoppingCartIcon width="30" />{" "}
                <p style={{ margin: 0, marginLeft: 10 }}>Seguir comprando</p>
              </SaleButton>
            </Link>
          </Right>
        </Content>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
