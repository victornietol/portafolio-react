import { NavLink } from "react-router-dom";

function Section_BasesDatos({ handleImageClick }) {
    return (
        <>
            <section className="col-md-4 col-lg-3 card card-body m-2 d-flex flex-column align-items-center justify-content-center card-hover-efecto efecto-card-glow">
                <div className="pt-2">
                    <p className="texto-categoria-tec text-center fw-semibold">Bases de datos relacionales</p>
                    <div>
                        <p >
                            En esta sección se encuentran algunas de las bases de datos relacionales que he implementado como parte de proyectos académicos. Dichas bases, se modelaron teniendo en cuenta las formas normales para cuidar la integradad de los datos y evitar redundancia. Al final de cada sección correspondiente a una base, se incluye el diagrama entidad-relación de la base de datos y los enlaces a los scripts <i>.sql</i> con la creación de tablas, inserciones, triggers, procedimientos almacenados, funciones y vistas, según sea el caso.
                        </p>
                        <p>
                            <span className="badge bg-warning text-dark">SQL</span>{' '}
                            <span className="badge bg-warning text-dark">MySQL</span>
                        </p>
                        <div className="text-center">
                            <img src="/proyectos/bases_datos_sql/DER-BD-1.png" title="Recomendador bebidas" className="img-fluid btn-hover-efecto mt-2 w-75" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/bases_datos_sql/DER-BD-1.png")} alt="Prev recomendador bebidas" loading="lazy"></img>
                        </div>
                    </div>
                    <div className="text-center">
                        <NavLink className="btn btn-dark btn-hover-efecto mb-3 mt-4" style={{background: "#020059"}} to="/proyectos/proyecto_bases_datos_sql">
                            <i className="bi bi-eye-fill"></i> Ver proyectos
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_BasesDatos;