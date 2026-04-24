import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carrito from "./pages/Carrito";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, Route, useLocation } from "react-router-dom";
import Cancionero from "./components/Cancionero";
import { useEffect } from "react";
import Clases from "./pages/Clases";
import { Link } from "react-router-dom";

const NotFound = () => {
  return <h2 className="text-center mt-5">404 - Página no encontrada</h2>;
};

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;

      setTimeout(() => {
        const seccion = document.getElementById(id);
        if (seccion) {
          seccion.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);

      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="app-layout">
      <Navbar />

      <div className="container py-4 main-content">
        <section id="inicio">
          <section id="cursos">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <ItemListContainer mensaje="GUITARRA ROCK" />
                    <div className="text-center my-4">
                      <Link to="/clases" className="btn btn-primary">
                        Ver Clases Gratuitas! - Temazos Fáciles de Rock
                      </Link>
                    </div>
                    <Cancionero />
                  </>
                }
              />

              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route
                path="/category/:categoria"
                element={<ItemListContainer />}
              />
              <Route path="*" element={<NotFound />} />
              <Route path="/clases" element={<Clases />} />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
          </section>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
