import imagen from "../assets/cancionero.png";
import { useState, useContext } from "react";
import Counter from "./Counter";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

const Cancionero = () => {
  const [cantidad, setCantidad] = useState(1);

  const { addToCart } = useContext(CartContext);

  const handleAgregar = () => {
    const producto = {
      id: "cancionero-rock",
      nombre: "Cancionero de Rock",
      precio: 15000,
    };

    addToCart(producto, cantidad);
    toast.success("Agregado al carrito 🛒");
  };

  return (
    <section id="cancionero" className="cancionero">
      <h2 className="cancionero-title">CANCIONERO DE ROCK</h2>

      <img src={imagen} alt="cancionero de rock" className="cancionero-img" />

      <div className="cancionero-actions">
        <Counter
          cantidad={cantidad}
          setCantidad={setCantidad}
          onAdd={handleAgregar}
          showControls={false}
          showAddButton={true}
        />
      </div>
    </section>
  );
};

export default Cancionero;
