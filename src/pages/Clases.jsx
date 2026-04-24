import { useEffect, useState } from "react";
import { getClases } from "../services/firebase/clases";
import "./Carrito.css";
const Clases = () => {
  const [clases, setClases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getClases()
      .then((data) => setClases(data))
      .catch((error) => console.error("Error:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="text-center mb-5">
        <div className="titulo-container d-inline-block">
          <h1 className="text-white m-0">Temazos Fáciles de Rock!</h1>
        </div>
      </div>

      {loading ? (
        <p className="text-center text-white">Cargando...</p>
      ) : clases.length > 0 ? (
        <div className="container">
          <div className="row g-4 mt-5">
            {clases.map((clase) => (
              <div key={clase.id} className="col-12 col-sm-6 col-md-4">
                <div className="card-clase p-4 text-center text-white h-100">
                  <h2 className="mb-3">{clase.escala}</h2>
                  <p>{clase.ejercicio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-white">No hay clases disponibles</p>
      )}
    </div>
  );
};

export default Clases;
