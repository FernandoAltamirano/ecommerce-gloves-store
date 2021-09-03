import React from "react";
import "./styles/menu.css";
import logo from "../../images/logo.jpg";

import {
  PlusIcon,
  ClipboardCheckIcon,
  SearchIcon,
  MenuIcon,
  UserIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Menu({ toggleShow, setToggleShow, signOut }) {
  return (
    <div className={toggleShow ? "sidebar open" : "sidebar"}>
      <div className="logo-details">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className={toggleShow ? "logo" : "logo hidden"}
          />
        </Link>
        <i
          className="bx bx-menu"
          id="btn"
          onClick={() => setToggleShow(!toggleShow)}
        >
          <MenuIcon width="30" />
        </i>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/admin">
            <i>
              <SearchIcon />
            </i>
            <span className="links_name">Buscar productos</span>
          </Link>
          <span className="tooltip">Buscar productos</span>
        </li>
        <li>
          <Link to="/admin/add">
            <i>
              <PlusIcon />
            </i>
            <span className="links_name">Añadir productos</span>
          </Link>
          <span className="tooltip">Añadir productos</span>
        </li>
        <li>
          <Link to="/admin/sales">
            <i>
              <ClipboardCheckIcon />
            </i>
            <span className="links_name">Mostrar ventas</span>
          </Link>
          <span className="tooltip">Mostrar ventas</span>
        </li>
        <li className="profile">
          <div className="profile-details">
            <i>
              <UserIcon width="30" color="var(--yellow)" />
            </i>
            <p className="name">Administrador</p>
          </div>
          <LogoutIcon
            width="30"
            color="var(--yellow)"
            cursor="pointer"
            onClick={signOut}
          />
        </li>
      </ul>
    </div>
  );
}

export default Menu;
