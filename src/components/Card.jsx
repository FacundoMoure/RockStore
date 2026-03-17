const Card = (props) => {
  return (
    <div className="card mt-4 border-0 shadow-lg bg-dark text-white">
      <img
        src={props.img}
        className="card-img-top"
        alt={props.title}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <div className="card-header border-0 bg-transparent fs-4 fw-bold">
        {props.title}
      </div>

      <div className="card-body">{props.children}</div>

      <div className="card-footer border-0 bg-transparent">
        <ul className="mb-0 list-unstyled small text-secondary">
          <li>Autor: {props.author}</li>
          <li>Fecha: {props.date}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
