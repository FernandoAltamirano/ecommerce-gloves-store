import React, { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { authWithGoogle, loginUser } from "../utils/auth";
import { useUser } from "../hooks/useUser";
import { GoogleButton, FormContainerLogin } from "./styles/login";
import {
  Container,
  ErrorMessage,
  Form,
  InputWrapper,
  DefaultButton,
} from "../globalStyles";
import { MailIcon, KeyIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import google from "../icons/google.png";
import { useToggle } from "../hooks/useToggle";
import logo from "../images/logo2.jpg";
function LoginPage() {
  const [showPassword, togglePassword] = useToggle();
  const { user, setUser } = useUser();
  const [error, setError] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const login = (e) => {
    e.preventDefault();
    loginUser(emailRef.current.value, passwordRef.current.value)
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
        setError(false);
      })

      .catch((err) => setError(true));
  };
  const loginWithGoogle = () =>
    authWithGoogle()
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
        setError(false);
      })

      .catch((err) => setError(true));

  return (
    <>
      {user ? (
        <Redirect to="/" />
      ) : (
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
              <DefaultButton>Iniciar sesión</DefaultButton>
            </Form>
            <GoogleButton onClick={loginWithGoogle}>
              <img src={google} width="20" alt="google icon" />
              <p>Iniciar sesión con google</p>
            </GoogleButton>
            <Link to="/signup">
              ¿No tienes una cuenta? <strong>Registrate aqui</strong>
            </Link>
          </FormContainerLogin>
        </Container>
      )}
    </>
  );
}

export default LoginPage;
