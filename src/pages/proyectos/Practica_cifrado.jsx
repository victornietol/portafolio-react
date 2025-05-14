import { Helmet } from 'react-helmet-async';
import { useOutletContext } from "react-router-dom";

function Practica_cifrado() {
    const { setModalSrc, openModal } = useOutletContext();

    const handleImageClick = (url) => {
        setModalSrc(url);
        openModal();
    };

    return (
        <>
            <Helmet>
                <title>Práctica cifrado y descifrado | Portafolio</title>
            </Helmet>

            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">
                    <span>
                        <span className="letra-hover-efecto">P</span><span className="letra-hover-efecto">r</span><span className="letra-hover-efecto">á</span><span className="letra-hover-efecto">c</span><span className="letra-hover-efecto">t</span><span className="letra-hover-efecto">i</span><span className="letra-hover-efecto">c</span><span className="letra-hover-efecto">a</span>{" "}
                    </span>
                    <span>
                        <span className="letra-hover-efecto">d</span><span className="letra-hover-efecto">e</span>{" "}
                    </span>
                    <span className="palabra">
                        <span className="letra-hover-efecto">c</span><span className="letra-hover-efecto">i</span><span className="letra-hover-efecto">f</span><span className="letra-hover-efecto">r</span><span className="letra-hover-efecto">a</span><span className="letra-hover-efecto">d</span><span className="letra-hover-efecto">o</span>{" "}
                    </span>
                    <span>
                        <span className="letra-hover-efecto">y</span>{" "}
                    </span>
                    <span className="palabra">
                        <span className="letra-hover-efecto">d</span><span className="letra-hover-efecto">e</span><span className="letra-hover-efecto">s</span><span className="letra-hover-efecto">c</span><span className="letra-hover-efecto">i</span><span className="letra-hover-efecto">f</span><span className="letra-hover-efecto">r</span><span className="letra-hover-efecto">a</span><span className="letra-hover-efecto">d</span><span className="letra-hover-efecto">o</span>
                    </span>
                    
                </h1>
            </div>

            <div className="container">
                <div className="row">
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light efecto-card-glow">
                        <div className="px-md-5 text-center">
                            <h3>Tecnologías empleadas</h3>
                            <p>
                                <i className="bi bi-code-slash"></i> PHP • JavaScript
                                <br></br>
                                <i className="bi bi-database-fill"></i> SQL
                                <br></br>
                                <i className="bi bi-gear-fill"></i> HTML • CSS • bcrypt
                                <br></br>
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
                                <a className="text-break w-100" href="https://github.com/victornietol/CodigosPracticas/tree/main/PHP/Login_Creacion_Usuarios" target="_blank" rel="noopener noreferrer">https://github.com/victornietol/CodigosPracticas/tree/main/PHP/Login_Creacion_Usuarios</a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            
            <section className="card card-body mt-2 card-borde">
                <div className="px-md-5">
                    <h3 className="pb-3 pt-3 texto-subt-efecto" style={{textAlign: "start"}}>Descripción</h3>
                    <p>
                        El objetivo de este proyecto académico fue poner en práctica conceptos básicos de seguridad, mediante la creación de un sitio web donde se le pide a los usuarios crear una cuenta, o en su defecto, iniciar sesión para poder ingresar a la página principal. Además, se utilizó el hosting de InfinityFree para alojar este proyecto, el cual, también cuenta con una base de datos SQL para almacenar a los usuarios registrados y sus credenciales cifradas con ayuda de bcrypt. Por lo tanto, cada vez que se crea un usuario, primero se verifica que no exista, posteriormente, se obtiene un hash con bcryt y ese valor es el que se almacena en la base.
                    </p>
                    <p>
                        Una vez estando en la página principal, el usuario puede aplicar un cifrado o descifrado básico al texto que introduzca según sea el caso. El contenido a cifrar y descifrar acepta tanto texto como carácteres especiales y emojis. Como introducción a la criptografía simétrica, dicho cifrado es muy sencillo, ya que, se puso en práctica un cifrado César. Por lo tanto, para cifrar el mensaje se introduce una llave, la cual, debe ser de hasta máximo 12 carácteres, y permite utilizar letras de la <code>a</code> a la <code>z</code>, números del <code>0</code> al <code>9</code>, así como los carácteres <code>-</code>,<code>_</code>, <code>@</code>, <code>*</code>. 
                    </p>
                    <div style={{textAlign: "justify"}}>
                        <p>La cadena que introduce el usuario que funciona como llave se procesa de la siguiente manera para hacer la operación un poco más interesante:</p>
                        <ol style={{textAlign: "justify"}}>
                            <li>De cada carácter se obtiene su valor ascii.</li>
                            <li>El valor ascii se convierte a binario formando un byte (8 bits).</li>
                            <li>Se suma el valor decimal correspondiente al byte obtenido anteriormente y se va acumulando en una variable.</li>
                            <li>Una vez obteniendo los bytes correspondientes a cada carácter, entonces se concatenan para formar un bloque más grande, el cual, puede ir de 8 bits hasta un máximo de 96 bits.</li>
                            <li>El bloque grande generado anteriormente se divide ahora en bloques de 4 bits (nibble).</li>
                            <li>Se intercalan los bloques generados en el paso anterior por pares.</li>
                            <li>Se vuelven a juntar los nibbles en un solo bloque nuevamente.</li>
                            <li>Se invierten todos los bits del bloque grande.</li>
                            <li>Ahora se separa el bloque grande en bytes (bloques de 8 bits).</li>
                            <li>De cada byte generado, se obtiene su valor decimal y se acumula en la sumatoria del paso 3. Posteriormente, ese valor total de la sumatoria se utiliza como llave para aplicar el corrimiento de cada carácter correspondiente al cifrado César.  </li>
                        </ol>
                    </div>
                    <p>
                        Mientras que, respecto a la aplicación del cifrado César, se aplica de la siguiente manera: Se obtiene el valor ascii de cada carácter del texto introducido por el usuario como mensaje, después, a ese valor se le suma el valor generado correspondiente a la llave y se le aplica una operación modular para mantener el valor del corrimiento dentro del rango de carácteres ascii posibles, por lo tanto, la operación es la siguiente: <code>(valor_ascci + llave) % máximo_posible_ascii</code>. En consecuencia, para descifrar, se utliza la misma llave con la que se cifro y el proceso es el mismo pero ahora se resta la llave.
                    </p>
                    <div className="text-center">
                        <a className="btn btn-dark btn-hover-efecto mb-3 mt-4" style={{background: "#020059"}} href="https://practica-cifrado.infinityfreeapp.com/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-box-arrow-up-right me-1"></i> Visitar sitio
                        </a>
                    </div>
                </div>
            </section>

            <section id="algotimo_genetico" className="card card-body mt-2 card-borde">
                <div className="px-md-5">
                    <h3 className="pb-3 pt-3 texto-subt-efecto" style={{textAlign: "start"}}>Imágenes</h3>
                    <div>
                        <h4 className="texto-subt-efecto">Inicio de sesión</h4>
                        <img src="/proyectos/practica_cifrado/4.png" title="Pantalla de inicio de sesión" className="img-fluid mx-auto d-block rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/practica_cifrado/4.png")} alt="Img sistema 4" loading="lazy"></img>
                    </div>
                    <div className="mt-4">
                        <h4 className="texto-subt-efecto">Registro de usuario</h4>
                        <img src="/proyectos/practica_cifrado/3.png" title="Pantalla de registro" className="img-fluid mx-auto d-block rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/practica_cifrado/3.png")} alt="Img sistema 3" loading="lazy"></img>
                    </div>
                    <div className="mt-4">
                        <h4 className="texto-subt-efecto">Cifrado de texto</h4>
                        <img src="/proyectos/practica_cifrado/1.png" title="Cifrado de texto" className="img-fluid mx-auto d-block rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/practica_cifrado/1.png")} alt="Img sistema 1" loading="lazy"></img>
                    </div>
                    <div className="mt-4 mb-3">
                        <h4 className="texto-subt-efecto">Texto cifrado</h4>
                        <img src="/proyectos/practica_cifrado/2.png" title="Descifrado de texto" className="img-fluid mx-auto d-block rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/practica_cifrado/2.png")} alt="Img sistema 2" loading="lazy"></img>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Practica_cifrado;