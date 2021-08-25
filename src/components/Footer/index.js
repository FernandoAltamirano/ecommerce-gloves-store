import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../../globalStyles";
import { FooterContainer, Row } from "./styles";
import facebook from "../../images/facebook.png";
import whatsapp from "../../images/whatsapp.png";
function Footer() {
  return (
    <div>
      <FooterContainer>
        <Wrapper style={{ marginBottom: 0 }}>
          <h1>Ponte en contacto con nosotros</h1>
          <Row>
            <input type="email" />
            <button>Contactar</button>
            <div>
              <Link to="/">
                <img
                  src={facebook}
                  alt="wsp"
                  width="50"
                  style={{ margin: "0 10px" }}
                />
              </Link>
              <Link to="/">
                <img
                  src={whatsapp}
                  alt="fb"
                  width="50"
                  style={{ margin: "0 10px" }}
                />
              </Link>
            </div>
          </Row>
          <p>
            @ Copyright 2020 <br />
            Todos los derechos reservados - Created by F - J - A
          </p>
        </Wrapper>
      </FooterContainer>
    </div>
  );
}

export default Footer;
