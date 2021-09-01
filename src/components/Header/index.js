import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { signOut as signOutFirebase } from "../../utils/auth";
import logo from "../../images/logo.jpg";
import userDEFAULT from "../../icons/user.png";
import {
  Left,
  Right,
  HeaderContainer,
  WrapperHeader,
  Center,
  DisplayName,
  LoginButton,
  HeaderBottom,
} from "./styles";
import { ShoppingCartIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
import { auth } from "../../firebase";

function Header() {
  const [user, setUser] = useState(null);
  const [{ cart }, _] = useCart();

  const signOut = () => {
    signOutFirebase().then(() => setUser(null));
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return (
    <>
      <HeaderContainer id="header">
        <WrapperHeader>
          <Left>
            <Link to="/">
              <img src={logo} alt="company logo" />
            </Link>
          </Left>
          <Center>
            <Link to="/products">Catalogo</Link>
            <Link to="/">Nosotros</Link>
            <Link to="/">Soporte</Link>
          </Center>
          <Right>
            {!user ? (
              <LoginButton
                to="/signin"
                style={{ color: "var(--black", fontWeight: "bold" }}
              >
                Iniciar sesión
              </LoginButton>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <img
                  src={user?.photoURL ? user.photoURL : userDEFAULT}
                  alt=""
                />
                <DisplayName>{user?.displayName}</DisplayName>
                <LogoutIcon
                  onClick={signOut}
                  cursor="pointer"
                  color="white"
                  width="30"
                  style={{ marginLeft: 30 }}
                />
              </div>
            )}
          </Right>
        </WrapperHeader>
      </HeaderContainer>
      <div style={{ borderBottom: "1px solid var(--black)" }}>
        <HeaderBottom>
          <Link
            to="/checkout"
            style={{ display: "flex", alignItems: "center" }}
          >
            <p>Carrito de compra</p>
            <ShoppingCartIcon color="var(--black)" width="30" />
            <p>{cart.length}</p>
          </Link>
        </HeaderBottom>
      </div>
    </>
  );
}

export default Header;
