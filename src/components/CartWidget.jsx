import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { totalItems = 0 } = useContext(CartContext) || {};

  return (
    <button className="btn btn-outline-light position-relative">
      <i className="bi bi-cart3"></i>

      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {totalItems}
      </span>
    </button>
  );
}

export default CartWidget;
