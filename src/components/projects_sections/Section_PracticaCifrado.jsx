import { NavLink } from "react-router-dom";

function Section_PracticaCifrado({ handleImageClick }) {
    return (
        <>
            <section className="col-md-4 col-lg-3 card card-body m-2 d-flex flex-column align-items-center justify-content-center card-hover-efecto efecto-card-glow">
                <div className="pt-2">
                    <p className="texto-categoria-tec text-center fw-semibold">Práctica cifrado</p>
                    <div>
                        <p >
                            El objetivo de este proyecto académico fue poner en práctica conceptos básicos de seguridad, mediante la creación de un sitio web donde se le pide a los usuarios crear una cuenta, o en su defecto, iniciar sesión para poder ingresar a la página principal. Una vez estando en la página principal, el usuario puede aplicar un cifrado o descifrado básico al texto que introduzca según sea el caso. El contenido a cifrar y descifrar acepta tanto texto como carácteres especiales y emojis.
                        </p>
                        <p>
                            <span className="badge bg-warning text-dark">PHP</span>{' '}
                            <span className="badge bg-warning text-dark">JavaScript</span>{' '}
                            <span className="badge bg-warning text-dark">HTML</span>{' '}
                            <span className="badge bg-warning text-dark">SQL</span>{' '}
                            <span className="badge bg-warning text-dark">bcrypt</span>
                        </p>
                        <div className="text-center">
                            <img src="/proyectos/practica_cifrado/prev.png" title="Página cifrado" className="img-fluid btn-hover-efecto mt-2 w-75 border border-dark rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/practica_cifrado/prev.png")} alt="prev cifrado" loading="lazy"></img>
                        </div>
                    </div>
                    <div className="text-center">
                        <NavLink className="btn btn-dark btn-hover-efecto mb-3 mt-4" style={{background: "#020059"}} to="/proyectos/proyecto_practica_cifrado">
                            <i className="bi bi-eye-fill"></i> Ver proyecto
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_PracticaCifrado;