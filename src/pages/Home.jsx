import { Helmet } from 'react-helmet-async';
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
            <Helmet>
                <title>Inicio | Portafolio</title>
            </Helmet>
            <section className="card card-body mt-5">
                <div>
                    <h1 className="display-3 text-center">Victor Manuel Nieto Licona</h1>
                    <h3 className="text-center text-secondary" style={{ letterSpacing: "1.5px" }}>Egresado de Ingeniería en Computación</h3>
                </div>
                <hr></hr>
                <div className="px-md-5 text-center">
                    <p style={{textAlign: "justify"}}>"Soy recién egresado de Ingeniería en Computación, con enfoque en Desarrollo de Software en busca de aplicar y ampliar mis habilidades y conocimientos en un entorno profesional con el objetivo de contribuir a la creación, implementación y mantenimiento de sistemas y aplicaciones que aporten valor. He aprendido a adaptarme a las tecnologías y herramientas según las necesidades del proyecto, lo cual, me ha permitido desarrollar proyectos como aplicaciones móviles, chatbot básico basado en grafos, programas sencillos con interfaz, sitios web, bases de datos relacionales, implementación de servidores locales, desarrollo de videojuegos, entre otros."</p>
                    <NavLink className="btn btn-dark btn-hover-efecto mb-3 mt-1" style={{background: "#020059"}} to="/proyectos">
                        <i className="bi bi-eye-fill"></i> Ver proyectos
                    </NavLink>
                </div>
            </section>

            <section className="card card-body mt-3">
                <h2 className="text-center">Educación</h2>
                <div className="text-center pt-2">
                    <h4>Licenciatura en Ingeniería en Computación</h4>
                    <p>
                        Facultad de Estudios Superiores Aragón • UNAM <br></br>
                        *Titulación en proceso por alto rendimiento académico (promedio 9.72)
                    </p>
                    <p></p>
                </div>
                <div className="text-center pt-3 pb-3">
                    <img src="/logos/unam-logo.png" title="UNAM" className="img-fluid img-hover-efecto mx-3" style={{width: "80px"}} alt="Logo UNAM" loading="lazy"></img>
                    <img src="/logos/fes-aragon-logo.png" title="FES Aragón" className="img-fluid img-hover-efecto mx-3" style={{width: "80px"}} alt="Logo FES Aragon" loading="lazy"></img>
                </div>
            </section>

            <section className="card card-body mt-3">
                <h2 className="text-center pb-3">Tecnologías y Habilidades</h2>
                <div className="container">
                    <div className="row">
                        <section className="col-md-6 col-lg-4 card card-body m-2 d-flex flex-column align-items-center justify-content-center bg-light">
                            <div className="pt-2 pb-3">
                                <p className="texto-categoria-tec text-center">Lenguajes de programación principales</p>
                                <div className="text-center pt-3 pb-3 pt-1">
                                    <img src="/logos/python-logo.png" title="Python" className="img-fluid img-hover-efecto mx-3" style={{width: "80px"}} alt="Logo Python" loading="lazy"></img>
                                    <img src="/logos/java-logo.png" title="Java" className="img-fluid img-hover-efecto mx-3" style={{width: "80px"}} alt="Logo Java" loading="lazy"></img>
                                </div>
                            </div>
                        </section>
                        <section className="col-md-6 col-lg-4 card card-body m-2 d-flex flex-column align-items-center justify-content-center bg-light">
                            <div className="pt-2">
                                <p className="texto-categoria-tec text-center">Creación y administracón de bases de datos relacionales</p>
                                <div className="text-center pt-3 pb-3">
                                    <img src="/logos/sql-logo.png" title="SQL" className="img-fluid img-hover-efecto mx-3" style={{width: "80px"}} alt="Logo SQL" loading="lazy"></img>
                                    <img src="/logos/mysql-logo.png" title="MySQL" className="img-fluid img-hover-efecto mx-3" style={{width: "80px"}} alt="Logo mysql" loading="lazy"></img>
                                </div>
                            </div>
                        </section>
                        <section className="col-md-6 col-lg-4 card card-body m-2 d-flex flex-column align-items-center justify-content-center bg-light">
                            <div className="pt-2">
                                <p className="texto-categoria-tec text-center">Desarrollo móvil</p>
                                <div className="text-center pt-3 pb-3" style={{marginTop: "-20px"}}>
                                    <img src="/logos/flutter-logo.png" title="Flutter" className="img-fluid img-hover-efecto mx-3" style={{width: "100px"}} alt="Logo Flutter" loading="lazy"></img>
                                    <img src="/logos/dart-logo.png" title="Dart" className="img-fluid img-hover-efecto mx-3" style={{width: "100px"}} alt="Logo Dart" loading="lazy"></img>
                                </div>
                            </div>
                        </section>
                        <section className="col-md-6 col-lg-4 card card-body m-2 d-flex flex-column align-items-center justify-content-center bg-light">
                            <div className="pt-2">
                                <p className="texto-categoria-tec text-center">Conocimientos básicos en otras tecnologías</p>
                                <div className="text-center pt-3">
                                    <img src="/logos/django-logo.png" title="Django" className="img-fluid img-hover-efecto mx-3 mb-3" style={{width: "80px"}} alt="Logo Django" loading="lazy"></img>
                                    <img src="/logos/django-rest-framework-logo.png" title="Django REST Framework" className="img-fluid img-hover-efecto mx-3 mb-3" style={{width: "80px"}} alt="Logo Django REST Framework" loading="lazy"></img>
                                    <img src="/logos/spring-boot-logo.png" title="Spring Boot" className="img-fluid img-hover-efecto mx-3 mb-3" style={{width: "80px"}} alt="Logo Spring Boot" loading="lazy"></img>
                                    <img src="/logos/javascript-logo.png" title="JavaScript" className="img-fluid img-hover-efecto mx-3 mb-3 rounded" style={{width: "80px"}} alt="Logo JavaScript" loading="lazy"></img>
                                    <img src="/logos/php-logo.png" title="PHP" className="img-fluid img-hover-efecto mx-3 mb-3" style={{width: "80px"}} alt="Logo PHP" loading="lazy"></img>
                                    <img src="/logos/c_sharp-logo.png" title="C#" className="img-fluid img-hover-efecto mx-3 mb-3" style={{width: "80px"}} alt="Logo C#" loading="lazy"></img>
                                    <img src="/logos/html5-logo.png" title="HTML5" className="img-fluid img-hover-efecto mx-3 mb-3" style={{width: "80px"}} alt="Logo HTML5" loading="lazy"></img>
                                    <img src="/logos/css-logo.png" title="CSS" className="img-fluid img-hover-efecto mx-3 mb-3" style={{width: "80px"}} alt="Logo CSS" loading="lazy"></img>
                                </div>
                            </div>
                        </section>
                        <section className="col-md-6 col-lg-4 card card-body m-2 d-flex flex-column align-items-center justify-content-center bg-light">
                            <div className="pt-2">
                                <p className="texto-categoria-tec text-center">Control de versiones</p>
                                <div className="text-center pt-3 pb-3">
                                    <img src="/logos/git-logo.png" title="Git" className="img-fluid img-hover-efecto mx-3" style={{width: "80px"}} alt="Logo Git" loading="lazy"></img>
                                    <img src="/logos/github-logo.png" title="GitHub" className="img-fluid img-hover-efecto mx-3" style={{width: "80px"}} alt="Logo GitHub" loading="lazy"></img>
                                </div>
                            </div>
                        </section>
                        <section className="col-md-6 col-lg-4 card card-body m-2 d-flex flex-column align-items-center justify-content-center bg-light">
                            <div className="pt-2">
                                <p className="texto-categoria-tec text-center">Desarrollo de videojuegos</p>
                                <div className="text-center" style={{marginTop: "-25px", marginBottom: "-15"}}>
                                    <img src="/logos/unity-logo.png" title="Unity" className="img-fluid img-hover-efecto" style={{width: "150px"}} alt="Logo Unity" loading="lazy"></img>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;