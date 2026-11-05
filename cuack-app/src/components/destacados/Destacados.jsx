import "./destacados.css";
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
    imagen: EldenRing
  },
  {
    id: 2,
    genero: "Shooter",
    nombre: "Doom Eternal",
    descripcion: "Un juego de disparos en primera persona lleno de acción.",
    imagen: DoomEternal
  },
  {
    id: 3,
    genero: "Cartas",
    nombre: "Yugioh",
    descripcion: "Un juego de cartas coleccionables.",
    imagen: Yugioh
  },
  {
    id: 4,
    genero: "Acción y Aventura",
    nombre: "GTA 6",
    descripcion: "Un juego de acción y aventura en un mundo abierto.",
    imagen: Gta6
  },
  {
    id: 5,
    genero: "Supervivencia",
    nombre: "Sons Of the Forest",
    descripcion: "Un juego de supervivencia en un mundo abierto lleno de peligros.",
    imagen: SonsOfTheForest
  },
  {
    id: 6,
    genero: "RPG",
    nombre: "Persona 5 Royal",
    descripcion: "Un juego de rol con una historia envolvente y combates dinámicos.",
    imagen: P5Royal
  }
];

function Destacados() {

  return (
    <section className="container py-5">
      <span className="subtitulo">Los imprescindibles</span>
      <h2 className="mb-4">Juegos Destacados</h2>
      <div className="row">
        {juegos.map((juego) => (
          <div className=" cartas col-sm-4" key={juego.id}>
            <JuegoCard
              genero={juego.genero}
              nombre={juego.nombre}
              descripcion={juego.descripcion}
              imagen={juego.imagen}
            />
          </div>
        ))}
      </div>
    </section>);

}

export default Destacados;