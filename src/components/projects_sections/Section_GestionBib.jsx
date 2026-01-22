import { NavLink } from "react-router-dom";

function Section_GestionBib({ handleImageClick }) {
    return (
        <>
            <section className="col-md-4 col-lg-3 card card-body m-2 d-flex flex-column align-items-center justify-content-center card-hover-efecto efecto-card-glow">
                <div className="pt-2">
                    <p className="texto-categoria-tec text-center fw-semibold">Gestor de biblioteca</p>
                    <div>
                        <p >
                            Esta aplicación de escritorio fue creada con el objetivo de agilizar la administración en cuanto al inventario de libros, préstamos, generación de reportes, y clientes de una biblioteca que atendía a 3 escuelas en una zona pequeña. Esta solución sencilla ayudó para dejar de lado la administración a mano del lugar. 
                        </p>
                        <p>
                            <span className="badge bg-warning text-dark">Java</span>{' '}
                            <span className="badge bg-warning text-dark">JavaFX</span>{' '}
                            <span className="badge bg-warning text-dark">MySQL</span> 
                        </p>
                        <div className="text-center">
                            <img src="/proyectos/gestion_biblioteca/prev.jpeg" title="Gestor de biblioteca" className="img-fluid btn-hover-efecto rounded border border-dark mt-2" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/prev.jpeg")} alt="Prev gestor biblioteca" loading="lazy"></img>
                        </div>
                    </div>
                    <div className="text-center">
                        <NavLink className="btn btn-dark btn-hover-efecto mb-3 mt-4" style={{background: "#020059"}} to="/proyectos/gestion_biblioteca">
                            <i className="bi bi-eye-fill"></i> Ver proyecto
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_GestionBib;