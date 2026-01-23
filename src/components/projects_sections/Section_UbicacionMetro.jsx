import { NavLink } from "react-router-dom";

function Section_UbicacionMetro({ handleImageClick }) {
    return (
        <>
            <section className="col-md-4 col-lg-3 card card-body m-2 d-flex flex-column align-items-center justify-content-center card-hover-efecto efecto-card-glow">
                <div className="pt-2">
                    <p className="texto-categoria-tec text-center fw-semibold">Sitio de ubicaciones Metro y Metrobús</p>
                    <div>
                        <p >
                            Este sitio fue creado con el objetivo de agilizar la búsqueda y localización de las estaciones cercanas a una ubicación específica de los sistemas de transporte público Metro y Metrobús en la Ciudad de México.
                        </p>
                        <p>
                            <span className="badge bg-warning text-dark">JavaScript</span>{' '}
                            <span className="badge bg-warning text-dark">HTML</span>{' '}
                            <span className="badge bg-warning text-dark">CSS</span>{' '}
                            <span className="badge bg-warning text-dark">Bootstrap</span>{' '}
                            <span className="badge bg-warning text-dark">Leaflet</span>
                        </p>
                        <div className="text-center">
                            <img src="/proyectos/ubicaciones_transporte/prev.png" title="Página ubicaciones" className="img-fluid btn-hover-efecto mt-2 w-75 border border-dark rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/ubicaciones_transporte/prev.png")} alt="prev ubicaciones" loading="lazy"></img>
                        </div>
                    </div>
                    <div className="text-center">
                        <NavLink className="btn btn-dark btn-hover-efecto mb-3 mt-4" style={{background: "#020059"}} to="/proyectos/proyecto_ubicaciones_transporte">
                            <i className="bi bi-eye-fill"></i> Ver proyecto
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_UbicacionMetro;