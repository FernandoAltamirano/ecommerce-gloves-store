import React, { useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerUser, signOut } from "../utils/auth";
import { useUser } from "../hooks/useUser";
import {
  Container,
  DefaultButton,
  ErrorMessage,
  Form,
  InputWrapper,
} from "../globalStyles";
import { MailIcon } from "@heroicons/react/solid";
import { FormContainerRegister, Row } from "./styles/register";
import { useToggle } from "../hooks/useToggle";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import logo from "../images/logo2.jpg";
const regularExpression = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

function RegisterPage() {
  const [showPassword, togglePassword] = useToggle();
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const passwordRef = useRef({});
  passwordRef.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
    registerUser(data.email, data.password)
      .then((authUser) => {
        console.log(authUser);
        authUser.additionalUserInfo({ cart: 1 });
        authUser.user.updateProfile({
          displayName: data.name + " " + data.lastname,
        });
        signOut();
      })
      .catch((err) => console.error(err.message));
  };
  return (
    <>
      {user ? (
        <Redirect to="/signin" />
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
          <FormContainerRegister>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <h1>Registrate</h1>
              <Row>
                <InputWrapper>
                  <div>
                    <MailIcon width="25" height="25" color="gray" />
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
                    <MailIcon width="25" height="25" color="gray" />
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
                    <MailIcon width="25" height="25" color="gray" />
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
                    <MailIcon width="25" height="25" color="gray" />
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

              <DefaultButton>Registrate</DefaultButton>
              <Link to="/signin">
                ¿Ya tienes una cuenta? <strong>Inicia sesión aqui</strong>
              </Link>
            </Form>
          </FormContainerRegister>
        </Container>
      )}
    </>
  );
}

export default RegisterPage;
