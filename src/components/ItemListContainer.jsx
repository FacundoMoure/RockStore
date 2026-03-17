import Counter from "./Counter";
import Card from "./Card";
import guitar from "../assets/card.jpg"

function ItemListContainer(props) {
  return (
    <div className="container mt-5">
      <div
        className="text-center p-3 text-white bg-dark rounded shadow mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <h1 className="mb-4">{props.mensaje}</h1>
        <p className="lead mt-3">
          Explorá nuestros cursos y aprendé a tocar tus canciones favoritas.
        </p>
        <Counter />
        <Card title="Clases Personalizadas" author="Facundo" date="17/03/2026" img={guitar}>
          <p>Adaptadas a tu estilo y nivel.</p>
        </Card>
      </div>
    </div>
  );
}

export default ItemListContainer
