import imagen from "../assets/cancionero.png";
import { useState, useContext } from "react";
import Counter from "./Counter";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Cancionero = () => {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAgregar = () => {
    const producto = {
      id: "cancionero-rock",
      nombre: "Cancionero de Rock",
      price: 10000,
    };

    addToCart(producto, cantidad);
    toast.success("Agregado al carrito 🛒");
  };

  return (
    <section id="cancionero" className="cancionero">
      <h2 className="cancionero-title">CANCIONERO DE ROCK</h2>

      <img src={imagen} alt="cancionero de rock" className="cancionero-img" />

      <div className="cancionero-actions">
        <p className="oferta-texto">OFERTA LANZAMIENTO $10.000 ARS</p>

        {/* 🔥 WRAPPER para alinear todo */}
        <div className="cancionero-buttons">
          <div className="btn-wrapper">
            <Counter
              cantidad={cantidad}
              setCantidad={setCantidad}
              onAdd={handleAgregar}
              showControls={false}
              showAddButton={true}
            />
          </div>

          <div className="btn-wrapper">
            <button
              className="btn btn-warning fw-bold"
              onClick={() => navigate("/carrito")}
            >
              🛒 Ver carrito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cancionero;
