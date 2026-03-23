import "./Navbar.css"
import CartWidget from "./CartWidget"
import logo from "../assets/logo.png"


function Navbar() {
  return (
    <nav className="navbar navbar-dark px-4 d-flex justify-content-between sticky-top py-3">

      {/* IZQUIERDA */}
      <div className="d-flex align-items-center gap-2">
        <img src={logo} alt="logo" height="40" />
        <span className="fw-bold text-warning fs-4">
          Clases de Guitarra
        </span>
      </div>

      {/* CENTRO */}
      <ul className="position-absolute start-50 translate-middle-x d-flex gap-5 list-unstyled m-0 text-white fs-5 fw-semibold">
        <li className="nav-link-custom">Inicio</li>
        <li className="nav-link-custom">Productos</li>
        <li className="nav-link-custom">Contacto</li>
      </ul>

      {/* DERECHA */}
      <CartWidget />

    </nav>
  )
}

export default Navbar