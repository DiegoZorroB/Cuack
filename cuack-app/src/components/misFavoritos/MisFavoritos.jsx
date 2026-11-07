import { Link } from 'react-router-dom';
import JuegoCard from "../juegoCard/JuegoCard";
import "../favoritos/favoritos.css";
import "../catalogo/catalogo.css";
import { useFavorites } from "../../context/FavoritesContext";

function MisFavoritos() {

    const {favoritos} = useFavorites();

    return (
        <main className="catalogo-page w-100" style={{ backgroundColor: 'var(--fondo-principal)' }}>

            {/* Cabecera*/}
            <section className="catalogo-hero position-relative">
                {/* div para el resplandor morado a la derecha de la cabecera */}
                <div className="catalogo-glow"></div>

                <div className="container py-5 position-relative z-1">
                    <Link to="/" className="catalogo-link-volver text-decoration-none d-inline-flex align-items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                        Volver al inicio
                    </Link>

                    <span className="cuack-genero d-block mb-2">JUEGOS PARA PC · TODAS LAS PLATAFORMAS</span>
                    <h1 className="catalogo-titulo fw-bold mb-3">Mis juegos favoritos</h1>
                    <p className="catalogo-desc mb-0">
                        Aquí puedes ver los juegos favoritos que hayas agregado.
                    </p>
                </div>
            </section>

            <section id='favoritos' className="w-100 py-5" style={{ backgroundColor: 'var(--fondo-principal)' }}>
                <div className="container">

                    {favoritos.length === 0 ? (
                        /* En vacio */
                        <div className="cuack-fav-empty-box d-flex flex-column align-items-center justify-content-center text-center mx-auto">

                            {/* Ícono de Control */}
                            <div className="cuack-fav-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--morado-principal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cuack-gamepad-icon">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    {/* Botones del control */}
                                    <path d="M8 12h4M10 10v4M16 11h.01M16 13h.01"></path>
                                </svg>
                            </div>

                            <span className="cuack-genero mt-4 mb-2">Tu colección personal</span>
                            <h2 className="text-white fw-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Tus Favoritos</h2>
                            <p className="cuack-fav-desc mb-4">
                                Todavía no tienes favoritos. ¡Explora el catálogo y añade los juegos que más te gusten!
                            </p>

                            {/* Botón Morado Sólido */}
                            <Link to="/catalogo" className="btn-solid-purple">
                                Explorar juegos
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </Link>
                        </div>

                    ) : (

                        /* Con contenido */
                        <>
                            <span className="cuack-genero d-block mb-2">Tu colección personal</span>
                            <h2 className="text-white fw-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Tus Favoritos</h2>

                            <div className="row g-4 mb-5">
                                {favoritos.map((juego) => (
                                    <div className="col-12 col-md-6 col-lg-4" key={juego.id}>
                                        <JuegoCard
                                            id={juego.id}
                                            genero={juego.genero}
                                            nombre={juego.nombre}
                                            descripcion={juego.descripcion}
                                            imagen={juego.imagen}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* botón */}
                            <div className="d-flex justify-content-center mt-4">
                                <Link to="/catalogo" className="btn-solid-purple">
                                    Explorar más juegos
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </Link>
                            </div>
                        </>
                    )}

                </div>
            </section>


        </main>
    );
}

export default MisFavoritos