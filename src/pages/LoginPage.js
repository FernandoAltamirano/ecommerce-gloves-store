import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { authWithGoogle, loginUser } from "../utils/auth";
import { ButtonLogin, FormContainerLogin } from "./styles/login";
import { Container, ErrorMessage, Form, InputWrapper } from "../globalStyles";
import { MailIcon, KeyIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import google from "../icons/google.png";
import { useToggle } from "../hooks/useToggle";
import logo from "../images/logo2.jpg";
import { auth } from "../firebase";
import { ADMIN } from "../constants/example";

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [showPassword, togglePassword] = useToggle();
  const [error, setError] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.email === ADMIN) return history.push("/admin");
        history.push("/");
      }
    });
  }, []);

  const login = (e) => {
    e.preventDefault();
    setLoading(true);
    loginUser(emailRef.current.value, passwordRef.current.value)
      .then((user) => {
        setLoading(false);
        setError(false);
      })

      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };
  const loginWithGoogle = () =>
    authWithGoogle()
      .then((res) => {
        setError(false);
      })

      .catch((err) => setError(true));
  return (
    <Container>
      <Link to="/">
        <img
          src={logo}
          alt="company logo"
          width="100"
          style={{ marginTop: 20 }}
        />
      </Link>
      <FormContainerLogin>
        <Form onSubmit={login}>
          <h1>Iniciar sesión</h1>
          <InputWrapper>
            <div>
              <MailIcon width="25" height="25" color="gray" />
              <input
                style={{ display: "block" }}
                type="email"
                placeholder="Ingrese su correo"
                ref={emailRef}
              />
            </div>
          </InputWrapper>
          <InputWrapper>
            <div>
              <KeyIcon width="25" height="25" color="gray" />
              <input
                style={{ display: "block" }}
                type={showPassword ? "text" : "password"}
                placeholder="Ingrese su contraseña"
                ref={passwordRef}
              />
              {showPassword ? (
                <EyeOffIcon
                  width="25"
                  height="25"
                  color="gray"
                  cursor="pointer"
                  onClick={togglePassword}
                />
              ) : (
                <EyeIcon
                  width="25"
                  height="25"
                  color="gray"
                  cursor="pointer"
                  onClick={togglePassword}
                />
              )}
            </div>
          </InputWrapper>
          {error && (
            <ErrorMessage>Correo y/o contraseña incorrectas</ErrorMessage>
          )}
          <ButtonLogin
            style={{
              margin: "3em 0 1em 0",
              background: "var(--black)",
              color: "white",
            }}
            isCharging={loading}
            disabled={loading ? true : false}
          >
            {loading ? "Cargando..." : "Iniciar sesión"}
          </ButtonLogin>
        </Form>
        <ButtonLogin onClick={loginWithGoogle}>
          <img src={google} width="20" alt="google icon" />
          <p>Iniciar sesión con google</p>
        </ButtonLogin>
        <Link to="/signup">
          ¿No tienes una cuenta? <strong>Registrate aqui</strong>
        </Link>
      </FormContainerLogin>
    </Container>
  );
}

export default LoginPage;
