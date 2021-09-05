import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../../globalStyles";
import { FooterContainer, Row, SendButton } from "./styles";
import facebook from "../../images/facebook.png";
import whatsapp from "../../images/whatsapp.png";
import { ToastContainer, toast } from "react-toastify";
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

  const sendEmail = () => {
    setLoading(true);
    console.log("click");
    fetch("http://localhost:3001/send", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailRef.current.value }),
    })
      .then((res) => {
        emailRef.current.value = "";
        setLoading(false);
        createNotification();
      })
      .catch((err) => {
        setLoading(false);
        console.error(err.message);
      });
  };
  return (
    <div>
      <FooterContainer>
        <Wrapper style={{ marginBottom: 0 }}>
          <h1>Ponte en contacto con nosotros</h1>
          <Row>
            <input type="email" ref={emailRef} />
            <SendButton
              loading={loading}
              onClick={sendEmail}
              disabled={
                loading || emailRef.current?.value === "" ? true : false
              }
            >
              Contactar
            </SendButton>
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
