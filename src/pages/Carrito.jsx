import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../components/FormatPrice";
import "./Carrito.css";

const Carrito = () => {
  const {
    cart = [],
    total = 0,
    removeItem,
    clearCart,
  } = useContext(CartContext) || {};

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="carrito-vacio-container">
        <div className="carrito-vacio-box">
          <h2>El carrito está vacío</h2>

          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/", { state: { scrollTo: "cursos" } })}
          >
            Ver cursos
          </button>
        </div>
      </div>
    );
  }

  const mensaje = encodeURIComponent(
    `Hola! Quiero estas clases:\n` +
      cart
        .map(
          (item) =>
            `• ${item.nombre} x${item.cantidad} - ${formatPrice(item.precio)}`,
        )
        .join("\n") +
      `\nTotal: ${formatPrice(total)}`,
  );

  return (
    <div className="container text-white">
      <h2 className="cart-title mb-4">Tu carrito</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="card mb-3 p-3 bg-dark text-white d-flex flex-row justify-content-between align-items-center"
        >
          <div>
            <h5>{item.nombre}</h5>
            <p>Cantidad: {item.cantidad}</p>

            {/* 🔥 PRECIO FORMATEADO */}
            <p>Precio: {formatPrice(item.price)}</p>
          </div>

          <button
            className="btn btn-danger"
            onClick={() => removeItem(item.id)}
          >
            Eliminar
          </button>
        </div>
      ))}

      {/* 🔥 TOTAL FORMATEADO */}
      <h3 className="cart-total">Total: {formatPrice(total)}</h3>

      <div className="d-flex gap-3 mt-3 flex-wrap">
        <button className="btn btn-light" onClick={clearCart}>
          Vaciar carrito
        </button>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/", { state: { scrollTo: "cursos" } })}
        >
          Seguir comprando
        </button>

        <a
          href={`https://wa.me/549XXXXXXXXXX?text=${mensaje}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success"
        >
          Finalizar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Carrito;
