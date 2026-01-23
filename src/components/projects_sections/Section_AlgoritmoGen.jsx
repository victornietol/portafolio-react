import { NavLink } from "react-router-dom";

function Section_AlgoritmoGen({ handleImageClick }) {
    return (
        <>
            <section className="col-md-4 col-lg-3 card card-body m-2 d-flex flex-column align-items-center justify-content-center card-hover-efecto efecto-card-glow">
                <div className="pt-2">
                    <p className="texto-categoria-tec text-center fw-semibold">Algoritmo genético y convertidor de AFND a AFD</p>
                    <div>
                        <p >
                            En esta sección se muestran dos proyectos académicos. Uno corresponde a la aplicación de un algoritmo genético para encontrar un numero de cuatro dégitos. Mientras que el segundo es un convertidor de Autómata Finito No Determinista (AFND) en un Autómata Finito Determinista (AFD).
                        </p>
                        <p>
                            <span className="badge bg-warning text-dark">Python</span>{' '}
                            <span className="badge bg-warning text-dark">Numpy</span>
                        </p>
                        <div className="text-center">
                            <img src="/proyectos/algoritmoGenetico_AFND/prev.png" title="AFND a AFD" className="img-fluid btn-hover-efecto mt-2 w-75 border border-dark rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/algoritmoGenetico_AFND/prev.png")} alt="prev" loading="lazy"></img>
                        </div>
                    </div>
                    <div className="text-center">
                        <NavLink className="btn btn-dark btn-hover-efecto mb-3 mt-4" style={{background: "#020059"}} to="/proyectos/proyecto_algoritmoGenetico_AFD">
                            <i className="bi bi-eye-fill"></i> Ver proyectos
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_AlgoritmoGen;