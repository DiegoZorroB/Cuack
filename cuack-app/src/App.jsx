import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Barra_separador from "./components/barra-separador/barra_separador";
import Hero from "./components/hero/Hero";
import Categorias from "./components/categorias/Categorias";
import Destacados from "./components/destacados/Destacados";
import Catalogo from "./components/catalogo/Catalogo";
import Novedades from "./components/novedades/Novedades";
import Noticias from "./components/noticias/Noticias";
import Favoritos from "./components/favoritos/Favoritos";
import MisFavoritos from "./components/misFavoritos/MisFavoritos";
import Footer from "./components/footer/Footer";


function App() {

  return (
    <>
      <Navbar />
      <Barra_separador/>
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
        <Route path="/misFavoritos" element={<MisFavoritos />}/>
      </Routes>
      <Footer />
    </>
  );
}


export default App
