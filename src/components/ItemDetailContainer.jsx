import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productos from "../data/productos.json";
import ItemDetail from "./ItemDetail";

const getProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((p) => p.id === Number(id)));
    }, 100);
  });
};

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProducto(id).then((res) => setProducto(res));
  }, [id]);

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
