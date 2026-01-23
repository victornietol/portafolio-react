import { NavLink } from "react-router-dom";

function Section_Chatbot({ handleImageClick }) {
    return (
        <>
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
        </>
    );
}

export default Section_Chatbot;