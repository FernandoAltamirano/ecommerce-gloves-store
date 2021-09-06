import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerUser, signOut } from "../utils/auth";
import { Container, ErrorMessage, Form, InputWrapper } from "../globalStyles";
import { CheckIcon, KeyIcon, MailIcon, UserIcon } from "@heroicons/react/solid";
import { FormContainerRegister, Row } from "./styles/register";
import { useToggle } from "../hooks/useToggle";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import logo from "../images/logo2.jpg";
import { auth } from "../firebase";
const regularExpression = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [showPassword, togglePassword] = useToggle();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const passwordRef = useRef({});
  passwordRef.current = watch("password", "");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        history.push("/");
      }
    });
  }, []);

  const onSubmit = (data) => {
    setLoading(true);
    setError(false);
    registerUser(data.email, data.password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: data.name + " " + data.lastname,
        });
        signOut();
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };
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
      <FormContainerRegister>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1 style={{ marginBottom: ".5em" }}>Registrate</h1>
          {error && (
            <p style={{ color: "red", margin: 0, fontWeight: "bold" }}>
              El email ya ha sido registrado
            </p>
          )}
          <Row>
            <InputWrapper>
              <div>
                <UserIcon width="25" height="25" color="gray" />
                <input
                  type="text"
                  placeholder="Nombres completos"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Ingrese nombres válidos",
                    },
                  })}
                />
              </div>
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <div>
                <UserIcon width="25" height="25" color="white" />
                <input
                  type="text"
                  placeholder="Apellidos completos"
                  {...register("lastname", {
                    required: {
                      value: true,
                      message: "Ingrese apellidos válidos",
                    },
                  })}
                />
              </div>
              {errors.lastname && (
                <ErrorMessage>{errors.lastname.message}</ErrorMessage>
              )}
            </InputWrapper>
          </Row>
          <InputWrapper>
            <div>
              <MailIcon width="25" height="25" color="gray" />
              <input
                type="email"
                placeholder="Correo electrónico"
                {...register("email", {
                  pattern: {
                    value: regularExpression,
                    message: "Formato de correo inválido",
                  },
                  required: {
                    value: true,
                    message: "Ingrese un correo válido",
                  },
                })}
              />
            </div>
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </InputWrapper>
          <Row>
            <InputWrapper>
              <div>
                <KeyIcon width="25" height="25" color="gray" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  {...register("password", {
                    minLength: {
                      value: 8,
                      message:
                        "La contraseña debe tener como minimo 8 caracteres",
                    },
                    required: {
                      value: true,
                      message: "Ingrese una contraseña válida",
                    },
                  })}
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
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <div>
                <CheckIcon width="25" height="25" color="gray" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirme su contraseña"
                  {...register("passwordConfirmation", {
                    validate: (value) =>
                      value === passwordRef.current ||
                      "Las contraseñas no coinciden",
                  })}
                />
              </div>
              {errors.passwordConfirmation && (
                <ErrorMessage>
                  {errors.passwordConfirmation.message}
                </ErrorMessage>
              )}
            </InputWrapper>
          </Row>

          <button isCharging={loading} disabled={loading ? true : false}>
            {loading ? "Cargando..." : "Registrate"}
          </button>
          <Link to="/signin">
            ¿Ya tienes una cuenta? <strong>Inicia sesión aqui</strong>
          </Link>
        </Form>
      </FormContainerRegister>
    </Container>
  );
}

export default RegisterPage;
