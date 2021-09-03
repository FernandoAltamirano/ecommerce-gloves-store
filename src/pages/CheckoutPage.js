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
const COUPON = "123";

function CheckoutPage() {
  const [{ cart, coupon }, dispatch] = useCart();
  const couponRef = useRef();
  const history = useHistory();
  const [dcto, setDcto] = useState(null);

  useEffect(() => {
    console.log({ cart, coupon });
  }, [coupon]);

  const applyCoupon = () => {
    if (couponRef.current.value === COUPON && !coupon) {
      dispatch({
        type: "APPLY_COUPON",
        payload: true,
      });
      setDcto(0.3);
    }
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
                <SubtotalRow>
                  <p>Código de cupón aplicado</p>{" "}
                  <Subtotal dcto={dcto} showDcto={true} />
                </SubtotalRow>
                <hr />
                <Total>
                  <h2>Total</h2>
                  <strong>
                    <Subtotal dcto={dcto} />
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
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
    </div>
  );
}

export default CheckoutPage;
