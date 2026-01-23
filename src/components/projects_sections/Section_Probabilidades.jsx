import { NavLink } from "react-router-dom";

function Section_Probabilidades({ handleImageClick }) {
    return (
        <>
            <section className="col-md-4 col-lg-3 card card-body m-2 d-flex flex-column align-items-center justify-content-center card-hover-efecto efecto-card-glow">
                <div className="pt-2">
                    <p className="texto-categoria-tec text-center fw-semibold">Probabilidades de partidos</p>
                    <div>
                        <p >
                            El objetivo de este proyecto fue simular un evento, por lo cual, se tomó la decisión de construir un sistema en Python con el que se pudieran obtener las probabilidades de que al enfrentarse dos equipos de futbol se obtuvieran como resultado los porcentajes de victoria o empate del encuentro.
                            <br></br><br></br>
                            Estas probabilidades se obtienen de los datos introducidos por el usuario, los cuales, corresponden a goles anotados, goles recibidos, partidos jugados, tiros a puerta, entre otros. Los resultados se muestran mediante gráficas para facilitar su visualización y análisis.
                        </p>
                        <p>
                            <span className="badge bg-warning text-dark">Python</span>{' '}
                            <span className="badge bg-warning text-dark">Tkinter</span>{' '}
                            <span className="badge bg-warning text-dark">Matplotlib</span>{' '}
                            <span className="badge bg-warning text-dark">Numpy</span>
                        </p>
                        <div className="text-center">
                            <img src="/proyectos/prob_partidos/prev.png" title="Probabilidades partidos" className="img-fluid btn-hover-efecto rounded border border-dark mt-2" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/prob_partidos/prev.png")} alt="Prev probabilidades partidos" loading="lazy"></img>
                        </div>
                    </div>
                    <div className="text-center">
                        <NavLink className="btn btn-dark btn-hover-efecto mb-3 mt-4" style={{background: "#020059"}} to="/proyectos/proyecto_prob_partidos">
                            <i className="bi bi-eye-fill"></i> Ver proyecto
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_Probabilidades;