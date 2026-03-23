import Card from "./Card";
import Counter from "./Counter";

const ItemList = ({ productos }) => {
  return (
    <div className="row g-4">
      {productos.map((prod) => (
        <div key={prod.id} className="col-12 col-sm-6 col-md-4">
          <div className="card-modern text-white h-100 p-3">

            <Card title={prod.title} img={prod.img}>
              <p>{prod.description}</p>
              <p className="fw-bold">${prod.price}</p>
            </Card>

            <div className="card-footer-custom mt-3">
              <Counter />
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList;
