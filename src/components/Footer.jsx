import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a
            href="https://instagram.com/clasesdeguitarra.bblanca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/5492914602229?text=Hola!%20quiero%20info%20de%20las%20clases"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
