import React, { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { authWithGoogle, loginUser } from "../utils/auth";
import { useUser } from "../hooks/useUser";

function LoginPage() {
  const { user, setUser } = useUser();
  const [error, setError] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const login = (e) => {
    e.preventDefault();
    loginUser(emailRef.current.value, passwordRef.current.value)
      .then((user) => console.log(user))
      .catch((err) => console.error(err.message));
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
        <div>
          <form onSubmit={login}>
            <h1>Iniciar sesión</h1>
            <label>
              <input
                style={{ display: "block" }}
                type="email"
                placeholder="Ingrese su correo"
                ref={emailRef}
              />
            </label>
            <label>
              <input
                style={{ display: "block" }}
                type="password"
                placeholder="Ingrese su contraseña"
                ref={passwordRef}
              />
            </label>
            {error && <p>Correo y/o contraseña incorrectas</p>}
            <button>Iniciar sesión</button>
            <Link to="/signup">¿No tienes una cuenta? Registrate aqui</Link>
          </form>
          <button onClick={loginWithGoogle}>Inciar sesión con google</button>
        </div>
      )}
    </>
  );
}

export default LoginPage;
