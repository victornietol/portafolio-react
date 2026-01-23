import { NavLink } from "react-router-dom";

function Section_Videojuegos({ handleImageClick }) {
    return (
        <>
            <section className="col-md-4 col-lg-3 card card-body m-2 d-flex flex-column align-items-center justify-content-center card-hover-efecto efecto-card-glow">
                <div className="pt-2">
                    <p className="texto-categoria-tec text-center fw-semibold">Videojuegos</p>
                    <div>
                        <p >
                            En esta sección se muestran los distintos tipos de videojuegos que he desarrollado como proyectos académicos. Los cuales, corresponden a un RGP sencillo, un recorrido virtual con elementos interactivos y por último, un pseudo flappy bird. Los tres proyectos fueron realizados con una combinación tanto de assets y modelos 3D personalizados, así como con elementos gratuitos disponibles en la tienda de Unity.
                        </p>
                        <p>
                            <span className="badge bg-warning text-dark">C#</span>{' '}
                            <span className="badge bg-warning text-dark">Unity</span>{' '}
                            <span className="badge bg-warning text-dark">Android</span>
                        </p>
                        <div className="text-center">
                            <img src="/proyectos/videojuegos/prev.png" title="Compilador Videojuegos" className="img-fluid btn-hover-efecto mt-2 w-75 border border-dark rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/videojuegos/prev.png")} alt="prev videojuegos" loading="lazy"></img>
                        </div>
                    </div>
                    <div className="text-center">
                        <NavLink className="btn btn-dark btn-hover-efecto mb-3 mt-4" style={{background: "#020059"}} to="/proyectos/proyecto_videojuegos">
                            <i className="bi bi-eye-fill"></i> Ver proyectos
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_Videojuegos;