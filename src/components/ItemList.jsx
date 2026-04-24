import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Card from "./Card";
import Counter from "./Counter";
import { formatPrice } from "./FormatPrice";
import toast from "react-hot-toast";

const ItemList = ({ productos }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="row g-5">
      {productos.map((prod) => (
        <div key={prod.id} className="col-12 col-md-6 col-lg-4">
          <div className="card-modern text-white h-100 p-3">
            <Card id={prod.id} title={prod.title} img={prod.img}>
              <p>{prod.description}</p>
              <p className="fw-bold">{formatPrice(prod.price)}</p>
            </Card>

            <div className="card-footer-custom mt-3">
              <Counter
                onAdd={(cantidad) => {
                  addToCart(
                    {
                      id: prod.id,
                      nombre: prod.title,
                      precio: prod.price,
                    },
                    cantidad,
                  );

                  toast.success("Agregado al carrito 🛒");
                }}
                showControls={false}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
