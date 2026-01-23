import { NavLink } from "react-router-dom";

function Section_GestorPresup({ handleImageClick }) {
    return (
        <>
            <section className="col-md-4 col-lg-3 card card-body m-2 d-flex flex-column align-items-center justify-content-center card-hover-efecto efecto-card-glow">
                <div className="pt-2">
                    <p className="texto-categoria-tec text-center fw-semibold">App Gestor de Presupuestos</p>
                    <div>
                        <p >
                            La aplicación Gestor de Presupuestos fue diseñada para ayudar al usuario a administrar sus ingresos y egresos de manera local mediante presupuestos que puede elaborar con categorias dinamicamente.
                            <br></br><br></br>
                            Con gráficos y reportes, se busca brindar apoyo al usuario en la toma de decisiones y supervisión de sus finanzas.
                        </p>
                        <p>
                            <span className="badge bg-warning text-dark">Android</span>{' '}
                            <span className="badge bg-warning text-dark">Dart</span>{' '}
                            <span className="badge bg-warning text-dark">Flutter</span>{' '}
                            <span className="badge bg-warning text-dark">SQLite</span>
                        </p>
                        <div className="text-center">
                            <img src="/proyectos/gestor_presupuestos/prev.jpeg" title="Gestor presupuestos" className="img-fluid btn-hover-efecto mt-2 w-25 border border-dark rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/gestor_presupuestos/prev.jpeg")} alt="Prev gestor" loading="lazy"></img>
                        </div>
                    </div>
                    <div className="text-center">
                        <NavLink className="btn btn-dark btn-hover-efecto mb-3 mt-4" style={{background: "#020059"}} to="/proyectos/proyecto_gestor_presupuestos">
                            <i className="bi bi-eye-fill"></i> Ver proyecto
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_GestorPresup;