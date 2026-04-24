import { Link } from "react-router-dom";

const Card = (props) => {
  const imageUrl = `${import.meta.env.BASE_URL}${props.img}`;

  return (
    <div className="card mt-3 border-1 shadow-lg text-white">
      <div className="card-header border-1 bg-transparent fs-4 fw-bold text-center">
        {props.title}
      </div>

      <img
        src={imageUrl}
        className="card-img-top"
        alt={props.title}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body text-center">
        <Link to={`/item/${props.id}`} className="btn btn-outline-light mb-3">
          Ver detalle
        </Link>

        {props.children}
      </div>
    </div>
  );
};

export default Card;
