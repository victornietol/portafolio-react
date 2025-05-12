import { Helmet } from 'react-helmet-async';
import { useOutletContext } from "react-router-dom";

function Chatbot() {
    const { setModalSrc, openModal } = useOutletContext();

    const handleImageClick = (url) => {
        setModalSrc(url);
        openModal();
    };

    return (
        <>
            <Helmet>
                <title>Chatbot | Portafolio</title>
            </Helmet>
            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">Chatbot</h1>
            </div>

            <div className="container">
                <div className="row">
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light">
                        <div className="px-md-5 text-center">
                            <h3>Tecnologías empleadas</h3>
                            <p>
                                <i className="bi bi-code-slash"></i> Python
                                <br></br>
                                <i className="bi bi-gear-fill"></i> Tkinter • OpenWeatherMap
                            </p>
                        </div>
                    </section>
                    
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light">
                        <div className="px-md-5 text-center">
                            <h3>Repositorio</h3>
                            <p>
                                <i className="bi bi-github"></i>
                                <br></br>
                                <a className="text-break w-100" href="https://github.com/victornietol/Proyectos/blob/main/Proyecto_Mate_Disc/Actualizacion_30_05_2022/ProyectoMates_Disc/chatbot_pruebas2.py" target="_blank" rel="noopener noreferrer">
                                    https://github.com/victornietol/Proyectos/blob/main/Proyecto_Mate_Disc/Actualizacion_30_05_2022/ProyectoMates_Disc/chatbot_pruebas2.py
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
                        Como proyecto académico de matematicas discretas, correspondiente al tema de grafos, se construyó en Python un chatbot sencillo basado en esta estructura e implementado con diccionarios. Su funcionamiento es muy básico, si el sistema detecta en la entrada alguna palabra clave (tema dentro de su base de conocimiento), entonces muestra recomendaciones de contenido multimedia en plataformas como Netflix, HBO Max, Disney+, Youtube y Spotify. Estas recomendaciones serán películas, series, documentales, canciones o canales dependiendo de la plataforma que se le indique al chatbot.
                        <br></br><br></br>
                        Además, se utilizó el paquete tkinter para crear una sencilla interfaz gráfica que ayuda a que el usuario tenga una experiencia muy parecida a la de las aplicaciones de mensajería convencionales. Por otro lado, el código del programa tiene muchos aspectos de mejora debido a que este fue mi primer proyecto de este estilo con Python. 
                        <br></br><br></br>
                        Como se mencionó anteriormente, el chatbot muestra recomendaciones de contenidos multimedia en diversas plataformas según le indique el usuario, pero para no dejar tan limitado el funcionamiento del agente, también es capaz de responder a otro tipo de mensajes como saludos, despedidas y agradecimientos; a si como a preguntas sobre el clima actual (se utilizó la API de <a href="https://openweathermap.org/">OpenWeatherMap</a>), la hora actual, que día es, información breve sobre alguna de las plataformas de las que se proveen recomendaciones, una breve sinopsis de cualquiera de las películas, series o documentales que se ofrecen como recomendación, y por último, se le puede preguntar por algún dato curioso y este elegirá uno al azar de entre 50 diferentes.
                        <br></br><br></br>
                        En cuanto a la cantidad de sugerencias que se pueden mostrar, Netflix y HBO Max cuentan con cinco categorías de películas que son acción, comedia, terror, deporte y animación, y cada una de ellas tiene cinco recomendaciones; por el lado de las series y documentales también se tienen cinco recomendaciones. Mientras que en Disney+ se dividen en películas y series solamente, en donde las películas cuentan con cuatro categorías como Pixar, Marvel, Star Wars y Disney, con cinco recomendaciones cada una; en el tema de las series también se tienen cinco recomendaciones. Hablando de Spotify, las recomendaciones primero se dividen en canciones y podcasts, por su parte, las canciones se encuentran divididas en trece categorías como top 10 global, top 10 México, entretenimiento, pop, urbano, romance, cumbia, salsa, rock, hip hop, electrónica, jazz y clásica, con 10 recomendaciones cada una; igualmente, los podcasts cuentan con 10 recomendaciones. Por último, en Youtube se muestran recomendaciones de canales que se dividen en categorías como mascotas, videojuegos, cocina, niños, tecnología y autos, con una cantidad de entre 6 y 8 recomendaciones dependiendo de la categoría.
                        <br></br><br></br>
                        Por lo tanto, la lógica de funcionamiento más simple de este sistema se basa en un grafo y en el recorrido de los vértices de este, donde todas estas opciones de consulta que se ofrecen se encuentran en diferentes vértices del grafo, y cada entrada que haga el usuario pasará por un filtro para identificar alguna de las palabras clave que tienen como objetivo dirigir el recorrido del grafo hacía alguno de los otros vértices con los que tiene relación el vértice de partida. Una vez que se llega al vértice deseado se muestra la información correspondiente de uno o varios de los elementos pertenecientes al conjunto en cuestión. Como resultado de esto, el grafo en el que se sustenta el funcionamiento del chatbot es el siguiente.
                    </p>
                    <img src="/src/assets/proyectos/chatbot/grafo.jpg" title="Grafo del sistema" className="img-fluid mx-auto d-block mb-4" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/grafo.jpg")} alt="Img grafo" loading="lazy"></img>
                </div>
            </section>

            <section className="card card-body mt-3">
                <div className="px-md-5 text-center">
                    <h3 className="pb-4 pt-4" style={{textAlign: "start"}}>Funcionamiento del sistema</h3>
                    <section className="card card-body">
                        <img src="/src/assets/proyectos/chatbot/1.png" title="Descripcion chatbot 1" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/1.png")}  alt="Img chatbot 1" loading="lazy"></img>
                    </section>  
                    <div className="pt2 pb-2"></div>
                    <section className="card card-body">
                        <img src="/src/assets/proyectos/chatbot/2.png" title="Descripcion chatbot 2" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/2.png")}  alt="Img chatbot 2" loading="lazy"></img>
                    </section>
                    <div className="pt2 pb-2"></div>
                    <section className="card card-body">
                        <img src="/src/assets/proyectos/chatbot/3.png" title="Descripcion chatbot 3" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/3.png")}  alt="Img chatbot 3" loading="lazy"></img>
                    </section>
                    <div className="pt2 pb-2"></div>
                    <section className="card card-body">
                        <img src="/src/assets/proyectos/chatbot/4.png" title="Descripcion chatbot 4" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/4.png")}  alt="Img chatbot 4" loading="lazy"></img>
                    </section>
                    <div className="pt2 pb-2"></div>
                    <section className="card card-body">
                        <img src="/src/assets/proyectos/chatbot/5.png" title="Descripcion chatbot 5" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/5.png")}  alt="Img chatbot 5" loading="lazy"></img>
                    </section>
                    <div className="pt2 pb-2"></div>
                    <section className="card card-body">
                        <img src="/src/assets/proyectos/chatbot/6.png" title="Descripcion chatbot 6" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/6.png")} alt="Img chatbot 6" loading="lazy"></img>
                    </section>
                    <div className="pt2 pb-2"></div>
                    <section className="card card-body">
                        <img src="/src/assets/proyectos/chatbot/7.png" title="Descripcion chatbot 7" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/7.png")} alt="Img chatbot 7" loading="lazy"></img>
                    </section>
                    <div className="pt2 pb-2"></div>
                    <section className="card card-body">
                        <img src="/src/assets/proyectos/chatbot/8.png" title="Descripcion chatbot 8" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/8.png")} alt="Img chatbot 8" loading="lazy"></img>
                    </section>
                    <div className="pt2 pb-2"></div>
                    <section className="card card-body">
                        <img src="/src/assets/proyectos/chatbot/9.png" title="Descripcion chatbot 9" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/9.png")} alt="Img chatbot 9" loading="lazy"></img>
                    </section>
                    <div className="pt2 pb-2"></div>
                    <section className="card card-body">
                        <img src="/src/assets/proyectos/chatbot/10.png" title="Descripcion chatbot 10" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/10.png")} alt="Img chatbot 10" loading="lazy"></img>
                    </section>
                    <div className="pt2 pb-2"></div>
                    <section className="card card-body">
                        <img src="/src/assets/proyectos/chatbot/11.png" title="Descripcion chatbot 11" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/11.png")} alt="Img chatbot 11" loading="lazy"></img>
                    </section>
                    <div className="pt2 pb-2"></div>
                    <section className="card card-body mb-3">
                        <img src="/src/assets/proyectos/chatbot/12.png" title="Descripcion chatbot 12" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/12.png")} alt="Img chatbot 12" loading="lazy"></img>
                    </section>
                </div>
            </section>

            <section className="card card-body mt-3">
                <div className="px-md-5 text-center">
                    <h3 className="pb-4 pt-4" style={{textAlign: "start"}}>Descripción de la interfaz</h3>
                    <img src="/src/assets/proyectos/chatbot/13.png" title="Descripcion chatbot 13" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/13.png")} alt="Img chatbot 13" loading="lazy"></img>
                </div>
                <div className="mt-3 mb-3"></div>
                <div className="px-md-5">
                    <section className="card card-body">
                        <strong>1. Botón para abrir perfil</strong>
                        <p style={{textAlign: "justify"}}>
                            Botón con una imagen que representa la foto de perfil del chatbot. Sufunción es abrir la siguiente ventana que simula el perfil delchatbot como en otras aplicaciones de mensajería. 
                        </p>
                        <div className="text-center">
                            <img src="/src/assets/proyectos/chatbot/14.png" title="Perfil chatbot" className="img-fluid" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/14.png")} alt="Img chatbot perfil" loading="lazy"></img>
                        </div>
                        <div>
                            <strong>1.1. Botón Python</strong>
                            <p style={{textAlign: "justify"}}>
                                Indica el lenguaje de programación utilizado para la creación este chatbot y abre un enlace en el navegador predeterminado que dirige al usuario a una página de <a href="https://www.python.org/ ">Python</a>.
                            </p>
                        </div>
                        <div>
                            <strong>1.2. Botón de código 2</strong>
                            <p style={{textAlign: "justify"}}>
                                Abre un enlace en el navegador predeterminado y dirige al usuario a una página que contiene el <a href="https://github.com/victornietol/Proyectos/blob/main/Proyecto_Mate_Disc/Actualizacion_30_05_2022/ProyectoMates_Disc/chatbot_pruebas2.py">código del programa</a>.
                            </p>
                        </div>
                        <div>
                            <strong>1.3. Botón UNAM</strong>
                            <p style={{textAlign: "justify"}}>
                                Abre un enlace en el navegador predeterminado y dirige al usuario a una página de la <a href="https://www.unam.mx/">Universidad Nacional Autónoma de México</a>.
                            </p>
                        </div>
                        <div>
                            <strong>1.4. Botón FES Aragoón</strong>
                            <p style={{textAlign: "justify"}}>
                                Abre un enlace en el navegador predeterminado y dirige al usuario a la página de la <a href="https://www.aragon.unam.mx/fes-aragon/#!/inicio">Facultad de Estudios Superiores Aragón</a>.
                            </p>
                        </div>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>2. Mensaje del chatbot</strong>
                        <p style={{textAlign: "justify"}}>
                            Mensaje inicial del chatbot con el que se incita al usuario a iniciar la conversación. Siempre es el mismo mensaje.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>3. Entrada de texto</strong>
                        <p style={{textAlign: "justify"}}>
                            En esta casilla se introduce la consulta que se le quiere hacer al chatbot, la cadena que se introduzca puede llevar mayúsculas, minúsculas, acentos, diéresis, etcétera, y no está restringida a solo contener la palabra clave. Sin embargo, si es indispensable que la cadena contenga alguna palabra clave para que el chatbot pueda responder correctamente, de lo contrario no entenderá el mensaje. Además, una vez escrito el mensaje se puede presionar la tecla enter en el teclado y hará la misma función que el botón de enviar.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>4. Botón de enviar</strong>
                        <p style={{textAlign: "justify"}}>
                            Envía la cadena introducida por el usuario en la casilla de entrada de texto para ser procesada por el chatbot y regresar un mensaje de respuesta. Si se envía un mensaje en blanco el chatbot responderá que no entiende la consulta.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>5. Caja de texto</strong>
                        <p style={{textAlign: "justify"}}>
                            En esta caja de texto se mostrará el historial de conversación entre el usuario y el chatbot. Cuenta con una barra de desplazamiento para moverse a lo largo de la conversación. 
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>6. Botón de código 1.</strong>
                        <p style={{textAlign: "justify"}}>
                            Tiene la misma función que el botón de código 2 mencionado anteriormente y abre el mismo enlace donde se encuentra el código del programa.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>7. Botón de ayuda.</strong>
                        <p style={{textAlign: "justify"}}>
                            Abre una ventana que contiene información sobre las recomendaciones que ofrece el chatbot y las consultas relacionadas con la hora, día, clima, sinopsis y datos curiosos.
                        </p>
                        <div className="text-center">
                            <img src="/src/assets/proyectos/chatbot/15.png" title="Ayuda chatbot" className="img-fluid mb-3" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/15.png")} alt="Img chatbot ayuda" loading="lazy"></img>
                        </div>
                    </section>
                    <section className="card card-body mt-2 mb-2 mb-3">
                        <strong>8. Botón de información.</strong>
                        <p style={{textAlign: "justify"}}>
                            Abre una pequeña pestaña con información relacionada con el nombre del alumno, plantel, nombre del profesor, materia, etcétera.
                        </p>
                        <div className="text-center">
                            <img src="/src/assets/proyectos/chatbot/16.png" title="Información chatbot" className="img-fluid mb-3" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "pointer"}} onClick={() => handleImageClick("/src/assets/proyectos/chatbot/16.png")} alt="Img chatbot info" loading="lazy"></img>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Chatbot;