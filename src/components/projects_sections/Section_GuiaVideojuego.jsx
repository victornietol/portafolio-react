import { NavLink } from "react-router-dom";

function Section_GuiaVideojuego({ handleImageClick }) {
    return (
        <>
            <section className="col-md-4 col-lg-3 card card-body m-2 d-flex flex-column align-items-center justify-content-center card-hover-efecto efecto-card-glow">
                <div className="pt-2">
                    <p className="texto-categoria-tec text-center fw-semibold">App Guía de Videojuego</p>
                    <div>
                        <p >
                            Esta idea de aplicación se realizó para ayudar a los jugadores de la saga <i>Persona</i> y más específicamente de <i>Persona 4 Golden</i>. Se tomaron como inspiración las apps que ayudan a los jugadores de Monster Hunter (un ejemplo MHGUDB en la Play Store), que ayudan recopilando varios datos del juego para que el jugador conozca y busque lo que no puede encontrar en el juego.
                            <br></br><br></br>
                            Entonces, esta app esta pensada para ser una guía/wiki para los jugadores de <i>Persona 4</i> y, con ello, recopilar todos los datos del juego para así ya no tener que estar usando diferentes páginas para encontrar lo que buscas, sino que toda la información se encuentre en una sola app.
                        </p>
                        <p>
                            <span className="badge bg-warning text-dark">Android</span>{' '}
                            <span className="badge bg-warning text-dark">Dart</span>{' '}
                            <span className="badge bg-warning text-dark">Flutter</span>{' '}
                            <span className="badge bg-warning text-dark">Cloud Firestore</span>
                        </p>
                        <div className="text-center">
                            <img src="/proyectos/guia_videojuego/prev.jpeg" title="Gestor presupuestos" className="img-fluid btn-hover-efecto mt-2 w-25 border border-dark rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/prev.jpeg")} alt="Prev gestor" loading="lazy"></img>
                        </div>
                    </div>
                    <div className="text-center">
                        <NavLink className="btn btn-dark btn-hover-efecto mb-3 mt-4" style={{background: "#020059"}} to="/proyectos/proyecto_guia_videojuego">
                            <i className="bi bi-eye-fill"></i> Ver proyecto
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_GuiaVideojuego;