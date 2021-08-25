import React from "react";
import CheckoutList from "../components/CheckoutList";
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

function CheckoutPage() {
  const [{ cart }, _] = useCart();
  const history = useHistory();
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
                <input type="text" />
                <button>Aplicar cupón</button>
              </Discount>
              <Details>
                <h2>Tu compra</h2>
                <SubtotalRow>
                  <p>Costo ({cart.length} producto)</p> <Subtotal />
                </SubtotalRow>
                <hr />
                <Total>
                  <h2>Total</h2>
                  <strong>
                    <Subtotal />
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
                    En caso seleccionaste entrega a domicilio se le
                    <br /> cargara un costo de envio a su compra
                  </strong>
                </p>
              </div>
            </SaleDetails>
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
          </Right>
        </Content>
      </Wrapper>
    </div>
  );
}

export default CheckoutPage;
