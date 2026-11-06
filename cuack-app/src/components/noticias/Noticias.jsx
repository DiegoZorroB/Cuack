import { Link } from 'react-router-dom';
import './noticias.css';
import imgPrincipal from '../../assets/shadow-realms.jpg';
import imgCard1 from '../../assets/project-zero.jpg';
import imgCard2 from '../../assets/cloud-gaming.jpg';
import imgCard3 from '../../assets/noticia1.jpeg';
import imgCard4 from '../../assets/noticia2.jpeg';
import imgCard5 from '../../assets/noticia3.jpeg';
import imgCard6 from '../../assets/noticia4.jpeg';

const Noticias = () => {
  return (
    <div className="noticias-page text-light py-5">
      <div className="container-fluid px-4 px-md-5">
        
        {/* Enlace para volver y Cabecera */}
        <section>
        <div className="mb-5">
          <Link to="/" className="text-muted-custom text-decoration-none d-inline-flex align-items-center mb-4 link-volver">
            <i className="bi bi-chevron-left me-2">Volver al inicio</i> 
          </Link>
          <div className="d-flex align-items-center mb-2">
            <div className="vertical-line-purple me-2"></div>
            <span className="text-purple font-monospace small d-block text-uppercase">Cuack Editorial</span>
          </div>
          <h1 className="fw-bold display-4 mb-3">Todas las noticias</h1>
          <p className="text-muted-custom mb-0">
            Lanzamientos, industria, e-sports y las historias que están definiendo el futuro del gaming en PC.
          </p>
        </div>
        </section>

        {/* Contenedor de lista de noticias */}
        <div className="d-flex flex-column gap-4">
          
          {/* Noticia Principal - Convertida a Link para que toda el área funcione */}
          <Link to="/noticia/shadow-realms" className="noticia-card-horizontal principal d-block text-decoration-none">
            <div className="row g-0 h-100 flex-column flex-lg-row">
              <div className="col-12 col-lg-7 img-col">
                <img src={imgPrincipal} alt="Destacada" className="img-fluid w-100 h-100 object-fit-cover img-redondeada-principal" />
              </div>
              <div className="col-12 col-lg-5 content-col d-flex flex-column justify-content-center p-4 p-lg-5">
                <span className="text-purple font-monospace small mb-2 d-block text-uppercase">En Portada</span>
                <h2 className="fw-bold text-light mb-3">
                  Shadow Realms redefine lo que significa explorar un mundo abierto
                </h2>
                <p className="text-muted-custom mb-4">
                  Hablamos con sus creadores sobre la aventura más ambiciosa del año. Conoce todos los detalles, protagonistas y claves detrás de esta historia del mundo del gaming.
                </p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="text-muted-custom small font-monospace">29 JUN 2026</span>
                  <span className="text-purple text-decoration-none d-inline-flex align-items-center fw-bold btn-leer">
                    Leer noticia <i className="bi bi-arrow-right ms-2"></i>
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <div className="row g-4">
            
            {/* Noticia Secundaria 1 */}
            <div className="col-12 col-lg-6">
              <Link to="/noticia/project-zero" className="noticia-card-horizontal secundaria h-100 d-block text-decoration-none">
                <div className="row g-0 h-100 flex-column flex-md-row">
                  <div className="col-12 col-md-5 img-col">
                    <img src={imgCard1} alt="Project Zero" className="img-fluid w-100 h-100 object-fit-cover img-redondeada-secundaria" />
                  </div>
                  <div className="col-12 col-md-7 content-col d-flex flex-column justify-content-center p-4">
                    <span className="text-purple font-monospace small mb-2 d-block text-uppercase">Lanzamiento</span>
                    <h5 className="fw-bold text-light mb-2">Project Zero ya tiene fecha de lanzamiento</h5>
                    <p className="text-muted-custom small mb-4">
                      Conoce todos los detalles, protagonistas y claves detrás de esta historia del mundo del gaming.
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="text-muted-custom small font-monospace">18 JUN 2026</span>
                      <span className="text-purple text-decoration-none small fw-bold btn-leer">
                        Leer noticia <i className="bi bi-arrow-right ms-1"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Noticia Secundaria 2 */}
            <div className="col-12 col-lg-6">
              <Link to="/noticia/cloud-gaming" className="noticia-card-horizontal secundaria h-100 d-block text-decoration-none">
                <div className="row g-0 h-100 flex-column flex-md-row">
                  <div className="col-12 col-md-5 img-col">
                    <img src={imgCard2} alt="Nube" className="img-fluid w-100 h-100 object-fit-cover img-redondeada-secundaria" />
                  </div>
                  <div className="col-12 col-md-7 content-col d-flex flex-column justify-content-center p-4">
                    <span className="text-purple font-monospace small mb-2 d-block text-uppercase">INDUSTRIA</span>
                    <h5 className="fw-bold text-light mb-2">El futuro del gaming se juega en la nube</h5>
                    <p className="text-muted-custom small mb-4">
                      Conoce todos los detalles, protagonistas y claves detrás de esta historia del mundo del gaming.
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="text-muted-custom small font-monospace">15 JUN 2026</span>
                      <span className="text-purple text-decoration-none small fw-bold btn-leer">
                        Leer noticia <i className="bi bi-arrow-right ms-1"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Noticia Secundaria 3 */}
            <div className="col-12 col-lg-6">
              <Link to="/noticia/cloud-gaming" className="noticia-card-horizontal secundaria h-100 d-block text-decoration-none">
                <div className="row g-0 h-100 flex-column flex-md-row">
                  <div className="col-12 col-md-5 img-col">
                    <img src={imgCard3} alt="Nube" className="img-fluid w-100 h-100 object-fit-cover img-redondeada-secundaria" />
                  </div>
                  <div className="col-12 col-md-7 content-col d-flex flex-column justify-content-center p-4">
                    <span className="text-purple font-monospace small mb-2 d-block text-uppercase">RECOMENDACIÓN</span>
                    <h5 className="fw-bold text-light mb-2">5 joyas indie que no puedes dejar pasar</h5>
                    <p className="text-muted-custom small mb-4">
                      Conoce todos los detalles, protagonistas y claves detrás de esta historia del mundo del gaming.
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="text-muted-custom small font-monospace">12 JUN 2026</span>
                      <span className="text-purple text-decoration-none small fw-bold btn-leer">
                        Leer noticia <i className="bi bi-arrow-right ms-1"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Noticia Secundaria 4 */}
            <div className="col-12 col-lg-6">
              <Link to="/noticia/cloud-gaming" className="noticia-card-horizontal secundaria h-100 d-block text-decoration-none">
                <div className="row g-0 h-100 flex-column flex-md-row">
                  <div className="col-12 col-md-5 img-col">
                    <img src={imgCard4} alt="Nube" className="img-fluid w-100 h-100 object-fit-cover img-redondeada-secundaria" />
                  </div>
                  <div className="col-12 col-md-7 content-col d-flex flex-column justify-content-center p-4">
                    <span className="text-purple font-monospace small mb-2 d-block text-uppercase">ACTUALIZACIÓN</span>
                    <h5 className="fw-bold text-light mb-2">Void Tactics estrena su campaña cooperativa</h5>
                    <p className="text-muted-custom small mb-4">
                      Conoce todos los detalles, protagonistas y claves detrás de esta historia del mundo del gaming.
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="text-muted-custom small font-monospace">10 JUN 2026</span>
                      <span className="text-purple text-decoration-none small fw-bold btn-leer">
                        Leer noticia <i className="bi bi-arrow-right ms-1"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Noticia Secundaria 5 */}
            <div className="col-12 col-lg-6">
              <Link to="/noticia/cloud-gaming" className="noticia-card-horizontal secundaria h-100 d-block text-decoration-none">
                <div className="row g-0 h-100 flex-column flex-md-row">
                  <div className="col-12 col-md-5 img-col">
                    <img src={imgCard5} alt="Nube" className="img-fluid w-100 h-100 object-fit-cover img-redondeada-secundaria" />
                  </div>
                  <div className="col-12 col-md-7 content-col d-flex flex-column justify-content-center p-4">
                    <span className="text-purple font-monospace small mb-2 d-block text-uppercase">ESPORTS</span>
                    <h5 className="fw-bold text-light mb-2">La final de Violet Strike rompe todos los récords</h5>
                    <p className="text-muted-custom small mb-4">
                      Conoce todos los detalles, protagonistas y claves detrás de esta historia del mundo del gaming.
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="text-muted-custom small font-monospace">08 JUN 2026</span>
                      <span className="text-purple text-decoration-none small fw-bold btn-leer">
                        Leer noticia <i className="bi bi-arrow-right ms-1"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Noticia Secundaria 6 */}
            <div className="col-12 col-lg-6">
              <Link to="/noticia/cloud-gaming" className="noticia-card-horizontal secundaria h-100 d-block text-decoration-none">
                <div className="row g-0 h-100 flex-column flex-md-row">
                  <div className="col-12 col-md-5 img-col">
                    <img src={imgCard6} alt="Nube" className="img-fluid w-100 h-100 object-fit-cover img-redondeada-secundaria" />
                  </div>
                  <div className="col-12 col-md-7 content-col d-flex flex-column justify-content-center p-4">
                    <span className="text-purple font-monospace small mb-2 d-block text-uppercase">ENTREVISTA</span>
                    <h5 className="fw-bold text-light mb-2">Dentro del universo visual de Elden Crown</h5>
                    <p className="text-muted-custom small mb-4">
                      Conoce todos los detalles, protagonistas y claves detrás de esta historia del mundo del gaming.
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="text-muted-custom small font-monospace">05 JUN 2026</span>
                      <span className="text-purple text-decoration-none small fw-bold btn-leer">
                        Leer noticia <i className="bi bi-arrow-right ms-1"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Noticias;