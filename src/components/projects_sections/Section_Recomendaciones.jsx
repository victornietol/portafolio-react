import { NavLink } from "react-router-dom";

function Section_Recomendaciones({ handleImageClick }) {
    return (
        <>
            <section className="col-md-4 col-lg-3 card card-body m-2 d-flex flex-column align-items-center justify-content-center card-hover-efecto efecto-card-glow">
                <div className="pt-2">
                    <p className="texto-categoria-tec text-center fw-semibold">Sistema de recomendaciones sencillo</p>
                    <div>
                        <p >
                            En este proyecto se diseño un clasificador bayesiano ingenuo que permite predecir el comportamiento de un cliente. Esto se utiliza para que el sistema pueda recomendar un tipo de bebida (fría o caliente) dependiendo de si el cliente es una persona menor, adulta o un adulto mayor; y también dependiendo del estado del clima que se le indique (cálido, frío o templado).
                        </p>
                        <p>
                            <span className="badge bg-warning text-dark">Python</span>{' '}
                            <span className="badge bg-warning text-dark">Tkinter</span>{' '}
                            <span className="badge bg-warning text-dark">Pandas</span>
                        </p>
                        <div className="text-center">
                            <img src="/proyectos/recomendador_beb/prev.png" title="Recomendador bebidas" className="img-fluid btn-hover-efecto mt-2" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/recomendador_beb/prev.png")} alt="Prev recomendador bebidas" loading="lazy"></img>
                        </div>
                    </div>
                    <div className="text-center">
                        <NavLink className="btn btn-dark btn-hover-efecto mb-3 mt-4" style={{background: "#020059"}} to="/proyectos/proyecto_recomendador_beb">
                            <i className="bi bi-eye-fill"></i> Ver proyecto
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_Recomendaciones;