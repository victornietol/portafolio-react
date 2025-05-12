import { Helmet } from 'react-helmet-async';

function Contacto() {
    return (
        <>
            <Helmet>
                <title>Contacto | Portafolio</title>
            </Helmet>

            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">Contacto</h1>
            </div>

            <section className="card card-body mt-5 pt-4 bg-light">
                <div className="px-md-5 text-center">
                    <img src="/src/assets/logos/logo-personal-sinFondo-2.png" className="pb-3" style={{maxWidth: "80px"}} alt="Logo"></img>
                    <p>
                        <strong>Victor Manuel Nieto Licona</strong>
                        <br></br>
                        <i className="bi bi-envelope-at-fill"></i> Correo: victornieto.nl@gmail.com
                        <br></br>
                        <i className="bi bi-github"></i> GitHub: <a target="_blank" href="https://github.com/victornietol">victornietol</a>
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                
                            </div>
                            <div className="col-md-6 col-lg-6">
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
}

export default Contacto;