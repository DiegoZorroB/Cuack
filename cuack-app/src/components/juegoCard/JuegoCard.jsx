import { useState } from "react";
import "./JuegoCard.css";

function JuegoCard({ genero, nombre, descripcion, imagen }) {
  const [favorito, setFavorito] = useState(false);

  return (
    <article className="card cuack-juego-card h-100">
      
      {/* Contenedorimagen e icono fav */}
      <div className="position-relative cuack-img-container">
        <img src={imagen} className="card-img-top cuack-card-img" alt={nombre} />
        
        {/*Div para el desvanecimiento de la imagen */}
        <div className="cuack-img-gradient"></div>
        
        {/* Botón de favoritos */}
        <button 
          className={`cuack-fav-btn ${favorito ? 'active' : ''}`} 
          onClick={() => setFavorito(!favorito)}
          aria-label={favorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="20" 
            height="20" 
            fill={favorito ? "var(--morado-principal)" : "none"} 
            stroke={favorito ? "var(--morado-principal)" : "currentColor"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      <div className="card-body cuack-card-body d-flex flex-column">
        <span className="cuack-genero">{genero}</span>
        <h3 className="card-title cuack-titulo">{nombre}</h3>
        <p className="card-text cuack-descripcion flex-grow-1">{descripcion}</p>
        
        <a href="#" className="cuack-explorar mt-auto">
          Explorar juego
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </a>
      </div>
    </article>
  );
}

export default JuegoCard;