import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"


function App() {
  return (
    <>
      <Navbar />
      <div className="py-3">
        <ItemListContainer mensaje="Aprendé a tocar con tus canciones favoritas" />
      </div>
    </>
  )
}

export default App