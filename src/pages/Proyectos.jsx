import { Helmet } from 'react-helmet-async';
import { NavLink } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Proyectos() {
    const { setModalSrc, openModal } = useOutletContext();

    const handleImageClick = (url) => {
        setModalSrc(url);
        openModal();
    };

    return (
        <>
            <Helmet>
                <title>Proyectos | Portafolio</title>
            </Helmet>

            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">
                    <span className="letra-hover-efecto">P</span><span className="letra-hover-efecto">r</span><span className="letra-hover-efecto">o</span><span className="letra-hover-efecto">y</span><span className="letra-hover-efecto">e</span><span className="letra-hover-efecto">c</span><span className="letra-hover-efecto">t</span><span className="letra-hover-efecto">o</span><span className="letra-hover-efecto">s</span>
                </h1>
            </div>

            <section className="card card-body card-borde pt-4 m-2 bg-light">
                <p style={{textAlign: "center"}}>
                    Algunos de los proyectos académicos y personales que he realizado son los siguientes.
                </p>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <section className="col-md-4 col-lg-3 card card-body m-2 d-flex flex-column align-items-center justify-content-center card-hover-efecto efecto-card-glow">
                            <div className="pt-2">
                                <p className="texto-categoria-tec text-center fw-semibold">Chatbot Sencillo</p>
                                <div>
                                    <p >
                                        Para este proyecto, la programación del sistema se realizó en Python implementando diccionarios para apuntar a los distintos temas del chatbot, esto, buscando aplicar la lógica de un grafo. Además, se utilizó el paquete tkinter para crear una sencilla interfaz gráfica buscando que el usuario tenga una experiencia parecida a la de las aplicaciones de mensajería convencionales.
                                        <br></br><br></br>
                                        El sistema muestra algunas recomendaciones de contenido multimedia en plataformas como Netflix, HBO Max, Disney+, Youtube y Spotify. Estas recomendaciones corresponden a películas, series, documentales, canciones o canales dependiendo de la plataforma que se le indique al chatbot.
                                    </p>
                                    <p>
                                        <span className="badge bg-warning text-dark">Python</span>{' '}
                                        <span className="badge bg-warning text-dark">Tkinter</span>{' '}
                                        <span className="badge bg-warning text-dark">OpenWeatherMap</span> 
                                    </p>
                                    <div className="text-center">
                                        <img src="/proyectos/chatbot/prev.png" title="Chatbot" className="img-fluid mx-3  btn-hover-efecto" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{width: "150px", cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/chatbot/prev.png")} alt="Prev chatbot" loading="lazy"></img>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <NavLink className="btn btn-dark btn-hover-efecto mb-3 mt-4" style={{background: "#020059"}} to="/proyectos/proyecto_chatbot">
                                        <i className="bi bi-eye-fill"></i> Ver proyecto
                                    </NavLink>
                                </div>
                            </div>
                        </section>

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

                        <section className="col-md-4 col-lg-3 card card-body m-2 d-flex flex-column align-items-center justify-content-center card-hover-efecto efecto-card-glow">
                            <div className="pt-2">
                                <p className="texto-categoria-tec text-center fw-semibold">Sitio de ubicaciones Metro y Metrobús</p>
                                <div>
                                    <p >
                                        Este sitio fue creado con el objetivo de agilizar la búsqueda y localización de las estaciones cercanas a una ubicación específica de los sistemas de transporte público Metro y Metrobús en la Ciudad de México.
                                    </p>
                                    <p>
                                        <span className="badge bg-warning text-dark">JavaScript</span>{' '}
                                        <span className="badge bg-warning text-dark">HTML</span>{' '}
                                        <span className="badge bg-warning text-dark">CSS</span>{' '}
                                        <span className="badge bg-warning text-dark">Bootstrap</span>{' '}
                                        <span className="badge bg-warning text-dark">Leaflet</span>
                                    </p>
                                    <div className="text-center">
                                        <img src="/proyectos/ubicaciones_transporte/prev.png" title="Página ubicaciones" className="img-fluid btn-hover-efecto mt-2 w-75 border border-dark rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/ubicaciones_transporte/prev.png")} alt="prev ubicaciones" loading="lazy"></img>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <NavLink className="btn btn-dark btn-hover-efecto mb-3 mt-4" style={{background: "#020059"}} to="/proyectos/proyecto_ubicaciones_transporte">
                                        <i className="bi bi-eye-fill"></i> Ver proyecto
                                    </NavLink>
                                </div>
                            </div>
                        </section>

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

                    </div>
                </div>
            </section>
        </>
    );
}

export default Proyectos;