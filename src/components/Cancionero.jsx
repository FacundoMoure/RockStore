import imagen from "../assets/cancionero.png";
import { useState, useContext } from "react";
import Counter from "./Counter";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // 🔥 nuevo
import toast from "react-hot-toast";

const Cancionero = () => {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // 🔥 nuevo

  const handleAgregar = () => {
    const producto = {
      id: "cancionero-rock",
      nombre: "Cancionero de Rock",
      price: 10000, // 🔥 FIX
    };

    addToCart(producto, cantidad);
    toast.success("Agregado al carrito 🛒");
  };

  return (
    <section id="cancionero" className="cancionero">
      <h2 className="cancionero-title">CANCIONERO DE ROCK</h2>

      <img src={imagen} alt="cancionero de rock" className="cancionero-img" />

      <div className="cancionero-actions">
        {/* 🔥 TEXTO OFERTA */}
        <p className="oferta-texto">OFERTA LANZAMIENTO $10.000 ARS</p>

        {/* 🔥 BOTÓN AGREGAR */}
        <Counter
          cantidad={cantidad}
          setCantidad={setCantidad}
          onAdd={handleAgregar}
          showControls={false}
          showAddButton={true}
        />

        {/* 🔥 BOTÓN VER CARRITO */}
        <button
          className="btn-ver-carrito"
          onClick={() => navigate("/carrito")}
        >
          Ver carrito
        </button>
      </div>
    </section>
  );
};

export default Cancionero;
