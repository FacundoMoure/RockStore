import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Counter from "./Counter";
import { formatPrice } from "./FormatPrice";
import toast from "react-hot-toast";

const ItemList = ({ productos }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="row g-5">
      {productos.map((prod) => (
        <div key={prod.id} className="col-12 col-md-6 col-lg-4">
          <div className="card-modern text-white h-100 p-3">
            <Card id={prod.id} title={prod.title} img={prod.img}>
              <p>{prod.description}</p>
              <p className="fw-bold">{formatPrice(prod.price)}</p>
            </Card>

            {/* 🔥 FOOTER PRO */}
            <div className="card-footer-custom mt-3">
              {/* 🔹 BOTÓN AGREGAR */}
              <div className="btn-wrapper">
                <Counter
                  onAdd={(cantidad) => {
                    addToCart(
                      {
                        id: prod.id,
                        nombre: prod.title,
                        price: Number(prod.price),
                      },
                      cantidad,
                    );

                    toast.success("Agregado al carrito 🛒");
                  }}
                  showControls={false}
                />
              </div>

              {/* 🔹 BOTÓN VER CARRITO */}
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
        </div>
      ))}
    </div>
  );
};

export default ItemList;
