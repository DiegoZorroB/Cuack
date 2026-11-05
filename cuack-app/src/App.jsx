import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Categorias from "./components/categorias/Categorias";
import Destacados from "./components/destacados/Destacados";
import Catalogo from "./components/catalogo/Catalogo";
import Novedades from "./components/novedades/Novedades";
import Noticias from "./components/noticias/Noticias";
import Favoritos from "./components/favoritos/Favoritos";
import Footer from "./components/footer/Footer";


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Categorias />
            <Destacados />
            <Novedades />
            <Favoritos />
          </>
        }
        />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App
