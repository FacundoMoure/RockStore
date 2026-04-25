import Counter from "./Counter";
import { useState, useContext } from "react";
import { formatPrice } from "../components/FormatPrice";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useContext(CartContext);

  if (!producto) {
    return <h2 className="text-center mt-5">Cargando...</h2>;
  }

  const imageUrl = `${import.meta.env.BASE_URL}${producto.img}`;

  // 🔥 FUNCIÓN CORREGIDA
  const handleAgregar = () => {
    const item = {
      id: producto.id,
      nombre: producto.title, // 🔥 unificado
      price: Number(producto.price), // 🔥 siempre número
    };

    addToCart(item, cantidad);

    console.log("Agregaste:", cantidad, item.nombre);
    toast.success("Agregado al carrito 🛒");
  };

  return (
    <div className="detalle-wrapper mt-1">
      <div className="detalle-card container text-white">
        <div className="row">
          {/* IMAGEN */}
          <div className="col-12 col-md-6 d-flex align-items-center">
            <img
              src={imageUrl}
              alt={producto.title}
              className="img-fluid img-detalle"
            />
          </div>

          {/* INFO */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
            <h2 className="fw-bold">{producto.title}</h2>

            <p className="mt-3">{producto.description}</p>

            {/* 🔥 PRECIO FORMATEADO */}
            <h4 className="text-warning">{formatPrice(producto.price)}</h4>

            <div className="mt-4">
              <Counter
                cantidad={cantidad}
                setCantidad={setCantidad}
                showAddButton={false}
              />
            </div>

            <button
              className="btn btn-warning mt-3 fw-bold"
              onClick={handleAgregar}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
