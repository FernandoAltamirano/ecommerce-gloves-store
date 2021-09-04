import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import "./styles/layout.css";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { ADMIN } from "../../constants/example";

export default function Layout({ children }) {
  const [toggleShow, setToggleShow] = useState(true);
  const history = useHistory();

  const signOut = () => {
    history.push("/login");
    auth.signOut();
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) return history.push("/signin");
      else if (auth.currentUser.email !== ADMIN) return history.push("/");
    });
  }, []);

  return (
    <div className="Container-Layout">
      <Menu
        toggleShow={toggleShow}
        setToggleShow={setToggleShow}
        signOut={signOut}
      />
      <section className="home-section">{children}</section>
    </div>
  );
}
