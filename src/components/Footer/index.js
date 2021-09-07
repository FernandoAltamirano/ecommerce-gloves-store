import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../../globalStyles";
import { FooterContainer, Row } from "./styles";
import facebook from "../../images/facebook.png";
import whatsapp from "../../images/whatsapp.png";
import { ToastContainer, toast } from "react-toastify";
import { API_URL } from "../../constants/example";
const regularExpression = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
function Footer() {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const createNotification = () =>
    toast.info("Correo enviado exitosamente", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const createNotificationError = () =>
    toast.error("Ingrese un correo válido", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const sendEmail = () => {
    if (regularExpression.exec(emailRef.current.value)) {
      setLoading(true);
      fetch(`${API_URL}/send`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailRef.current.value }),
      })
        .then(() => {
          emailRef.current.value = "";
          setLoading(false);
          createNotification();
        })
        .catch((err) => {
          setLoading(false);
          console.error(err.message);
        });
    } else {
      setLoading(false);
      createNotificationError();
    }
  };
  return (
    <div id="c">
      <FooterContainer>
        <Wrapper style={{ marginBottom: 0 }}>
          <h1>Ponte en contacto con nosotros</h1>
          <Row>
            <input
              type="email"
              ref={emailRef}
              placeholder="Ingresa tu correo de contacto"
            />
            <button onClick={sendEmail} disabled={loading ? true : false}>
              Contactar
            </button>
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
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Footer;
