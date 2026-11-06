import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Inicio");
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función inteligente para manejar el scroll y cambio de ruta
  const handleSectionClick = (itemName, sectionId, isMobile = false) => {
    setActiveItem(itemName);
    if (isMobile) setIsOpen(false);

    const scrollToElement = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      // Damos un pequeño respiro para que cargue la vista principal y luego scrollea
      setTimeout(scrollToElement, 100);
    } else {
      scrollToElement();
    }
  };

  return (
    <nav className={`cuack-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="cuack-navbar-container">
        {/* Logo */}
        <div className="cuack-navbar-logo" onClick={() => handleSectionClick("Inicio", "root")}>
          <img src={logo} alt="Cuack Logo" className="logo-icon" />
          <span className="logo-text">CUACK</span>
        </div>

        {/* Menú de Escritorio */}
        <ul className="cuack-navbar-menu-desktop">
          <li>
            <Link
              to="/"
              className={`cuack-nav-link ${activeItem === "Inicio" ? "active" : ""}`}
              onClick={(e) => {
                setActiveItem("Inicio");
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              Inicio
            </Link>
          </li>
          <li>
            <button
              type="button"
              className={`cuack-nav-link ${activeItem === "Categorías" ? "active" : ""}`}
              onClick={() => handleSectionClick("Categorías", "categorias")}
            >
              Categorías
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`cuack-nav-link ${activeItem === "Destacados" ? "active" : ""}`}
              onClick={() => handleSectionClick("Destacados", "destacados")}
            >
              Destacados
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`cuack-nav-link ${activeItem === "Novedades" ? "active" : ""}`}
              onClick={() => handleSectionClick("Novedades", "novedades")}
            >
              Novedades
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`cuack-nav-link ${activeItem === "Favoritos" ? "active" : ""}`}
              onClick={() => handleSectionClick("Favoritos", "favoritos")}
            >
              Favoritos
            </button>
          </li>
        </ul>

        {/* Botón Menú Hamburguesa (Móvil) */}
        <button
          className="cuack-navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      <div className={`cuack-navbar-menu-mobile ${isOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <div className="cuack-navbar-logo">
            <img src={logo} alt="Cuack Logo" className="logo-icon" />
            <span className="logo-text">CUACK</span>
          </div>
          <button className="close-toggle" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>

        <ul className="mobile-links">
          <li>
            <button
              type="button"
              className={`mobile-link ${activeItem === "Inicio" ? "active" : ""}`}
              onClick={() => {
                setActiveItem("Inicio");
                setIsOpen(false);
                if (window.location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  navigate("/");
                }
              }}
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`mobile-link ${activeItem === "Categorías" ? "active" : ""}`}
              onClick={() => handleSectionClick("Categorías", "categorias", true)}
            >
              Categorías
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`mobile-link ${activeItem === "Destacados" ? "active" : ""}`}
              onClick={() => handleSectionClick("Destacados", "destacados", true)}
            >
              Destacados
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`mobile-link ${activeItem === "Novedades" ? "active" : ""}`}
              onClick={() => handleSectionClick("Novedades", "novedades", true)}
            >
              Novedades
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`mobile-link ${activeItem === "Favoritos" ? "active" : ""}`}
              onClick={() => handleSectionClick("Favoritos", "favoritos", true)}
            >
              Favoritos
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;