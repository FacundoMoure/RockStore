import { useState } from "react";
import "../index.css";

const Counter = (props) => {
  const [num, setNum] = useState(0);

  const sumar = () => {
    setNum(num + 1);
  };

  const restar = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const agregarAlCarrito = () => {
    console.log("Lecciones agregadas:", num);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
        <button onClick={restar}>-</button>
        <span>Clases: {num}</span>
        <button onClick={sumar}>+</button>
      </div>

      <div className="text-center">
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Counter;
