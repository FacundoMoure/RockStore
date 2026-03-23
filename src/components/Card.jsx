const Card = (props) => {
  return (
    <div className="card mt-3 border-1 shadow-lg text-white">
      
      <div className="card-header border-1 bg-transparent fs-4 fw-bold text-center">
        {props.title}
      </div>

      <img
        src={props.img}
        className="card-img-top"
        alt={props.title}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body">
        {props.children}
      </div>

    </div>
  );
};

export default Card;