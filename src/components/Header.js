import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useUser } from "../hooks/useUser";
import { signOut as signOutFirebase } from "../utils/auth";

function Header() {
  const { user } = useUser();
  const [{ cart }, _] = useCart();

  const signOut = () => signOutFirebase();
  return (
    <div>
      <Link to="/products">Catalogo</Link>
      <Link style={{ marginLeft: 20 }} to="/checkout">
        Carrito
      </Link>
      <span style={{ marginLeft: 10 }}>{cart?.length}</span>
      <div>
        {!user ? (
          <Link to="/signin">Iniciar sesión</Link>
        ) : (
          <>
            <p>{user.displayName}</p>
            <span>{user.email}</span>
            <button onClick={signOut}>Cerrar sesión</button>
          </>
        )}
      </div>
      <hr />
    </div>
  );
}

export default Header;
