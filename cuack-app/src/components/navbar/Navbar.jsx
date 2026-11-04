import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Inicio');
  const [scrolled, setScrolled] = useState(false);

  // Detecta cuando el usuario hace scroll para cambiar el fondo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Cuack Logo" className="logo-icon" />
          <span className="logo-text">CUACK</span>
        </div>

        {/* Menú de Escritorio (Escrito de forma explícita) */}
        <ul className="navbar-menu-desktop">
          <li>
            <button 
              className={`nav-link ${activeItem === 'Inicio' ? 'active' : ''}`} 
              onClick={() => setActiveItem('Inicio')}
            >
              Inicio
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${activeItem === 'Categorías' ? 'active' : ''}`} 
              onClick={() => setActiveItem('Categorías')}
            >
              Categorías
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${activeItem === 'Destacados' ? 'active' : ''}`} 
              onClick={() => setActiveItem('Destacados')}
            >
              Destacados
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${activeItem === 'Novedades' ? 'active' : ''}`} 
              onClick={() => setActiveItem('Novedades')}
            >
              Novedades
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${activeItem === 'Favoritos' ? 'active' : ''}`} 
              onClick={() => setActiveItem('Favoritos')}
            >
              Favoritos
            </button>
          </li>
        </ul>

        {/* Botón Menú Hamburguesa (Móvil) */}
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

      </div>

      {/* Menú Móvil Desplegable (Escrito de forma explícita) */}
      <div className={`navbar-menu-mobile ${isOpen ? 'open' : ''}`}>
        <div className="mobile-header">
          <div className="navbar-logo">
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
              className={`mobile-link ${activeItem === 'Inicio' ? 'active' : ''}`} 
              onClick={() => { setActiveItem('Inicio'); setIsOpen(false); }}
            >
              Inicio
            </button>
          </li>
          <li>
            <button 
              className={`mobile-link ${activeItem === 'Categorías' ? 'active' : ''}`} 
              onClick={() => { setActiveItem('Categorías'); setIsOpen(false); }}
            >
              Categorías
            </button>
          </li>
          <li>
            <button 
              className={`mobile-link ${activeItem === 'Destacados' ? 'active' : ''}`} 
              onClick={() => { setActiveItem('Destacados'); setIsOpen(false); }}
            >
              Destacados
            </button>
          </li>
          <li>
            <button 
              className={`mobile-link ${activeItem === 'Novedades' ? 'active' : ''}`} 
              onClick={() => { setActiveItem('Novedades'); setIsOpen(false); }}
            >
              Novedades
            </button>
          </li>
          <li>
            <button 
              className={`mobile-link ${activeItem === 'Favoritos' ? 'active' : ''}`} 
              onClick={() => { setActiveItem('Favoritos'); setIsOpen(false); }}
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