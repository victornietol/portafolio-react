import { Helmet } from 'react-helmet-async';
import { useOutletContext } from "react-router-dom";

function Gestion_biblioteca() {
    const { setModalSrc, openModal } = useOutletContext();

    const handleImageClick = (url) => {
        setModalSrc(url);
        openModal();
    };

    return (
        <>
            <Helmet>
                <title>Gestión de biblioteca | Portafolio</title>
            </Helmet>
            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">
                    <span className="palabra">
                        <span className="letra-hover-efecto">G</span><span className="letra-hover-efecto">e</span><span className="letra-hover-efecto">s</span><span className="letra-hover-efecto">t</span>
                        <span className="letra-hover-efecto">i</span><span className="letra-hover-efecto">ó</span><span className="letra-hover-efecto">n</span>{" "}
                    </span>
                    <span>
                        <span className="letra-hover-efecto">d</span><span className="letra-hover-efecto">e</span>{" "}
                    </span>
                    <span className="palabra">
                        <span className="letra-hover-efecto">b</span><span className="letra-hover-efecto">i</span><span className="letra-hover-efecto">b</span><span className="letra-hover-efecto">l</span><span className="letra-hover-efecto">i</span><span className="letra-hover-efecto">o</span><span className="letra-hover-efecto">t</span><span className="letra-hover-efecto">e</span><span className="letra-hover-efecto">c</span><span className="letra-hover-efecto">a</span>
                    </span>
                </h1>
            </div>

            <div className="container">
                <div className="row">
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light efecto-card-glow">
                        <div className="px-md-5 text-center">
                            <h3>Tecnologías empleadas</h3>
                            <p>
                                <i className="bi bi-code-slash"></i> Java
                                <br></br>
                                <i className="bi bi-gear-fill"></i> JavaFX
                                <br></br>
                                <i className="bi bi-database-fill"></i> MySQL
                                <br></br>
                                <i className="bi bi-tools"></i> argon2 • pdfbox
                            </p>
                        </div>
                    </section>
                    
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light efecto-card-glow">
                        <div className="px-md-5 text-center">
                            <h3>Repositorio</h3>
                            <p>
                                <i className="bi bi-github"></i>
                                <br></br>
                                <a className="text-break w-100" href="https://github.com/victornietol/GestionBiblioteca_JavaFX" target="_blank" rel="noopener noreferrer">
                                    https://github.com/victornietol/GestionBiblioteca_JavaFX
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            
            <section className="card card-body mt-2 card-borde">
                <div className="px-md-5">
                    <h3 className="pb-3 pt-3 texto-subt-efecto" style={{textAlign: "start"}}>Introducción</h3>
                    <p>
                        Esta aplicación de escritorio fue creada con el objetivo de agilizar la administración en cuanto al inventario de libros, préstamos, generación de reportes, y clientes de una biblioteca que atendía a 3 escuelas en una zona pequeña. Esta solución sencilla ayudó para dejar de lado la administración que se realizaba a mano del lugar.
                        <br></br><br></br>
                        El proyecto se realizó con Java, JavaFX y MySQL debido a la practicidad de dichas herramientas ya que solo se necesitaba una interfaz sencilla, además de que el modelo de negocios del lugar no era muy robusto y todo tenía que implementarse de manera local. También, se utilizó <i>argon2</i> para cifrar las contraseñas y <i>pdfbox</i> para generar los archivos pdf.
                    </p>
                </div>
            </section>

            <section className="card card-body mt-3 card-borde">
                <div className="px-md-5 text-center">
                    <h3 className="pb-4 pt-4 texto-subt-efecto" style={{textAlign: "start"}}>Descripción</h3>
                    <section id="seccion_vista_inicio" className="card-body bg-light mb-3 efecto-card-glow">
                        <h4 className="texto-subt-efecto">Iniciar sesión</h4>
                    </section>
                </div>
                <div className="px-md-5">
                    <p>
                        Ventana de login donde se pide un usuario y contraseña para acceder al programa, en caso de no contar con un usuario valido se puede crear uno nuevo dando clic en el botón “Registrarse”.
                    </p>
                    <img src="/proyectos/gestion_biblioteca/1.jpeg" title="Descripción vista ingresos" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/1.jpeg")} alt="Img login" loading="lazy"></img>
                </div>
                
                <div className="px-md-5 mt-5">
                    <section id="seccion_vista_inicio" className="text-center card-body bg-light mb-3 mt-5 efecto-card-glow">
                        <h4 className="texto-subt-efecto">Registrarse</h4>
                    </section>
                    <p>
                        Para poder acceder correctamente a la ventana para registrar nuevos usuarios se pedirá introducir una contraseña que debe ser ingresada por el administrador de la biblioteca, esto para mantener el control de los usuarios que atenderán a los clientes en acciones como prestamos, devoluciones, etc., así como administrar el inventario de libros. En el formulario para nuevos usuarios del programa se solicita un nombre de usuario de máximo 12 caracteres, una contraseña de entre 8 y 12 caracteres que posteriormente se cifra, y datos personales para identificar y contactar a la persona.
                    </p>
                    <img src="/proyectos/gestion_biblioteca/2.jpeg" title="Ventana registrarse" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/2.jpeg")} alt="Img registrarse" loading="lazy"></img>
                </div>

                <div className="px-md-5 mt-5">
                    <section id="seccion_vista_inicio" className="text-center card-body bg-light mb-3 mt-5 efecto-card-glow">
                        <h4 className="texto-subt-efecto">Ventana principal</h4>
                    </section>
                    <p>
                        En esta ventana se encuentran diferentes pestañas como Inventario, Préstamos, Clientes, Sanciones, Reportes, así como una barra superior de opciones donde se puede cerrar la sesión del usuario actual y generar reportes en pdf con la información listada en las distintas pestañas según se seleccione.
                    </p>
                    <img src="/proyectos/gestion_biblioteca/3.jpeg" title="Ventana principal" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/3.jpeg")} alt="Img ventana principal" loading="lazy"></img>
                    <br></br>
                    <img src="/proyectos/gestion_biblioteca/4.jpeg" title="Menú superior de acciones" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/4.jpeg")} alt="Img Menú superior de acciones" loading="lazy"></img>
                    <br></br>
                    <p>
                        Al generar el reporte del pdf se pide seleccionar la ubicación donde se guardará el archivo, cada pdf cuenta con un formato similar al siguiente.
                    </p>
                    <img src="/proyectos/gestion_biblioteca/5.jpeg" title="Ventana guardar archivo" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/5.jpeg")} alt="Img guardar archivo" loading="lazy"></img>
                    <br></br>
                    <img src="/proyectos/gestion_biblioteca/6.jpeg" title="Archivo pdf 1" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/6.jpeg")} alt="Img archivo pdf 1" loading="lazy"></img>
                </div>

                <div className="px-md-5 mt-5">
                    <section id="seccion_vista_inicio" className="text-center card-body bg-light mb-3 mt-5 efecto-card-glow">
                        <h4 className="texto-subt-efecto">Pestaña inventario</h4>
                    </section>
                    <p>
                        En esta pestaña se muestra el listado de títulos de libros y unidades disponibles con información de estos, por lo tanto, se puede seleccionar entre una de las dos opciones anteriores para indicar que información se requiere. Además, se pueden realizar búsquedas de coincidencias según el campo indicado y ordenar el listado según la columna seleccionada.
                    </p>
                    <img src="/proyectos/gestion_biblioteca/7.jpeg" title="Pestaña inventario" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/7.jpeg")} alt="Img inventario" loading="lazy"></img>
                    <br></br>
                    <p>
                        También se cuenta con un botón que abre un formulario para agregar un titulo nuevo y la cantidad de ejemplares que estarán disponibles.
                        <br></br>
                        Al hacer clic izquierdo sobre algún elemento de la lista se pueden realizar distintas acciones (dichas acciones varían si el listado es de ejemplares o de títulos), una de ellas es agregar nuevos ejemplares de un título ya existente, esto, en el caso de querer ampliar el stock actual, esta opción despliega la siguiente ventana para indicar la cantidad a agregar.
                    </p>
                    <img src="/proyectos/gestion_biblioteca/8.jpeg" title="Opciones submenu" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/8.jpeg")} alt="Img submenu inventario" loading="lazy"></img>
                    <br></br>
                    <img src="/proyectos/gestion_biblioteca/9.jpeg" title="Ventana agregar ejemplares" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/9.jpeg")} alt="Img agregar ejemplares" loading="lazy"></img>
                </div>

                <div className="px-md-5 mt-5">
                    <section id="seccion_vista_inicio" className="text-center card-body bg-light mb-3 mt-5 efecto-card-glow">
                        <h4 className="texto-subt-efecto">Nuevo libro</h4>
                    </section>
                    <p>
                        En esta ventana se debe ingresar la información requerida para agregar un nuevo titulo y la cantidad de ejemplares que habrá disponibles. El máximo de ejemplares para agregar al crear un nuevo título es de 500. A su vez, para agregar algún elemento de las secciones de autores, categorías y editorial primero se deben seleccionar de la lista de la derecha dando clic sobre el elemento y posteriormente dando clic en el botón <i>Agregar</i> lo cual, pasará el elemento indicado de la lista de la derecha a la lista de la izquierda. Además, si se requiere agregar un nuevo elemento que no se encuentra disponible para selección en las listas de la derecha se puede agregar dando clic en el botón <i>Nuevo</i>. Mientras que si se quiere eliminar un elemento ya seleccionado y que se encuentre en la lista de la derecha entonces simplemente se selecciona del lado derecho para posteriormente presionar <i>Eliminar</i>, lo cual, lo mandará a la lista de la derecha nuevamente.
                    </p>
                    <img src="/proyectos/gestion_biblioteca/10.jpeg" title="Ventana nuevo libro" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/13.jpeg")} alt="Img nuevo libro" loading="lazy"></img>
                    <br></br>
                    <img src="/proyectos/gestion_biblioteca/11.jpeg" title="Seleccionar elemento 1" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/11.jpeg")} alt="Img seleccionar elemento 1" loading="lazy"></img>
                    <br></br>
                    <img src="/proyectos/gestion_biblioteca/12.jpeg" title="Seleccionar elemento 2" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/12.jpeg")} alt="Img seleccionar elemento 2" loading="lazy"></img>
                    <br></br>
                    <img src="/proyectos/gestion_biblioteca/13.jpeg" title="Ventana nuevo autor" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/13.jpeg")} alt="Img nuevo autor" loading="lazy"></img>
                </div>

                <div className="px-md-5 mt-5">
                    <section id="seccion_vista_inicio" className="text-center card-body bg-light mb-3 mt-5 efecto-card-glow">
                        <h4 className="texto-subt-efecto">Pestaña préstamos</h4>
                    </section>
                    <p>
                        En esta pestaña se muestran los préstamos de ejemplares que se encuentran activos actualmente. Se cuenta con dos botones en la parte superior derecha para agregar un nuevo préstamo o devolver un préstamo.
                    </p>
                    <img src="/proyectos/gestion_biblioteca/14.jpeg" title="Pestaña préstamos" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/14.jpeg")} alt="Img préstamos" loading="lazy"></img>
                    <br></br>
                    <p>
                        Para realizar un nuevo préstamo se despliega una nueva ventana para indicar el id del cliente (el cual debe proveer el cliente a la persona que lo atiende) y el id del ejemplar a prestar, posteriormente se muestra un cuadro de dialogo para confirmar la transacción.
                    </p>
                    <img src="/proyectos/gestion_biblioteca/15.jpeg" title="Ventana nuevo préstamo" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/15.jpeg")} alt="Img nuevo préstamo" loading="lazy"></img>
                    <br></br>
                    <img src="/proyectos/gestion_biblioteca/16.jpeg" title="Confirmación préstamo" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/16.jpeg")} alt="Img confirmación préstamo" loading="lazy"></img>
                    <br></br><br></br>
                    <p>
                        Para devolver un préstamo primero se debe seleccionar el préstamo de la lista y posteriormente dar clic derecho para seleccionar “Devolver préstamo” o simplemente una vez seleccionado el elemento dar clic en el botón de la parte superior “Devolver préstamo”, esta acción mostrará una ventana para confirmar que se quiere realizar la operación.
                    </p>
                    <img src="/proyectos/gestion_biblioteca/17.jpeg" title="Devolver préstamo" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/17.jpeg")} alt="Img devolver préstamo" loading="lazy"></img>
                </div>

                <div className="px-md-5 mt-5">
                    <section id="seccion_vista_inicio" className="text-center card-body bg-light mb-3 mt-5 efecto-card-glow">
                        <h4 className="texto-subt-efecto">Pestaña clientes</h4>
                    </section>
                    <p>
                        Esta pestaña muestra el listado de clientes activos, los cuales se pueden filtrar por distintos campos buscando coincidencias, además de ordenarlos según distintos criterios. Si se da clic izquierdo a un elemento de la lista se pueden realizar distintas acciones, una de ellas es ver que sanciones activas tiene el cliente seleccionado, lo cual, abre una nueva ventana con la información correspondiente. Desde esta ventana se pueden eliminar sanciones del cliente y mostrar un mensaje para confirmar que se quiere realizar dicha operación.
                    </p>
                    <img src="/proyectos/gestion_biblioteca/18.jpeg" title="Pestaña Clientes" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/18.jpeg")} alt="Img clientes" loading="lazy"></img>
                    <br></br>
                    <img src="/proyectos/gestion_biblioteca/19.jpeg" title="Pestaña sanciones cliente" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/19.jpeg")} alt="Img sanciones cliente" loading="lazy"></img>
                    <br></br>
                    <img src="/proyectos/gestion_biblioteca/20.jpeg" title="Confirmar eliminación de sanción" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/20.jpeg")} alt="Img eliminación sanción" loading="lazy"></img>
                    <br></br>
                    <p>
                        Se cuenta con dos botones en la parte superiore derecha para agregar un nuevo cliente o eliminar un cliente activo. Al presionar “Nuevo cliente” se abre un formulario para llenar la información correspondiente, dicho formulario es similar al formulario de nuevo usuario. Para eliminar un cliente primero se debe seleccionar un elemento de lista y posteriormente presionar “Eliminar cliente”, esto mostrará un mensaje para confirmar que se desea realizar la operación.
                    </p>
                    <img src="/proyectos/gestion_biblioteca/21.jpeg" title="Eliminar cliente" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/21.jpeg")} alt="Img eliminar cliente" loading="lazy"></img>
                </div>
                
                <div className="px-md-5 mt-5">
                    <section id="seccion_vista_inicio" className="text-center card-body bg-light mb-3 mt-5 efecto-card-glow">
                        <h4 className="texto-subt-efecto">Pestaña sanciones</h4>
                    </section>
                    <p>
                        En esta pestaña se muestran las sanciones activas de los distintos usuarios. Al igual que en los listados de las otras pestañas también se pueden filtrar los resultados y listarlos en el orden según se seleccione. Cuenta con un botón en la parte superior derecha para actualizar automáticamente las sanciones existentes o asignar nuevas sanciones según las reglas de negocio, dependiendo de que acción realice (actualización, nuevas sanciones, o sin cambios) mostrará un mensaje distinto indicando lo realizado.

                    </p>
                    <img src="/proyectos/gestion_biblioteca/22.jpeg" title="Pestaña sanciones" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/22.jpeg")} alt="Img sanciones" loading="lazy"></img>
                    <br></br>
                    <img src="/proyectos/gestion_biblioteca/23.jpeg" title="Actualizacion sanciones 1" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/23.jpeg")} alt="Img actualizacion sanciones 1" loading="lazy"></img>
                    <br></br>
                    <img src="/proyectos/gestion_biblioteca/24.jpeg" title="Actualizacion sanciones 2" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/24.jpeg")} alt="Img actualizacion sanciones 2" loading="lazy"></img>
                    <br></br>
                    <img src="/proyectos/gestion_biblioteca/25.jpeg" title="Actualizacion sanciones 3" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/25.jpeg")} alt="Img actualizacion sanciones 3" loading="lazy"></img>
                </div>

                <div className="px-md-5 mb-5">
                    <section id="seccion_vista_inicio" className="text-center card-body bg-light mb-3 mt-5 efecto-card-glow">
                        <h4 className="texto-subt-efecto">Pestaña reportes</h4>
                    </section>
                    <p>
                        En esta pestaña se muestran un resumen del día con los préstamos realizados y los préstamos devueltos, así como, la cantidad de libros en préstamo actualmente, cantidad de nuevos clientes generados en el día, cantidad de clientes actuales, cantidad de sanciones activas actualmente.
                    </p>
                    <img src="/proyectos/gestion_biblioteca/26.jpeg" title="Pestaña reportes" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/26.jpeg")} alt="Img reportes" loading="lazy"></img>
                    <br></br>
                    <p>
                        Cuenta con un botón en la parte superior derecha para generar un pdf con la información de esta pestaña, dicho resumen tiene el siguiente formato:
                    </p>
                    <img src="/proyectos/gestion_biblioteca/27.jpeg" title="Pdf reporte del día" className="img-fluid mx-auto d-block rounded border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in" }} onClick={() => handleImageClick("/proyectos/gestion_biblioteca/27.jpeg")} alt="Img pdf reporte del día" loading="lazy"></img>
                </div>

            </section>
        </>
    );
}

export default Gestion_biblioteca;