import { Helmet } from 'react-helmet-async';
import { useOutletContext } from "react-router-dom";

function Ubicaciones_transporte() {
    const { setModalSrc, openModal } = useOutletContext();

    const handleImageClick = (url) => {
        setModalSrc(url);
        openModal();
    };

    return (
        <>
            <Helmet>
                <title>Ubicaciones Metro y Metrobús | Portafolio</title>
            </Helmet>

            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">
                    <span>
                        <span className="letra-hover-efecto">U</span><span className="letra-hover-efecto">b</span><span className="letra-hover-efecto">i</span><span className="letra-hover-efecto">c</span><span className="letra-hover-efecto">a</span><span className="letra-hover-efecto">c</span><span className="letra-hover-efecto">i</span><span className="letra-hover-efecto">o</span><span className="letra-hover-efecto">n</span><span className="letra-hover-efecto">e</span><span className="letra-hover-efecto">s</span>{" "}
                    </span>
                    <span className="palabra">
                        <span className="letra-hover-efecto">M</span><span className="letra-hover-efecto">e</span><span className="letra-hover-efecto">t</span><span className="letra-hover-efecto">r</span><span className="letra-hover-efecto">o</span>{" "}
                    </span>
                    <span>
                        <span className="letra-hover-efecto">y</span>{" "}
                    </span>
                    <span className="palabra">
                        <span className="letra-hover-efecto">M</span><span className="letra-hover-efecto">e</span><span className="letra-hover-efecto">t</span><span className="letra-hover-efecto">r</span><span className="letra-hover-efecto">o</span><span className="letra-hover-efecto">b</span><span className="letra-hover-efecto">ú</span><span className="letra-hover-efecto">s</span>
                    </span>
                        
                    </h1>
                </div>

            <div className="container">
                <div className="row">
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light efecto-card-glow">
                        <div className="px-md-5 text-center">
                            <h3>Tecnologías empleadas</h3>
                            <p>
                                <i className="bi bi-code-slash"></i> JavaScript
                                <br/>
                                <i className="bi bi-gear-fill"></i> HTML • CSS • Bootstrap • Leaflet
                                <br/>
                                <i className="bi bi-cloud"></i> InfinityFree
                            </p>
                        </div>
                    </section>
                    
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light efecto-card-glow">
                        <div className="px-md-5 text-center">
                            <h3>Repositorio</h3>
                            <p>
                                <i className="bi bi-github"></i>
                                <br></br>
                                <a className="text-break w-100" href="https://github.com/victornietol/UbicacionesMetro-Metrobus" target="_blank" rel="noopener noreferrer">https://github.com/victornietol/UbicacionesMetro-Metrobus</a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            
            <section className="card card-body mt-2 card-borde">
                <div className="px-md-5">
                    <h3 className="pb-3 pt-3 texto-subt-efecto" style={{textAlign: "start"}}>Descripción</h3>
                    <p>
                        Este sitio fue creado con el objetivo de agilizar la búsqueda y localización de las estaciones cercanas a una ubicación específica de los sistemas de transporte público Metro y Metrobús en la Ciudad de México.
                    </p>
                    <p>
                        El funcionamiento es muy sencillo, se selecciona una de las dos opciones de tipo de transporte según lo requiera el usuario. Posteriormente se debe decider entre usar la ubicación actual o introducir una manualmente, ambas mostrarán en el mapa las estaciones de Metro o Metrobus más cercanas a la ubicación indicada según el tipo de transporte selccionado anteriormente. Cuando se introduzca la ubicación entonces se mostrarán las estaciones más cercanas al punto, pero se debe tener en cuenta que la ubicación mostrada puede no ser completamente precisa. Para obtener la ubicaciones y generar el mapa se utilizan <code>Leaflet</code> y <code>OpenStreetMap</code>.
                    </p>
                    <p>
                        En la página de inicio, en la seccion inferior al mapa que muestra las ubicaciones de cada estación se indican las 5 estaciones más cercanas a la ubicación introducida. Cada estación es un boton que centra la vista del mapa en la estación correspondiente. Por otro lado, en la página Metro se muestra el mapa de la red del sistema de transporte y debajo del mapa se indican las estaciones por línea, mientras que en la página Metrobús solo se muestra el mapa de la red.
                    </p>
                    <div className="text-center">
                        <a className="btn btn-dark btn-hover-efecto mb-3 mt-4" style={{background: "#020059"}} href="https://ubicaciones-metro.infinityfreeapp.com/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-box-arrow-up-right me-1"></i> Visitar sitio
                        </a>
                    </div>
                </div>
            </section>

            <section id="algotimo_genetico" className="card card-body mt-2 card-borde">
                <div className="px-md-5">
                    <h3 className="pb-3 pt-3 texto-subt-efecto" style={{textAlign: "start"}}>Imágenes</h3>
                    <div>
                        <h4 className="texto-subt-efecto">Página Inicio</h4>
                        <img src="/proyectos/ubicaciones_transporte/prev.png" title="Página inicio" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/ubicaciones_transporte/prev.png")} alt="Img sistema prev" loading="lazy"></img>
                    </div>
                    <div className="mt-5">
                        <h4 className="texto-subt-efecto">Página Metro</h4>
                        <img src="/proyectos/ubicaciones_transporte/1.png" title="Página metro 1" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/ubicaciones_transporte/1.png")} alt="Img sistema 1" loading="lazy"></img>
                        <img src="/proyectos/ubicaciones_transporte/2.png" title="Página metro 2" className="img-fluid mx-auto d-block rounded border border-dark mt-2" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/ubicaciones_transporte/2.png")} alt="Img sistema 2" loading="lazy"></img>
                    </div>
                    <div className="mt-5">
                        <h4 className="texto-subt-efecto">Página Metrobús</h4>
                        <img src="/proyectos/ubicaciones_transporte/3.png" title="Página metrobús" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/ubicaciones_transporte/3.png")} alt="Img sistema 3" loading="lazy"></img>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Ubicaciones_transporte;