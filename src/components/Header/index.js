import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
  MenuBurguer,
  HeaderBottomContainer,
} from "./styles";
import { MenuIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
import { auth } from "../../firebase";
import { ADMIN } from "../../constants/example";
import Modal from "../Modal";

function Header({ transparent }) {
  const [user, setUser] = useState(null);
  const [{ cart }, _] = useCart();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const signOut = () => {
    signOutFirebase().then(() => {
      history.push("/");
      setUser(null);
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <HeaderContainer transparent={transparent} id="header">
        <WrapperHeader transparent={transparent}>
          <Left>
            <Link to="/">
              <img src={logo} alt="company logo" />
            </Link>
          </Left>
          <Center>
            <Link to="/products">Catalogo</Link>
            <Link to="/">Nosotros</Link>
            {auth.currentUser?.email === ADMIN ? (
              <Link to="/admin">Admin</Link>
            ) : (
              <a href="#c">Contacto</a>
            )}
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
                  width="30"
                  color="white"
                  style={{ marginLeft: 10 }}
                />
              </div>
            )}
            <MenuBurguer>
              <MenuIcon
                cursor="pointer"
                style={{ cursor: "pointer", marginLeft: 30 }}
                color="white"
                width="40"
                onClick={() => setShowMenu(!showMenu)}
              />
            </MenuBurguer>
          </Right>
        </WrapperHeader>
      </HeaderContainer>
      <HeaderBottomContainer transparent={transparent}>
        <HeaderBottom transparent={transparent}>
          <Link
            to="/checkout"
            style={{ display: "flex", alignItems: "center" }}
          >
            <p>Carrito de compra</p>
            <ShoppingCartIcon
              color={transparent ? "white" : "var(--black)"}
              width="30"
            />
            <p>{cart.length}</p>
          </Link>
        </HeaderBottom>
      </HeaderBottomContainer>
      <Modal showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
}

export default Header;
