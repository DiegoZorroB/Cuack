import "./categorias.css";
import { Link } from "react-router-dom";

function Categorias() {

    // 1. Información de las categorías
    const categories = [
        {
            id: 1,
            name: "Acción",
            slug: "accion",
            games: 248,
            icon: "⚔",
            imageClass: "category-action"
        },
        {
            id: 2,
            name: "Aventura",
            slug: "aventura",
            games: 186,
            icon: "◎",
            imageClass: "category-adventure"
        },
        {
            id: 3,
            name: "Deportes",
            slug: "deportes",
            games: 94,
            icon: "⚽",
            imageClass: "category-sports"
        },
        {
            id: 4,
            name: "Estrategia",
            slug: "estrategia",
            games: 132,
            icon: "♜",
            imageClass: "category-strategy"
        }
    ];

    return (

        <section id="categorias" className="categories-section">

            <div className="container">

                {/* 2. Encabezado de la sección */}
                <div className="row align-items-end categories-header">

                    <div className="col-12 col-md-8">

                        <span className="categories-subtitle">
                            ENCUENTRA TU PRÓXIMA OBSESIÓN
                        </span>

                        <h2 className="categories-title">
                            Explora por categoría
                        </h2>

                    </div>

                    <div className="col-12 col-md-4 text-md-end">

                        <Link to="/catalogo" className="btn btn-all-games">
                            Ver todos los juegos →
                        </Link>

                    </div>

                </div>


                {/* 3. Contenedor de las tarjetas */}
                <div className="row g-3">

                    {categories.map((category) => (

                        <div
                            className="col-12 col-sm-6 col-lg-3"
                            key={category.id}
                        >

                            {/* 4. Tarjeta de categoría */}
                            <Link
                                to={`/catalogo?categoria=${category.slug}`}
                                className="category-link"
                                aria-label={`Ver juegos de ${category.name}`}
                            >
                                <div className={`category-card ${category.imageClass}`}>

                                    {/* Icono */}
                                    <span className="category-icon">
                                        {category.icon}
                                    </span>

                                    {/* Información */}
                                    <div className="category-info">

                                        <h3>
                                            {category.name}
                                        </h3>

                                        <span>
                                            {category.games} JUEGOS
                                        </span>

                                    </div>

                                    {/* Flecha */}
                                    <span className="category-arrow">
                                        →
                                    </span>

                                </div>
                            </Link>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default Categorias;