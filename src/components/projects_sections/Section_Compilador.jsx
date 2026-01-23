import { NavLink } from "react-router-dom";

function Section_Compilador({ handleImageClick }) {
    return (
        <>
            <section className="col-md-4 col-lg-3 card card-body m-2 d-flex flex-column align-items-center justify-content-center card-hover-efecto efecto-card-glow">
                <div className="pt-2">
                    <p className="texto-categoria-tec text-center fw-semibold">Ejemplo de compilador sencillo</p>
                    <div>
                        <p >
                            Este proyecto académico se realizó con el objetivo de conocer el proceso de construcción de un compilador a través de dos elementos tradicionales como lo son el Analizador Léxico y Sintáctico, además de su implementación con herramientas disponibles que proporciona Python.
                        </p>
                        <p>
                            <span className="badge bg-warning text-dark">Python</span>{' '}
                            <span className="badge bg-warning text-dark">Tkinter</span>{' '}
                            <span className="badge bg-warning text-dark">ply.lex</span>{' '}
                            <span className="badge bg-warning text-dark">ply.yacc</span>
                        </p>
                        <div className="text-center">
                            <img src="/proyectos/compilador_sencillo/prev.png" title="Compilador sencillo" className="img-fluid btn-hover-efecto mt-2 w-75 border border-dark rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/compilador_sencillo/prev.png")} alt="Prev recomendador bebidas" loading="lazy"></img>
                        </div>
                    </div>
                    <div className="text-center">
                        <NavLink className="btn btn-dark btn-hover-efecto mb-3 mt-4" style={{background: "#020059"}} to="/proyectos/proyecto_compilador_sencillo">
                            <i className="bi bi-eye-fill"></i> Ver proyecto
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_Compilador;