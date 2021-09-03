import { useEffect } from "react";
import { Link } from "react-router-dom";
import { XIcon } from "@heroicons/react/outline";
import "./styles.css";
import { auth } from "../../firebase";
import { ADMIN } from "../../constants/example";
function Modal({ showMenu, setShowMenu }) {
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    });
    return () =>
      window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
          setShowMenu(false);
        }
      });
  });
  const closeModal = () => setShowMenu(false);
  return (
    <div className={showMenu ? "modal showModal" : "modal"}>
      <div className="close_container">
        <XIcon
          color="white"
          style={{ cursor: "pointer" }}
          width="35"
          onClick={closeModal}
        />
      </div>
      <div className="links_container">
        <Link to="/products">Catálogo</Link>
        <Link to="/">Nosotros</Link>
        {auth.currentUser?.email === ADMIN ? (
          <Link to="/admin">Admin</Link>
        ) : (
          <Link to="/">Contact</Link>
        )}
      </div>
    </div>
  );
}

export default Modal;
