import { Helmet } from 'react-helmet-async';

function Contacto() {
    return (
        <>
            <Helmet>
                <title>Contacto | Portafolio</title>
            </Helmet>

            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">
                    <span className="letra-hover-efecto">C</span><span className="letra-hover-efecto">o</span><span className="letra-hover-efecto">n</span><span className="letra-hover-efecto">t</span><span className="letra-hover-efecto">a</span><span className="letra-hover-efecto">c</span><span className="letra-hover-efecto">t</span><span className="letra-hover-efecto">o</span>
                </h1>
            </div>

            <section className="col-lg-6 card card-body mt-5 pt-4 mx-auto bg-light efecto-card-glow">
                <div className="px-md-5 text-center">
                    <img src="/logos/logo-personal-sinFondo-2.png" className="img-hover-efecto pb-3" style={{maxWidth: "80px"}} alt="Logo"></img>
                    <p>
                        <strong>Victor Manuel Nieto Licona</strong>
                        <br></br>
                        <i className="bi bi-envelope-at-fill"></i> Correo: victornieto.nl@gmail.com
                        <br></br>
                        <i className="bi bi-github"></i> GitHub: <a target="_blank" href="https://github.com/victornietol">victornietol</a>
                    </p>
                    
                </div>
            </section>
        </>
    );
}

export default Contacto;