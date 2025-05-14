import { Helmet } from 'react-helmet-async';
import { useOutletContext } from "react-router-dom";

function Videojuegos() {
    const { setModalSrc, openModal } = useOutletContext();

    const handleImageClick = (url) => {
        setModalSrc(url);
        openModal();
    };

    return (
        <>
            <Helmet>
                <title>Videojuegos | Portafolio</title>
            </Helmet>

            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">
                    <span className="palabra">
                        <span className="letra-hover-efecto">V</span><span className="letra-hover-efecto">i</span><span className="letra-hover-efecto">d</span><span className="letra-hover-efecto">e</span><span className="letra-hover-efecto">o</span><span className="letra-hover-efecto">j</span><span className="letra-hover-efecto">u</span><span className="letra-hover-efecto">e</span><span className="letra-hover-efecto">g</span><span className="letra-hover-efecto">o</span><span className="letra-hover-efecto">s</span>{" "}
                    </span>
                </h1>
            </div>

            <div className="container">
                <div className="row">
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light efecto-card-glow">
                        <div className="px-md-5 text-center">
                            <h3>Tecnologías empleadas</h3>
                            <p>
                                <i className="bi bi-code-slash"></i> C#
                                <br></br>
                                <i className="bi bi-cpu-fill"></i> Unity
                                <br />
                                <i className="bi bi-box-fill"></i> Blender
                            </p>
                        </div>
                    </section>
                    
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light efecto-card-glow">
                        <div className="px-md-5 text-center">
                            <h3>Repositorios</h3>
                            <p>
                                <i className="bi bi-github"></i>
                                <br></br>
                                1. Videojuego:<a className="text-break w-100" href="https://github.com/victornietol/ProgramacionVideojuegos1/tree/main/ScriptsFinales/Recorrido_Virtual" target="_blank" rel="noopener noreferrer"> Recorrido Virtual
                                </a>
                                <br></br>
                                2. Videojuego:<a className="text-break w-100" href="https://github.com/victornietol/ProgramacionVideojuegos1/tree/main/ScriptsFinales/RPG" target="_blank" rel="noopener noreferrer"> RPG
                                </a>
                                <br></br>
                                3. Videojuego:<a className="text-break w-100" href="https://github.com/victornietol/ProgramacionVideojuegos1/tree/main/ScriptsFinales/Pseudo-FlappyBird" target="_blank" rel="noopener noreferrer"> Pseudo Flappy Bird
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            
            <section className="card card-body mt-2 card-borde">
                <div className="px-md-5">
                    <h3 className="pb-3 pt-3 texto-subt-efecto" style={{textAlign: "start"}}>Descripción</h3>
                    <p>
                        En esta sección se muestran los distintos tipos de videojuegos que he desarrollado como proyectos académicos, los cuales, corresponden a un RGP sencillo, un recorrido virtual con elementos interactivos y por último, un pseudo flappy bird. Los tres proyectos fueron realizados con una combinación tanto de assets y modelos 3D personalizados creados por mí en Blender, así como con elementos gratuitos disponibles en la tienda de Unity.
                    </p>
                </div>
            </section>

            <section className="card card-body mt-2 card-borde">
                <div className="px-md-5">
                    <h3 className="pb-3 pt-3 texto-subt-efecto" style={{textAlign: "start"}}>Recorrido virtual</h3>
                    <p>
                        Este pequeño juego consta de un recorrido virtual con la tematica de GOTY´s (Game Of The Year) entre un rango de años. Dentro del recorrido, se pueden observar los trailers de cada videojuego y una descripción del mismo, esto, en unas pantallas modeladas en 3D sobre las cuales se proyectan los videos. Tambíen, en otra zona del recorrido se incluyó un piano interactivo que fue modelado en 3D con notas musicales para que al pisarlas tuvieran sonido. Otros de los elementos presentes son soundtracks de los videojuegos presentes (donde para escuchar cada uno hay que pisarlo) y "Las Torres" de la Facultad de Estudios Superiores Aragón, las cuales, también fueron modelas especialmente para este recorrido, y a su vez, cuentan con una pequeña descripción de su historia en la facultad.
                        <br></br>
                        <br></br>
                        <a href="https://github.com/victornietol/ProgramacionVideojuegos1/tree/main/ScriptsFinales/Recorrido_Virtual" target="_blank" rel="noopener noreferrer">Ver Scripts</a>
                    </p>
                    <div className="ratio ratio-16x9 mt-4 mb-4">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/UNsQU6n4qN8?si=IhE-mB4KtPlSukNB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            <section className="card card-body mt-2 card-borde">
                <div className="px-md-5">
                    <h3 className="pb-3 pt-3 texto-subt-efecto" style={{textAlign: "start"}}>RPG</h3>
                    <p>
                        Este pequeño juego consta de un RPG sencillo con distintos escenarios, en donde el jugador se enfrenta a distintos enemigos y debe conseguir un determinado item para continuar. Por lo tanto, el jugador puede recuperar vida y estamina con diferentes pociones que se encuentran en los escenarios para seguir combatiendo. Se cuenta con una barra de vida y estamina para indicar la cantidad restante de cada elemento, así como, un inventario para ver los elementos coleccionables con los que se cuenta.
                        <br></br>
                        <br></br>
                        <a href="https://github.com/victornietol/ProgramacionVideojuegos1/tree/main/ScriptsFinales/RPG" target="_blank" rel="noopener noreferrer">Ver Scripts</a>
                    </p>
                    <div className="ratio ratio-16x9 mt-4 mb-4">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/2T8dnfDhaeY?si=HmyieShVFh9fwhme" title="Proyecto RPG" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            <section className="card card-body mt-2 card-borde">
                <div className="px-md-5">
                    <h3 className="pb-3 pt-3 texto-subt-efecto" style={{textAlign: "start"}}>Pseudo Flappy Bird</h3>
                    <p>
                        Este pequeño juego correspondiente a un pseudo Flappy Bird se realizó como parte de un proyecto académico para explorar las mecánicas de este tipo de videojuegos, por lo cual, consta de las mismas mecánicas que el juego original. Además, se implemento tanto para Android como PC.
                        <br></br>
                        <br></br>
                        <a href="https://github.com/victornietol/ProgramacionVideojuegos1/tree/main/ScriptsFinales/Pseudo-FlappyBird" target="_blank" rel="noopener noreferrer">Ver Scripts</a>
                    </p>
                    <div className="ratio ratio-16x9 mt-4 mb-4">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9M94aEFywFk?si=BtuDT-Hz0YQAYORU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Videojuegos;