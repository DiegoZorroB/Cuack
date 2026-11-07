import { useState } from 'react';
import { Link } from 'react-router-dom';
import JuegoCard from '../juegoCard/JuegoCard';
import EldenRing from "../../assets/EldenRing.jpg";
import DoomEternal from "../../assets/DoomEternal.jpg";
import Yugioh from "../../assets/Yugioh.png";
import Gta6 from "../../assets/Gta6.jpg";
import P5Royal from "../../assets/P5Royal.jpg";
import SonsOfTheForest from "../../assets/SonsOfTheForest.jpg";
import './catalogo.css';


const juegosCatalogo = [
{
    id: 1,
    genero: "Soulslike",
    nombre: "Elden Ring",
    descripcion: "Un juego de rol de acción en un mundo abierto.",
    imagen: EldenRing,
    estudio: "FromSoftware",
    lanzamiento: "25 de febrero de 2022",
    plataforma: "Steam"
  },
  {
    id: 2,
    genero: "Shooter",
    nombre: "Doom Eternal",
    descripcion: "Un juego de disparos en primera persona lleno de acción.",
    imagen: DoomEternal,
    estudio: "id Software",
    lanzamiento: "20 de marzo de 2020",
    plataforma: "Steam"
  },
  {
    id: 3,
    genero: "Cartas",
    nombre: "Yugioh",
    descripcion: "Un juego de cartas coleccionables.",
    imagen: Yugioh,
    estudio: "Konami",
    lanzamiento: "18 de septiembre de 2002",
    plataforma: "Steam"
  },
  {
    id: 4,
    genero: "Acción y Aventura",
    nombre: "GTA 6",
    descripcion: "Un juego de acción y aventura en un mundo abierto.",
    imagen: Gta6,
    estudio: "RockstarGames",
    lanzamiento: "19 de noviembre de 2026",
    plataforma: "PlayStation"
  },
  {
    id: 5,
    genero: "Supervivencia",
    nombre: "Sons Of the Forest",
    descripcion: "Un juego de supervivencia en un mundo abierto lleno de peligros.",
    imagen: SonsOfTheForest,
    estudio: "Newnight",
    lanzamiento: "22 de febrero del 2024",
    plataforma: "Steam"
  },
  {
    id: 6,
    genero: "RPG",
    nombre: "Persona 5 Royal",
    descripcion: "Un juego de rol con una historia envolvente y combates dinámicos.",
    imagen: P5Royal,
    estudio: "ATLUS",
    lanzamiento: "21 de octubre del 2022",
    plataforma: "Steam"
  }
];

var cantidadJuegos = juegosCatalogo.length;

function Catalogo() {
  // Estado para controlar qué categoría está seleccionada
  const [filtroActivo, setFiltroActivo] = useState('Todos');
  //Arreglo de categorias
  const categorias = ['Todos', 'Acción', 'Aventura', 'Shooter', 'Soulslike', 'Supervivencia'];

  return (
    <main className="catalogo-page w-100" style={{ backgroundColor: 'var(--fondo-principal)' }}>
      
      {/* Cabecera*/}
      <section className="catalogo-hero position-relative">
        {/* div para el resplandor morado a la derecha de la cabecera */}
        <div className="catalogo-glow"></div> 
        
        <div className="container py-5 position-relative z-1">
          <Link to="/" className="catalogo-link-volver text-decoration-none d-inline-flex align-items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="me-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            Volver al inicio
          </Link>
          
          <span className="cuack-genero d-block mb-2">JUEGOS PARA PC · TODAS LAS PLATAFORMAS</span>
          <h1 className="catalogo-titulo fw-bold mb-3">Catálogo completo</h1>
          <p className="catalogo-desc mb-0">
            Descubre mundos nuevos en Steam, Epic Games, Riot Games y EA app. Una selección creada para jugar en PC.
          </p>
        </div>
      </section>

      
      <section className="container pb-5">
        
        {/* Fila de Filtros y Estadísticas */}
        <div className="d-flex justify-content-between align-items-end mb-3 flex-wrap gap-3">
          
          {/* Botones de Categorías */}
          <div className="catalogo-filtros d-flex gap-2 overflow-auto">
            {/*Map para recorrer el arreglo de las categorias*/}
            {categorias.map(cat => (
              <button 
                key={cat} 
                className={`btn-filtro ${filtroActivo === cat ? 'active' : ''}`}
                onClick={() => setFiltroActivo(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Estadísticas */}
          <div className="catalogo-stats text-start text-md-end">
            <span className="stats-number d-block">{cantidadJuegos} JUEGOS</span>
            <span className="stats-text">Actualizado semanalmente</span>
          </div>
        </div>
        
        {/* div divisor */}
        <hr className="cuack-modal-divider mb-4" />

        {/* Cuadrícula de Juegos */}
        <div className="row g-4">
          {juegosCatalogo.map(juego => (
            <div className="col-12 col-md-6 col-lg-4" key={juego.id}>
              <JuegoCard 
              id={juego.id}
              genero={juego.genero}
              nombre={juego.nombre}
              descripcion={juego.descripcion}
              imagen={juego.imagen}
              estudio={juego.estudio}
              lanzamiento={juego.lanzamiento}
              plataforma={juego.plataforma}
              />
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}

export default Catalogo;