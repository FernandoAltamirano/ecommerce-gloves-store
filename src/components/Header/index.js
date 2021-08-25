import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useUser } from "../../hooks/useUser";
import { signOut as signOutFirebase } from "../../utils/auth";
import logo from "../../images/logo.jpg";
import {
  Left,
  Right,
  HeaderContainer,
  WrapperHeader,
  Center,
  DisplayName,
  DropDown,
  LoginButton,
} from "./styles";
import { ShoppingCartIcon, ChevronDownIcon } from "@heroicons/react/solid";
function Header() {
  const { user } = useUser();
  const [{ cart }, _] = useCart();

  const signOut = () => signOutFirebase();
  return (
    <HeaderContainer id="header">
      <WrapperHeader>
        <Left>
          <img src={logo} alt="company logo" />
        </Left>
        <Center>
          <Link to="/products">Catalogo</Link>
          <Link to="/">Nosotros</Link>
          <Link href="/">Soporte</Link>
        </Center>
        <Right>
          <div>
            <Link to="/checkout">
              <ShoppingCartIcon color="white" width="30" />
            </Link>
            <p
              style={{
                marginRight: 5,
                marginLeft: 5,
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
              }}
            >
              {cart.length}
            </p>
          </div>
          {!user ? (
            <LoginButton
              to="/signin"
              style={{ color: "var(--black", fontWeight: "bold" }}
            >
              Iniciar sesión
            </LoginButton>
          ) : (
            <>
              <img onClick={signOut} src={user?.photoURL} alt="" />
              <DisplayName>{user.displayName}</DisplayName>
              <ChevronDownIcon color="white" width="20" />
              {/* <DropDown>
                <p>Cerrar sesión</p>
              </DropDown> */}
            </>
          )}
        </Right>
      </WrapperHeader>
    </HeaderContainer>
  );
}

export default Header;
