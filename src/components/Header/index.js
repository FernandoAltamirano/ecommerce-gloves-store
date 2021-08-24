import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useUser } from "../../hooks/useUser";
import { signOut as signOutFirebase } from "../../utils/auth";
import logo from "../../images/logo.jpg";
import { Left, Right, HeaderContainer, WrapperHeader, Center } from "./styles";
import { ShoppingCartIcon } from "@heroicons/react/solid";
function Header() {
  const { user } = useUser();
  const [{ cart }, _] = useCart();

  const signOut = () => signOutFirebase();
  return (
    <HeaderContainer>
      <WrapperHeader>
        <Left>
          <img src={logo} alt="company logo" />
        </Left>
        <Center>
          <Link to="/products">Catalogo</Link>
          <Link to="/">Nosotros</Link>
          <Link to="/">Soporte</Link>
        </Center>
        <Right>
          <ShoppingCartIcon color="white" width="30" />
          {!user ? (
            <Link to="/signin">Iniciar sesión</Link>
          ) : (
            <>
              <p>{user.displayName}</p>
              <span>{user.email}</span>
              <button onClick={signOut}>Cerrar sesión</button>
            </>
          )}
        </Right>
      </WrapperHeader>
    </HeaderContainer>
  );
}

export default Header;
