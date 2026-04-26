import { useContext, useEffect, useState } from "react";
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

  // 🔥 animación carrito vacío
  const [animandoVacio, setAnimandoVacio] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      setAnimandoVacio(true);

      const timer = setTimeout(() => {
        setAnimandoVacio(false);
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [cart]);

  // 🔥 MENSAJE WHATSAPP DINÁMICO
  const mensaje = encodeURIComponent(
    `Hola! \nQuiero comprar:\n\n` +
      cart
        .map(
          (item) =>
            `Producto: ${item.nombre}\nCantidad: ${item.cantidad}\nSubtotal: ${formatPrice(
              item.price * item.cantidad,
            )}`,
        )
        .join("\n\n") +
      `\n\n Total: ${formatPrice(total)}`,
  );

  // 🛒 CARRITO VACÍO
  if (cart.length === 0) {
    return (
      <div className="carrito-vacio-container">
        <div className={`carrito-vacio-box ${animandoVacio ? "animar" : ""}`}>
          <h2>🛒 Tu carrito está vacío</h2>

          <button
            className="btn-primary mt-3"
            onClick={() => navigate("/", { state: { scrollTo: "cursos" } })}
          >
            Ver cursos
          </button>
        </div>
      </div>
    );
  }

  // 🛍️ CARRITO CON PRODUCTOS
  return (
    <div className="cart-wrapper">
      <h2 className="cart-title">Tu carrito</h2>

      <div className="cart-grid">
        {/* 🧾 LISTA */}
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-card">
              <div>
                <h5>{item.nombre}</h5>
                <p className="muted">Cantidad: {item.cantidad}</p>

                <p>
                  {formatPrice(item.price)} x {item.cantidad} ={" "}
                  <strong>{formatPrice(item.price * item.cantidad)}</strong>
                </p>
              </div>

              <button
                className="btn-danger"
                onClick={() => removeItem(item.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* 💳 RESUMEN */}
        <div className="cart-summary">
          <h3>Resumen</h3>

          <div className="summary-row">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>

          <button className="btn-primary full" onClick={clearCart}>
            Vaciar carrito
          </button>

          <button
            className="btn-secondary full"
            onClick={() => navigate("/", { state: { scrollTo: "cursos" } })}
          >
            Seguir comprando
          </button>

          {/* 🔥 BOTÓN WHATSAPP CON MENSAJE */}
          <a
            href={`https://wa.me/5492914602229?text=${mensaje}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-finalizar full"
          >
            Finalizar compra
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
