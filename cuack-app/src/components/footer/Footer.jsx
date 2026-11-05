import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg'; 

const Footer = () => {
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
              <li className="mb-3"><a href="#inicio" className="footer-link">Inicio</a></li>
              <li className="mb-3"><a href="#juegos" className="footer-link">Juegos</a></li>
              <li className="mb-3"><a href="#noticias" className="footer-link">Noticias</a></li>
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