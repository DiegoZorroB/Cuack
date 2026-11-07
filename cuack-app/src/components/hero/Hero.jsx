import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import "./hero.css";
import imgShadowRealms from "../../assets/shadow-realms.png";
import imgDarkKingdom from "../../assets/dark-kingdom.png";
import imgLegendArena from "../../assets/legend-arena.png";

const INTERVALO = 5000;

// 1. Información de los videojuegos
const games = [
    {
        id: "hero-shadow-realms",
        nombre: "Shadow Realms",
        subtitle: "AVENTURA DEL MES",
        title: "SHADOW REALMS",
        description: "Adéntrate en un reino olvidado, donde antiguas fortalezas desafían el paso del tiempo y la niebla oculta secretos ancestrales.",
        genero: "Aventura",
        imagen: imgShadowRealms,
        estudio: "Realm Forge",
        lanzamiento: "2026",
        plataforma: "PC",
        imageClass: "shadow-realms"
    },
    {
        id: "hero-dark-kingdom",
        nombre: "Dark Kingdom",
        subtitle: "JUEGO DESTACADO",
        title: "DARK KINGDOM",
        description: "Enfréntate a criaturas legendarias, explora tierras misteriosas y descubre los secretos de un reino dominado por la oscuridad.",
        genero: "RPG",
        imagen: imgDarkKingdom,
        estudio: "Black Citadel",
        lanzamiento: "2026",
        plataforma: "PC",
        imageClass: "dark-kingdom"
    },
    {
        id: "hero-legend-arena",
        nombre: "Legend Arena",
        subtitle: "NUEVO LANZAMIENTO",
        title: "LEGEND ARENA",
        description: "Entra en la arena, demuestra tus habilidades y lucha por alcanzar la gloria en una competencia llena de desafíos.",
        genero: "Acción",
        imagen: imgLegendArena,
        estudio: "Arena Works",
        lanzamiento: "2026",
        plataforma: "PC",
        imageClass: "legend-arena"
    }
];

function Hero() {

    const { toggleFavorito, esFavorito } = useFavorites();
    const [indiceActivo, setIndiceActivo] = useState(0);

    // Auto-avance controlado por React: se reinicia en cada cambio de slide
    // y también cada vez que la vista vuelve a montarse (regreso a inicio).
    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceActivo((indice) => (indice + 1) % games.length);
        }, INTERVALO);

        return () => clearInterval(intervalo);
    }, [indiceActivo]);

    const irA = (index) => setIndiceActivo(index);

    const anterior = () =>
        setIndiceActivo((indice) => (indice - 1 + games.length) % games.length);

    const siguiente = () =>
        setIndiceActivo((indice) => (indice + 1) % games.length);

    return (

        <section className="hero-section">

            {/* Contenedor principal del carrusel */}
            <div
                id="heroCarousel"
                className="carousel slide"
            >

                {/* 2. Indicadores del carrusel */}
                <div className="carousel-indicators">

                    {games.map((game, index) => (

                        <button
                            key={game.id}
                            type="button"
                            className={index === indiceActivo ? "active" : ""}
                            aria-label={`Ir a ${game.nombre}`}
                            aria-current={index === indiceActivo}
                            onClick={() => irA(index)}
                        />

                    ))}

                </div>


                {/* 3. Contenedor de las diapositivas */}
                <div className="carousel-inner">

                    <div
                        className="carousel-track"
                        style={{ transform: `translateX(-${indiceActivo * 100}%)` }}
                    >

                        {games.map((game) => (

                            <div
                                key={game.id}
                                className="carousel-item"
                            >

                                {/* 4. Fondo de cada videojuego */}
                                <div className={`hero-slide ${game.imageClass}`}>

                                    <div className="container hero-content">

                                        {/* Subtítulo */}
                                        <span className="hero-subtitle">
                                            ━ {game.subtitle}
                                        </span>

                                        {/* Nombre del videojuego */}
                                        <h1 className="hero-title">
                                            {game.title}
                                        </h1>

                                        {/* Descripción */}
                                        <p className="hero-description">
                                            {game.description}
                                        </p>

                                        {/* Botones */}
                                        <div className="d-flex flex-wrap gap-3">

                                            <Link to="/catalogo" className="btn btn-hero-details">
                                                Ver detalles →
                                            </Link>

                                            <button
                                                type="button"
                                                className={`btn btn-hero-favorite ${esFavorito(game.id) ? "active" : ""}`}
                                                onClick={() => toggleFavorito(game)}
                                                aria-pressed={esFavorito(game.id)}
                                            >
                                                {esFavorito(game.id)
                                                    ? "♥ Quitar de favoritos"
                                                    : "♡ Añadir a favoritos"}
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>


                {/* 5. Botón para regresar */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    aria-label="Videojuego anterior"
                    onClick={anterior}
                >
                    <span className="carousel-control-prev-icon" />
                </button>


                {/* 6. Botón para avanzar */}
                <button
                    className="carousel-control-next"
                    type="button"
                    aria-label="Siguiente videojuego"
                    onClick={siguiente}
                >
                    <span className="carousel-control-next-icon" />
                </button>

            </div>

        </section>

    );
}

export default Hero;
