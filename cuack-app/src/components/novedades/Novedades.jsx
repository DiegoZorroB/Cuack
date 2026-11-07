import { Link } from 'react-router-dom';
import './novedades.css';
// Usa tus rutas reales o imágenes de prueba (placeholders)
import imgPrincipal from '../../assets/shadow-realms.png';
import imgNoticia1 from '../../assets/project-zero.jpg';
import imgNoticia2 from '../../assets/cloud-gaming.jpg';
import imgNoticia3 from '../../assets/indie-games.jpg';

const Novedades = () => {
  return (
    <section id='novedades' className="novedades-section text-light py-5">
      <div className="container-fluid px-4 px-md-5">
        
        {/* Cabecera de la sección */}
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <span className="text-purple font-monospace small mb-2 d-block text-uppercase">Mantente en el juego</span>
            <h2 className="fw-bold mb-0">Novedades & noticias</h2>
          </div>
          <Link to="/noticias" className="link-todas-noticias d-none d-md-flex align-items-center">
            Todas las noticias <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>

        <div className="row g-4">
          
          {/* Noticia Principal (Izquierda) */}
          <div className="col-12 col-lg-7">
            {/* Ahora TODA la tarjeta principal es un Link clickeable */}
            <Link to="/noticia/shadow-realms" className="noticia-card principal d-block text-decoration-none">
              <div className="img-container">
                <img src={imgPrincipal} alt="Shadow Realms" className="img-fluid w-100 h-100 object-fit-cover rounded-3" />
                <div className="overlay-gradient"></div>
              </div>
              <div className="noticia-content p-4">
                <span className="badge bg-purple text-uppercase mb-3">En Portada</span>
                <h3 className="fw-bold text-light mb-3">
                  Shadow Realms redefine lo que significa explorar un mundo abierto
                </h3>
                <p className="text-light opacity-75 mb-4">
                  Hablamos con sus creadores sobre la aventura más ambiciosa del año.
                </p>
                <div className="d-flex align-items-center text-muted-custom small font-monospace">
                  <span>29 JUN 2026</span>
                  <span className="mx-2">•</span>
                  <span>5 MIN DE LECTURA</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Noticias Secundarias (Derecha) */}
          <div className="col-12 col-lg-5">
            <div className="d-flex flex-column h-100 gap-4">
              
              <Link to="/noticia/project-zero" className="noticia-card secundaria d-flex text-decoration-none">
                <div className="img-container rounded-3 overflow-hidden flex-shrink-0">
                  <img src={imgNoticia1} alt="Project Zero" className="img-fluid w-100 h-100 object-fit-cover" />
                </div>
                <div className="noticia-content ms-3 d-flex flex-column justify-content-center w-100">
                  <span className="text-purple font-monospace small mb-1 text-uppercase">Lanzamiento</span>
                  <h6 className="fw-bold text-light mb-2 titulo-secundario">Project Zero ya tiene fecha de lanzamiento</h6>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="text-muted-custom small font-monospace">18 JUN 2026</span>
                    <i className="bi bi-arrow-right text-muted-custom arrow-icon"></i>
                  </div>
                </div>
              </Link>

              <Link to="/noticia/cloud-gaming" className="noticia-card secundaria d-flex text-decoration-none">
                <div className="img-container rounded-3 overflow-hidden flex-shrink-0">
                  <img src={imgNoticia2} alt="Cloud Gaming" className="img-fluid w-100 h-100 object-fit-cover" />
                </div>
                <div className="noticia-content ms-3 d-flex flex-column justify-content-center w-100">
                  <span className="text-purple font-monospace small mb-1 text-uppercase">Industria</span>
                  <h6 className="fw-bold text-light mb-2 titulo-secundario">El futuro del gaming se juega en la nube</h6>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="text-muted-custom small font-monospace">15 JUN 2026</span>
                    <i className="bi bi-arrow-right text-muted-custom arrow-icon"></i>
                  </div>
                </div>
              </Link>

              <Link to="/noticia/indies" className="noticia-card secundaria d-flex text-decoration-none">
                <div className="img-container rounded-3 overflow-hidden flex-shrink-0">
                  <img src={imgNoticia3} alt="Indie Games" className="img-fluid w-100 h-100 object-fit-cover" />
                </div>
                <div className="noticia-content ms-3 d-flex flex-column justify-content-center w-100">
                  <span className="text-purple font-monospace small mb-1 text-uppercase">Recomendación</span>
                  <h6 className="fw-bold text-light mb-2 titulo-secundario">5 joyas indie que no puedes dejar pasar</h6>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="text-muted-custom small font-monospace">12 JUN 2026</span>
                    <i className="bi bi-arrow-right text-muted-custom arrow-icon"></i>
                  </div>
                </div>
              </Link>
              
            </div>
          </div>
          
        </div>
        
        <div className="mt-4 d-md-none text-center">
          <Link to="/noticias" className="btn btn-outline-purple d-inline-flex justify-content-center align-items-center">
            Todas las noticias <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Novedades;