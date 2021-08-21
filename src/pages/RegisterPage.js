import React, { useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerUser, signOut } from "../utils/auth";
import { useUser } from "../hooks/useUser";
const regularExpression = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

function RegisterPage() {
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
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Registrate</h1>
            <label>
              <input
                type="text"
                placeholder="Ingrese sus nombres completos"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Ingrese nombres válidos",
                  },
                })}
              />
              {errors.Name && <span>{errors.Name.message}</span>}
            </label>
            <label>
              <input
                type="text"
                placeholder="Ingrese sus apellidos completos"
                {...register("lastname", {
                  required: {
                    value: true,
                    message: "Ingrese apellidos válidos",
                  },
                })}
              />
              {errors.Lastname && <span>{errors.Lastname.message}</span>}
            </label>
            <label>
              <input
                type="email"
                placeholder="Correo"
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
              {errors.email && <span>{errors.email.message}</span>}
            </label>
            <label>
              <input
                type="password"
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
              {errors.password && <span>{errors.password.message}</span>}
            </label>
            <label>
              <input
                type="password"
                placeholder="Confirme su contraseña"
                {...register("passwordConfirmation", {
                  validate: (value) =>
                    value === passwordRef.current ||
                    "Las contraseñas no coinciden",
                })}
              />
              {errors.passwordConfirmation && (
                <span>{errors.passwordConfirmation.message}</span>
              )}
            </label>
            <button>Registrate</button>
            <Link to="/signin">¿Ya tienes una cuenta? Inicia sesión aqui</Link>
          </form>
        </div>
      )}
    </>
  );
}

export default RegisterPage;
