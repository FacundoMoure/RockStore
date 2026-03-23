import Card from "./Card";
import Counter from "./Counter";

const ItemList = ({ productos }) => {
  return (
    <div className="row">
      {productos.map((prod) => (
        <div key={prod.id} className="col-12 col-sm-6 col-md-4 mb-4">
          <div className="text-center p-3 text-white rounded shadow h-100">
            <Card
              title={prod.title} // 👈 ESTE es el título real
              img={prod.img}
            >
              <p>{prod.description}</p>
              <p className="fw-bold">${prod.price}</p>
            </Card>
            <hr />
            <div className="card-footer-custom">
                <Counter />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
