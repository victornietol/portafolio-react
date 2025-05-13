import { Helmet } from 'react-helmet-async';
import { useOutletContext } from "react-router-dom";

function Prob_partidos() {
    const { setModalSrc, openModal } = useOutletContext();

    const handleImageClick = (url) => {
        setModalSrc(url);
        openModal();
    };

    return (
        <>
            <Helmet>
                <title>Probabilidades de partidos | Portafolio</title>
            </Helmet>

            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">Probabilidades de partidos</h1>
            </div>

            <div className="container">
                <div className="row">
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light">
                        <div className="px-md-5 text-center">
                            <h3>Tecnologías empleadas</h3>
                            <p>
                                <i className="bi bi-code-slash"></i> Python
                                <br></br>
                                <i className="bi bi-gear-fill"></i> Tkinter • Matplotlib • Numpy
                            </p>
                        </div>
                    </section>
                    
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light">
                        <div className="px-md-5 text-center">
                            <h3>Repositorio</h3>
                            <p>
                                <i className="bi bi-github"></i>
                                <br></br>
                                <a className="text-break w-100" href="https://github.com/victornietol/Proyectos/tree/main/Proyecto_Modelado_Simulacion" target="_blank" rel="noopener noreferrer">
                                    https://github.com/victornietol/Proyectos/tree/main/Proyecto_Modelado_Simulacion
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            
            <section className="card card-body mt-2">
                <div className="px-md-5 text-center">
                    <h3 className="pb-3 pt-3" style={{textAlign: "start"}}>Descripción del sistema</h3>
                    <p style={{textAlign: "justify"}}>
                        Como proyecto académico de la materia Modelado y Simulación se propuso realizar un sistema que simulara algún tipo de evento, por lo cual, se tomó la decisión de construir un sencillo sistema en Python con el que se pudieran obtener las probabilidades de que al enfrentarse dos equipos de futbol se obtuvieran como resultado los porcentajes de victoria o empate del encuentro.
                        <br></br><br></br>
                        Estas probabilidades se obtienen utilizando la distribución de Poisson y modelos simplificados basados en estadísticas pasadas con datos introducidos por el usuario, los cuales, corresponden a goles anotados, goles recibidos, partidos jugados, tiros a puerta, porterías imbatidas, cantidad de goles recientes por encuentro de sus últimos encuentros, y un factor de local. Los resultados se muestran mediante gráficas para facilitar su visualización y análisis con ayuda de Matplotlib.
                        <br></br><br></br>
                        Para cada partido, se realizan 1000 simulaciones con el objetivo de obtener un promedio de los resultados. Para cada simulación, primero se calcula el factor de ataque y defensa de ambos equipos, después se ajustan estos resultados con base en goles recientes. Posteriormente, se calculan los goles esperados para poder generar el valor de goles simulados aplicando Poisson con el objetivo de obtener la probabilidad de cuantos goles podrían ocurrir durante el partido, ya que la distribución de Poisson ayuda a buscar la probabilidad de que un número de eventos sucedan en un intervalo. Teniendo los datos anteriores de las 1000 simulaciones, finalmente se obtiene el promedio de goles anotados por cada equipo y la probabilidad de que gane el equipo 1, gane el equipo 2 o que empaten.
                    </p>
                </div>
            </section>

            <section className="card card-body mt-3">
                <div className="px-md-5 text-center">
                    <h3 className="pb-4 pt-4" style={{textAlign: "start"}}>Funcionamiento del sistema</h3>
                    <section className="card card-body mb-2">
                    <p style={{textAlign: "justify"}}>
                            Al ejecutar el programa, se abre la siguiente ventana con datos predeterminados (estos datos se pueden borran con el botón "Limpiar campos"). Para realizar una simulación se deben llenar los campos y presionar el botón "Iniciar".
                    </p>
                    <img src="/src/assets/proyectos/prob_partidos/1.png" title="Interfaz del sistema" className="img-fluid mx-auto d-block border border-dark rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/prob_partidos/1.png")} alt="Img sistema" loading="lazy"></img>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <p style={{textAlign: "justify"}}>
                            En caso de que el usuario introduzca un valor erróneo o haya un campo vacío, entonces se muestra un mensaje de error como en la siguiente captura. 
                        </p>
                        <img src="/src/assets/proyectos/prob_partidos/2.png" title="Error en un campo" className="img-fluid mx-auto d-block border border-dark rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/prob_partidos/2.png")} alt="Img error sistema" loading="lazy"></img>
                    </section>
                    <section className="card card-body mt-2 mb-2 pb-2">
                        <p style={{textAlign: "justify"}}>
                            Una vez presionado el botón "Iniciar", se muestran los resultados de la simulación en la parte derecha de la ventana, donde se puede cambiar la visualización entre tres gráficas distintas.
                        </p>
                        <img src="/src/assets/proyectos/prob_partidos/3.png" title="Resultados 1" className="img-fluid mx-auto d-block border border-dark rounded mb-2" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/prob_partidos/3.png")} alt="Img resultados sistema" loading="lazy"></img>
                        <img src="/src/assets/proyectos/prob_partidos/4.png" title="Resultados 2" className="img-fluid mx-auto d-block border border-dark rounded mt-2 mb-2" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/prob_partidos/4.png")} alt="Img resultados sistema" loading="lazy"></img>
                        <img src="/src/assets/proyectos/prob_partidos/5.png" title="Resultados 3" className="img-fluid mx-auto d-block border border-dark rounded mt-2 mb-2" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/prob_partidos/5.png")} alt="Img resultados sistema" loading="lazy"></img>
                    </section>
                </div>
            </section>

            <section className="card card-body mt-3">
                <div className="px-md-5 text-center">
                    <h3 className="pb-4 pt-4" style={{textAlign: "start"}}>Descripción de la interfaz</h3>
                    <img src="/src/assets/proyectos/prob_partidos/6.png" title="Descripcion interfaz" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/prob_partidos/6.png")} alt="Img interfaz sistema" loading="lazy"></img>
                </div>
                <div className="mt-2 mb-3"></div>
                <div className="px-md-5">
                    <section className="card card-body mt-2 mb-2">
                        <strong>1. Campos de entrada</strong>
                        <p style={{textAlign: "justify"}}>
                            En esta sección se introducen las estadísticas de cada equipo para poder realizar la simulación.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>2. Botón "Iniciar"</strong>
                        <p style={{textAlign: "justify"}}>
                            Ejecuta la simulación con los datos introducidos. En caso de que un campo contenga un valor incorrecto entonces se muestra un mensaje de error.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>3. Botón "Limpiar campos"</strong>
                        <p style={{textAlign: "justify"}}>
                            Elimina los valores de los campos de las estadísticas de cada equipo, así como, los resultados y las imagenes de las gráficas.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>4. Resultados</strong>
                        <p style={{textAlign: "justify"}}>
                            En esta sección se muestran los valores de las probabilidades de victoria o empate, y el promedio de goles del encuentro.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>5. Gráficas</strong>
                        <p style={{textAlign: "justify"}}>
                            Muestra las gráficas con los datos generados en la simulación.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>6. Indicador de posición</strong>
                        <p style={{textAlign: "justify"}}>
                            Este indicador muestra cuál de las tres gráficas se mmuestra en pantalla. Si se cambia de gráfica, entonces el indicador cambia de posición. 
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>7. Botón de desplazamiento</strong>
                        <p style={{textAlign: "justify"}}>
                            Los botones con flechas sirven para cambiar entre una gráfica y otra.
                        </p>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Prob_partidos;