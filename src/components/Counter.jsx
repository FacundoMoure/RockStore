import { useState } from "react";
import "../index.css";

const Counter = ({
  cantidad,
  setCantidad,
  onAdd,
  showAddButton = true,
  showControls = true,
}) => {
  const [numInterno, setNumInterno] = useState(1);

  const esControlado = cantidad !== undefined && setCantidad !== undefined;

  const valor = esControlado ? cantidad : numInterno;
  const setValor = esControlado ? setCantidad : setNumInterno;

  const sumar = () => {
    setValor(valor + 1);
  };

  const restar = () => {
    if (valor > 1) {
      setValor(valor - 1);
    }
  };

  const handleClick = () => {
    if (onAdd) {
      onAdd(valor);
    }
  };

  return (
    <div>
      {showControls && (
        <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
          <button onClick={restar} className="btn-counter">
            -
          </button>
          <span className="contador-texto">Clases: {valor}</span>
          <button onClick={sumar} className="btn-counter">
            +
          </button>
        </div>
      )}

      {showAddButton && (
        <div className="text-center">
          <button
            className="btn btn-warning mt-3 fw-bold"
            onClick={handleClick}
          >
            Agregar al carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Counter;
