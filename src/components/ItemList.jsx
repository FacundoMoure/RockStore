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
    <div className="products-grid">
      {productos.map((prod) => (
        <div key={prod.id} className="product-card-wrapper">
          <div className="card-modern text-white h-100 p-3">
            <Card id={prod.id} title={prod.title} img={prod.img}>
              <p className="product-desc">{prod.description}</p>
              <p className="product-price fw-bold">{formatPrice(prod.price)}</p>
            </Card>

            {/* 🔥 FOOTER PRO */}
            <div className="card-footer-custom mt-3">
              {/* ➕ AGREGAR */}
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

              {/* 🛒 VER CARRITO */}
              <div className="btn-wrapper">
                <button
                  className="btn btn-warning fw-bold w-100"
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
