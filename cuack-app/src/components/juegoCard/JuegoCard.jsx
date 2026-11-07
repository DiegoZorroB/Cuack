import { useState } from "react";
import { createPortal } from "react-dom";
import { useFavorites } from "../../context/FavoritesContext";
import "./juegoCard.css";

function JuegoCard({ id, genero, nombre, descripcion, imagen, estudio, lanzamiento, plataforma }) {
  const [showModal, setShowModal] = useState(false);
  //funciones del contexto global
  const {toggleFavorito, esFavorito} = useFavorites();
  //almancenamos el resultado de la funcion global del contexto en la variable para saber si el juego ya esta en favoritos por su id
  const isFav = esFavorito(id);
  const juegoActual = {id, genero, nombre, descripcion, imagen, estudio, lanzamiento, plataforma};

  return (
    <>
      <article className="card cuack-juego-card h-100">
        <div className="position-relative cuack-img-container">
          <img src={imagen} className="card-img-top cuack-card-img" alt={nombre} />
          <div className="cuack-img-gradient"></div>
          
          <button 
            className={`cuack-fav-btn ${isFav ? 'active' : ''}`} 
            onClick={() => toggleFavorito(juegoActual)}
            aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill={isFav ? "var(--morado-principal)" : "none"} stroke={isFav ? "var(--morado-principal)" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <div className="card-body cuack-card-body d-flex flex-column">
          <span className="cuack-genero">{genero}</span>
          <h3 className="card-title cuack-titulo">{nombre}</h3>
          <p className="card-text cuack-descripcion flex-grow-1">{descripcion}</p>
          
          <button onClick={() => setShowModal(true)} className="cuack-explorar mt-auto text-start bg-transparent border-0 p-0">
            Explorar juego
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </button>
        </div>
      </article>

      {/* 2. Envolvemos el Modal en createPortal y le decimos que se renderice en document.body */}
      {showModal && createPortal(
        <div className="cuack-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="cuack-modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button className="cuack-modal-close-icon" onClick={() => setShowModal(false)}>✕</button>

            <div className="row g-0 h-100">
              <div className="col-12 col-md-5 position-relative cuack-modal-img-wrapper d-none d-md-block">
                <img src={imagen} alt={nombre} className="cuack-modal-full-img" />
              </div>

              <div className="col-12 col-md-7 cuack-modal-info">
                <span className="cuack-genero">{genero}</span>
                <h2 className="cuack-modal-title">{nombre}</h2>
                <p className="cuack-modal-desc">
                  {descripcion} Una experiencia diseñada para PC con un mundo reactivo, progresión profunda y desafíos que se adaptan a tu estilo de juego.
                </p>

                <hr className="cuack-modal-divider" />

                <div className="row cuack-modal-specs">
                  <div className="col-4">
                    <span className="spec-label">ESTUDIO</span>
                    <span className="spec-value">{estudio}</span>
                  </div>
                  <div className="col-4">
                    <span className="spec-label">LANZAMIENTO</span>
                    <span className="spec-value">{lanzamiento}</span>
                  </div>
                  <div className="col-4">
                    <span className="spec-label">PLATAFORMA</span>
                    <span className="spec-value">{plataforma}</span>
                  </div>
                </div>

                <div className="cuack-modal-actions mt-4">
                  <button className="btn-modal-jugar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                      <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                    </svg>
                    Jugar ahora
                  </button>
                  <button className="btn-modal-oficial">
                    Página oficial
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                      <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                  </button>
                  <button className="btn-modal-cerrar" onClick={() => setShowModal(false)}>
                    Cerrar
                  </button>
                </div>
                
                <small className="cuack-modal-helper d-block mt-3">
                  Se abrirá {plataforma}. El juego debe estar instalado en este equipo.
                </small>
              </div>
            </div>
          </div>
        </div>,
        document.body // Destino del portal
      )}
    </>
  );
}

export default JuegoCard;