import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import productos from "../data/productos.json"
import '../index.css'

const pedirProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos)
    }, 1000)
  })
}

function ItemListContainer(props) {

  const [items, setItems] = useState([])

  useEffect(() => {
    pedirProductos().then((res) => {
      setItems(res)
    })
  }, [])

  return (
    <div className="container mt-3 pb-5">
      <h1 className="mb-4 text-center titulo-principal">
        {props.mensaje}
      </h1>

      {items.length === 0 ? (
        <p className="text-white text-center">Cargando...</p>
      ) : (
        <ItemList productos={items} />
      )}
    </div>
  )
}

export default ItemListContainer