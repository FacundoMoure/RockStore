import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import productos from "../data/productos.json";
import "../index.css";

const pedirProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 100);
  });
};

function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const { categoria } = useParams(); // 🔥 NUEVO

  useEffect(() => {
    pedirProductos().then((res) => {
      if (categoria) {
        const filtrados = res.filter((p) => p.category === categoria);
        setItems(filtrados);
      } else {
        setItems(res);
      }
    });
  }, [categoria]); // 🔥 CLAVE

  return (
    <div className="container pt-3 pb-2">
      <h1 className="text-center titulo-principal">{props.mensaje}</h1>

      {items.length === 0 ? (
        <div className="loading-container">
          <p className="loading-text">Cargando...</p>
        </div>
      ) : (
        <ItemList productos={items} />
      )}
    </div>
  );
}

export default ItemListContainer;
