import { useState } from "react";
import "./Navbar.css";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // 🔥 SCROLL A SECCIONES
  const scrollASeccion = (id) => {
    navigate("/", { state: { scrollTo: id } });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-dark px-4 sticky-top py-3">
      {/* IZQUIERDA */}
      <div className="navbar-section">
        <img src={logo} alt="logo" height="40" />

        <span
          onClick={() => scrollASeccion("inicio")}
          className="fw-bold text-warning fs-5 text-decoration-none ms-2"
          style={{ cursor: "pointer" }}
        >
          RockStore
        </span>
      </div>

      {/* CENTRO (DESKTOP) */}
      <ul className="navbar-menu-center d-none d-md-flex list-unstyled m-0 text-white fw-semibold">
        <li>
          <span
            onClick={() => scrollASeccion("inicio")}
            className="nav-link-custom"
          >
            Inicio
          </span>
        </li>

        <li>
          <span
            onClick={() => scrollASeccion("cursos")}
            className="nav-link-custom"
          >
            Cursos
          </span>
        </li>

        <li>
          <span
            onClick={() => scrollASeccion("cancionero")}
            className="nav-link-custom"
          >
            Cancionero
          </span>
        </li>
      </ul>

      {/* DERECHA */}
      <div className="navbar-section gap-3">
        <div className="d-none d-md-block">
          <div
            onClick={() => navigate("/carrito")}
            style={{ cursor: "pointer" }}
          >
            <CartWidget />
          </div>
        </div>

        <button
          className="btn btn-outline-light d-md-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="bi bi-list fs-4"></i>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <ul className="mobile-menu">
          <li>
            <span onClick={() => scrollASeccion("inicio")}>Inicio</span>
          </li>
          <li>
            <span onClick={() => scrollASeccion("cursos")}>Cursos</span>
          </li>
          <li>
            <span onClick={() => scrollASeccion("cancionero")}>Cancionero</span>
          </li>

          <li className="d-flex align-items-center gap-2 mt-3">
            <div
              onClick={() => {
                navigate("/carrito");
                setMenuOpen(false);
              }}
              style={{ cursor: "pointer" }}
            >
              <CartWidget />
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
