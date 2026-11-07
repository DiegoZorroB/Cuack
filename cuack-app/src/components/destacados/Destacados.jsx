import "./destacados.css";
import {Link } from "react-router-dom";
import JuegoCard from "../juegoCard/JuegoCard";
import EldenRing from "../../assets/EldenRing.jpg";
import DoomEternal from "../../assets/DoomEternal.jpg";
import Yugioh from "../../assets/Yugioh.png";
import Gta6 from "../../assets/Gta6.jpg";
import P5Royal from "../../assets/P5Royal.jpg";
import SonsOfTheForest from "../../assets/SonsOfTheForest.jpg";

const juegos = [
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

function Destacados() {

  return (
    <section id='destacados' className="contenedor-destacados">
      <div className="container py-5">
      <span className="subtitulo">Los imprescindibles</span>
      <h2 className="titulo mb-4">Juegos Destacados</h2>
      <div className="row g-4">
        {juegos.map((juego) => (
          <div className="col-12 col-md-6 col-lg-4 cartas" key={juego.id}>
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

        <div className="d-flex justify-content-center mt-4">
          <Link to="/catalogo" className="btn-explorar-catalogo">
            Explorar catálogo completo 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>);

}

export default Destacados;