import { Helmet } from 'react-helmet-async';
import { useOutletContext } from "react-router-dom";

function Recomendador_beb() {
    const { setModalSrc, openModal } = useOutletContext();

    const handleImageClick = (url) => {
        setModalSrc(url);
        openModal();
    };

    return (
        <>
            <Helmet>
                <title>Recomendador de bebidas | Portafolio</title>
            </Helmet>

            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">
                    <span className="palabra">
                        <span className="letra-hover-efecto">R</span><span className="letra-hover-efecto">e</span><span className="letra-hover-efecto">c</span><span className="letra-hover-efecto">o</span><span className="letra-hover-efecto">m</span><span className="letra-hover-efecto">a</span><span className="letra-hover-efecto">n</span><span className="letra-hover-efecto">d</span><span className="letra-hover-efecto">a</span><span className="letra-hover-efecto">d</span><span className="letra-hover-efecto">o</span><span className="letra-hover-efecto">r</span>{" "}
                    </span>
                    <span>
                        <span className="letra-hover-efecto">d</span><span className="letra-hover-efecto">e</span>{" "}
                    </span>
                    <span className="palabra">
                        <span className="letra-hover-efecto">b</span><span className="letra-hover-efecto">e</span><span className="letra-hover-efecto">b</span><span className="letra-hover-efecto">i</span><span className="letra-hover-efecto">d</span><span className="letra-hover-efecto">a</span><span className="letra-hover-efecto">s</span>{" "}
                    </span>
                    <span className="palabra">
                        <span className="letra-hover-efecto">s</span><span className="letra-hover-efecto">e</span><span className="letra-hover-efecto">n</span><span className="letra-hover-efecto">c</span><span className="letra-hover-efecto">i</span><span className="letra-hover-efecto">l</span><span className="letra-hover-efecto">l</span><span className="letra-hover-efecto">o</span>
                    </span>
                </h1>
            </div>

            <div className="container">
                <div className="row">
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light efecto-card-glow">
                        <div className="px-md-5 text-center">
                            <h3>Tecnologías empleadas</h3>
                            <p>
                                <i className="bi bi-code-slash"></i> Python
                                <br></br>
                                <i className="bi bi-gear-fill"></i> Tkinter • Pandas
                            </p>
                        </div>
                    </section>
                    
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light efecto-card-glow">
                        <div className="px-md-5 text-center">
                            <h3>Repositorio</h3>
                            <p>
                                <i className="bi bi-github"></i>
                                <br></br>
                                <a className="text-break w-100" href="https://github.com/victornietol/Proyectos/blob/main/Proyecto_Prob_Est/Actualizacion_13_04_2022/Proyecto.pyw" target="_blank" rel="noopener noreferrer">
                                    https://github.com/victornietol/Proyectos/blob/main/Proyecto_Prob_Est/Actualizacion_13_04_2022/Proyecto.pyw
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            
            <section className="card card-body mt-2 card-borde">
                <div className="px-md-5">
                    <h3 className="pb-3 pt-3 texto-subt-efecto" style={{textAlign: "start"}}>Descripción del sistema</h3>
                    <p>
                        En este proyecto académico correspondiente al tema de sistemas de recomendación, se implementa un clasificador bayesiano ingenuo, ya que, es un algoritmo muy utilizado para resolver problemas de clasificación. Es llamado ingenuo porque considera independientes a todas las variables de predicción propuestas entre unas y otras. Por lo tanto, el clasificador ingenuo de Bayes asume que la falta o la presencia de alguna propiedad en específico no se encuentra relacionada con la presencia de cualquier otra propiedad. Con lo cual, considera que cada una de estas propiedades aporta de forma independiente a la probabilidad. Una de sus ventajas es que no requiere una gran cantidad de datos de entrenamiento para realizar las estimaciones de los parámetros necesarios para la clasificación.
                        <br></br><br></br>
                        Los datos muestra para entrenar el sistema corresponden a 1,000 registros con los campos <code>Edad</code>, <code>Temperatura</code>, <code>Bebida</code>. Donde la edad esta dada en años, la temperatura en °C, y la bebida corresponde a: <code>0 = fría</code>, <code>1 = caliente</code>.
                    </p>
                </div>
            </section>

            <section className="card card-body mt-3 card-borde">
                <div className="px-md-5">
                    <h3 className="pb-4 pt-4 texto-subt-efecto" style={{textAlign: "start"}}>Funcionamiento del sistema</h3>
                    <p>
                        El procesamiento de los datos se lleva de la siguiente manera. Primero se categorizan los 1,000 registros bajo los criterios:
                    </p>
                    <div className="container">
                        <div className="row">
                            <section className="card card-body col-md-12 col-lg-6 d-flex flex-column text-center align-items-center justify-content-center mt-1 mb-3">
                                <p className="fw-semibold">Edad</p>
                                <p>
                                    <code>Edad  &lt; 18, entonces 0</code>
                                    <br></br>
                                    <code>18  &lt;= Edad  &lt; 60, entonces 1</code>
                                    <br></br>
                                    <code>Edad  &gt;= 60, entonces 2</code>
                                </p>
                            </section>
                            <section className="card card-body col-md-12 col-lg-6 d-flex flex-column text-center align-items-center justify-content-center mt-1 mb-3">
                                <p className="fw-semibold">Temperatura</p>
                                <p>
                                    <code>Temperatura  &lt;= 10°C, entonces 0 (Frío)</code>
                                    <br></br>
                                    <code>10°C  &lt; Temperatura  &lt; 20°c, entonces 1 (Templado)</code>
                                    <br></br>
                                    <code>Temperatura  &gt;= 20°c, entonces 2 (Cálido)</code>
                                </p>
                            </section>
                        </div>
                    </div>
                    <p>
                        Posteriormente se calculan las probabilidades condicionales, y para ello, se utiliza el teorema de Bayes.
                    </p>
                    <img src="/proyectos/recomendador_beb/1.png" title="Teorema de Bayes" className="img-fluid mx-auto d-block mb-2" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/recomendador_beb/1.png")} alt="Img teorema bayes recomendador" loading="lazy"></img>
                    <p>
                        Por lo tanto, se obtiene la distribución de Z, correspondiente a la probabilidad a priori.
                    </p>
                    <img src="/proyectos/recomendador_beb/2.png" title="distribución de Z" className="img-fluid mx-auto d-block mb-4" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/recomendador_beb/2.png")} alt="Img teorema bayes recomendador 2" loading="lazy"></img>
                    <p>
                        Después, se calcula la distribución conjunta P, que dentro de la fórmula de Bayes en este proyecto corresponde a la evidencia, para posteriormente calcular la verosimilitud o likelihood.
                    </p>
                    <img src="/proyectos/recomendador_beb/3.png" title="distribución de conjunta P" className="img-fluid mx-auto d-block mt-2 mb-4" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/recomendador_beb/3.png")} alt="Img teorema bayes recomendador 3" loading="lazy"></img>
                    <p>
                        Con el resultado de las operaciones anteriores ya se le pueden introducir al sistema los datos de edad (menor, adulto, adulto mayor) y temperatura del día (cálido, templado, frío) para obtener como resultado la sugerencia de bebida (fría o caliente).
                    </p>
                    <img src="/proyectos/recomendador_beb/4.png" title="Resultados 1" className="img-fluid mx-auto d-block w-50 mb-2" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/recomendador_beb/4.png")} alt="Img recomendador 4" loading="lazy"></img>
                    <img src="/proyectos/recomendador_beb/5.png" title="Resultados 2" className="img-fluid mx-auto d-block w-50 mb-4" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/recomendador_beb/5.png")} alt="Img recomendador 5" loading="lazy"></img>
                </div>
            </section>

            <section className="card card-body mt-3 card-borde">
                <div className="px-md-5 text-center">
                    <h3 className="pb-4 pt-4 texto-subt-efecto" style={{textAlign: "start"}}>Descripción de la interfaz</h3>
                    <img src="/proyectos/recomendador_beb/6.png" title="Descripcion interfaz" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/recomendador_beb/6.png")} alt="Img interfaz sistema" loading="lazy"></img>
                </div>
                <div className="mt-2 mb-3"></div>
                <div className="px-md-5">
                    <section className="card card-body mt-2 mb-2">
                        <strong>1. Opciones</strong>
                        <p>
                            <strong>1.1. Objetivo y definición.</strong>{" "}
                            Esta pestaña despliega el objetivo y definición del proyecto.
                        </p>
                        <img src="/proyectos/recomendador_beb/7.png" title="Descripcion interfaz 1" className="img-fluid mx-auto d-block mb-4" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/recomendador_beb/7.png")} alt="Img interfaz sistema 1" loading="lazy"></img>
                        <p>
                            <strong>1.2. Código del programa.</strong>{" "}
                            Abre un enlace en el navegador predeterminado del sistema y te dirige a una página que contiene el código del programa.
                        </p>
                        <p>
                            <strong>1.3. Acerca de.</strong>{" "}
                            Abre una pestaña con información como nombre del alumno, plantel, nombre del profesor, materia, etc.
                        </p>
                        <img src="/proyectos/recomendador_beb/8.png" title="Descripcion interfaz 2" className="img-fluid mx-auto d-block mb-2" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/recomendador_beb/8.png")} alt="Img interfaz sistema 2" loading="lazy"></img>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>2. Entrada de datos</strong>{" "}
                        <p>
                            En cada casilla se ingresan la edad y la temperatura del día para que se pueda generar la consulta. La edad se puede ingresar con los criterios de menor, adulto, mayor, o con la edad en número. La temperatura se puede ingresar con valores numéricos o con frío, templado o cálido. 
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>3. Salida de datos</strong>{" "}
                        <p>
                            Muestra el resultado de la sugerencia de la consulta dependiendo de los datos proporcionados. 
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>4. Botones de consulta</strong>
                        <p>
                            <strong>4.1. Consulta.</strong>{" "}
                            Genera la sugerencia y verifica que los campos contengan valores válidos según las especificaciones que se proporcionan en el botón de información. Una vez que se da el resultado de la sugerencia se deshabilita el botón consulta. En caso de que haya un campo con valores incorrectos muestra las siguientes ventanas dependiendo el caso.
                        </p>
                        <img src="/proyectos/recomendador_beb/9.png" title="Descripcion interfaz 3" className="img-fluid mx-auto d-block mb-2" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/recomendador_beb/9.png")} alt="Img interfaz sistema 3" loading="lazy"></img>
                        <p>
                            <strong>4.2. Nueva consulta.</strong>{" "}
                            Genera la sugerencia y verifica que los campos contengan valores válidos según las especificaciones que se proporcionan en el botón de información. Una vez que se da el resultado de la sugerencia se deshabilita el botón consulta. En caso de que haya un campo con valores incorrectos muestra las siguientes ventanas dependiendo el caso.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>5. información sobre la entrada de datos</strong>{" "}
                        <p>
                            Este botón despliega una ventana que muestra información sobre que valores son válidos para poder realizar las sugerencias. 
                        </p>
                        <img src="/proyectos/recomendador_beb/10.png" title="Descripcion interfaz 4" className="img-fluid mx-auto d-block mb-2" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/recomendador_beb/10.png")} alt="Img interfaz sistema 4" loading="lazy"></img>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Recomendador_beb;