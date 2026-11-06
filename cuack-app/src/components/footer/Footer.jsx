import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './footer.css';
import logo from '../../assets/logo.svg'; 

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Función para manejar el clic en los enlaces del footer de forma inteligente
  const handleFooterLinkClick = (path, e) => {
    // Si ya te encuentras exactamente en esa ruta, evitamos la navegación y hacemos scroll arriba
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Si estás en otra página, permitimos que React Router navegue y además subimos el scroll
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  return (
    <footer className="footer-cuack text-light pt-5 pb-4 mt-auto">
      <div className="container-fluid px-4 px-md-5">
        <div className="row justify-content-between mb-5">
          
          {/* Columna Izquierda - Ocupa 100% en móvil (col-12), 5 columnas en PC (col-md-5) */}
          <div className="col-12 col-md-5 mb-5 mb-md-0 d-flex flex-column align-items-start">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="Cuack Logo" className="footer-logo me-3" />
              <h3 className="m-0 fw-bold tracking-wide">CUACK</h3>
            </div>
            <p className="text-muted-custom">Tu próximo mundo empieza aquí.</p>
          </div>

          {/* Columna Central - Ocupa 100% en móvil (col-12), 3 columnas en PC (col-md-3) */}
          <div className="col-12 col-md-3 mb-5 mb-md-0">
            <h6 className="fw-bold mb-4 text-uppercase text-muted-custom title-spacing">Plataforma</h6>
            <ul className="list-unstyled">
              <li className="mb-3"><Link to="/" className="footer-link" onClick={(e) => handleFooterLinkClick('/', e)}>Inicio</Link></li>
              <li className="mb-3"><Link to="catalogo" className="footer-link" onClick={(e) => handleFooterLinkClick('/catalogo', e)}>Juegos</Link></li>
              <li className="mb-3"><Link to="noticias" className="footer-link" onClick={(e) => handleFooterLinkClick('/noticias', e)}>Noticias</Link></li>
            </ul>
          </div>

          {/* Columna Derecha - Ocupa 100% en móvil (col-12), 3 columnas en PC (col-md-3) */}
          <div className="col-12 col-md-3">
            <h6 className="fw-bold mb-4 text-uppercase text-muted-custom title-spacing">Síguenos</h6>
            <div className="d-flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-wrapper">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-wrapper">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://twitch.tv" target="_blank" rel="noreferrer" className="social-icon-wrapper">
                <i className="bi bi-twitch"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Línea divisoria y Copyright */}
        <div className="row mt-4 pt-4 copyright-section">
          <div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <p className="mb-3 mb-md-0 text-muted-custom">© 2026 CUACK. Todos los derechos reservados.</p>
            <p className="mb-0 text-muted-custom">Hecho para quienes nunca dejan de jugar.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;