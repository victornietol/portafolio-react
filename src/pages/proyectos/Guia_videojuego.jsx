import { Helmet } from 'react-helmet-async';
import { useOutletContext } from "react-router-dom";

function Guia_videojuego() {
    const { setModalSrc, openModal } = useOutletContext();

    const handleImageClick = (url) => {
        setModalSrc(url);
        openModal();
    };

    return (
        <>
            <Helmet>
                <title>Guía Videojuego | Portafolio</title>
            </Helmet>

            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">App - Guía de Videojuego</h1>
            </div>

            <div className="container">
                <div className="row">
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light">
                        <div className="px-md-5 text-center">
                            <h3>Tecnologías empleadas</h3>
                            <p>
                                <i className="bi bi-code-slash"></i> Dart • <i className="bi bi-gear-fill"></i> Flutter
                                <br></br>
                                <i className="bi bi-tools"></i> shared_preferences • dropdown_button2 • syncfusion_flutter_calendar • cloud_firestore 
                            </p>
                        </div>
                    </section>
                    
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light">
                        <div className="px-md-5 text-center">
                            <h3>Repositorio</h3>
                            <p>
                                <i className="bi bi-github"></i>
                                <br></br>
                                <a className="text-break w-100" href="https://github.com/victornietol/ProgramacionMovil_Proyecto/tree/main/ProyectoFinal_V9" target="_blank" rel="noopener noreferrer">
                                    https://github.com/victornietol/ProgramacionMovil_Proyecto/tree/main/ProyectoFinal_V9
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
                        Esta idea de aplicación se realizó para ayudar a los jugadores de la saga <i>Persona</i> y más específicamente de <i>Persona 4 Golden</i>, porque justamente se tomó como inspiración para construir esta app aplicaciones similares, más en concreto, las apps que ayudan a los jugadores de Monster hunter (un ejemplo MHGUDB en la Play Store), que ayudan recopilando varios datos del juego para que el jugador conozca y busque lo que no puede encontrar en el juego.
                        <br></br><br></br>
                        Entonces, esta app esta pensada para ser una guía/wiki para los jugadores de <i>Persona 4</i> y, con ello, recopilar todos los datos del juego para así ya no tener que estar usando 15 diferentes páginas para encontrar lo que buscas, si no, que toda la información se encuentre en una sola app, desde eventos importantes/perdibles del juego, recetas de invocaciones, guías para conseguir los finales del juego, etc.
                    </p>
                </div>
            </section>

            <section className="card card-body mt-3">
                <div className="px-md-5 text-center">
                    <h3 className="pb-4 pt-4" style={{textAlign: "start"}}>Funcionamiento del sistema</h3>
                    <p style={{textAlign: "justify"}}>
                        Para llevar a cabo esta aplicación que consta de una guía para el juego Persona 4 se utilizó Flutter y Dart. La aplicación está compuesta por las vistas <i>calendario.dart, combinaciones.dart, finalesJuego.dart, infoPersonas.dart, iniciarSesion.dart, inicio.dart, libros.dart, nuevoUsuario.dart, respuestasExamenes.dart, sets.dart, socialLinks.dart</i> y <i>trivias.dart</i>. También se crearon dos archivos llamados <i>botonesPack.dart</i> y <i>cuadrosDialogos.dart</i> para crear y utilizar de manera más sencilla widgets que se han creado y personalizado para mostrar distinta información en la aplicación.
                    </p>
                    <p style={{textAlign: "justify"}}>
                        Para controlar que vista se debe de mostrar se creó <i>navegador.dart</i>, el cual, realiza esto con un <code>bottomNavigationBar()</code> basado en el índice de la vista que se quiere mostrar. Por lo tanto, las vistas se construyen en una lista a la que se accede con dicho índice, dependiendo del índice actual es la vista a mostrar. Además, en este archivo también se configuro el <code>AppBar()</code> para la aplicación en general, la  cual, contiene el titulo de la vista actual y un botón para cerrar sesión. De este modo, el titulo mostrado cambia dinámicamente dependiendo de que vista se esté mostrando actualmente, ya que, los títulos de las vistas principales están en una lista en el mismo orden que la lista de las vistas creadas y se accede a ella con el mismo índice.
                    </p>
                    <div className="text-center">
                        <img src="/proyectos/guia_videojuego/1.png" title="Descripción AppBar y BottomNavigationBar" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/1.png")} alt="Img sistema 1" loading="lazy"></img>
                    </div>
                    <p className="mt-2" style={{textAlign: "justify"}}>
                        La vista <i>inicio.dart</i> muestra información de la aplicación. El nombre del usuario que inicio sesión se muestra en la <code>AppBar</code> de la aplicación. Además, se utiliza <i>rootBundle</i> para cargar la información que contienen los archivos .txt que son utilizados en los widgets <code>Text()</code> donde se muestra el texto de la descripción de lo que contiene cada vista de la aplicación. El body de esta vista tiene un <code>Container()</code> que en el apartado decoration contiene un <code>DecorationImage()</code> con una imagen para mostrarla como fondo, por lo tanto, el <code>Container()</code> mencionado anteriormente tiene como hijo un <code>Center()</code> que contiene todo el contenido de esta vista como lo son los <code>Text()</code>, contenedores para separar cada apartado, y los iconos que acompañan a los títulos de cada apartado.
                    </p>
                    <div className="text-center">
                        <img src="/proyectos/guia_videojuego/prev.jpeg" title="Vista Inicio" className="img-fluid mx-auto d-block border border-dark w-25 mt-4" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/prev.jpeg")} alt="Img sistema inicio" loading="lazy"></img>
                    </div>
                    <p className="mt-4" style={{textAlign: "justify"}}>
                        La vista <i>combinaciones.dart</i> utiliza la dependencia <i>dropdown_button2</i> para crear un botón que despliega una lista con las distintas Personas que existen en el juego. Al seleccionar una opción se genera el widget <code>ContenidoCombinaciones()</code> que contiene la imagen con la información correspondiente a la información de las combinaciones de esa Persona. Este widget personalizado recibe el valor de la variable que se asigna al seleccionar un item de la lista desplegable y genera un <code>InteractiveViewer()</code> que contiene la imagen con la información del item seleccionado.
                    </p>
                    <div className="text-center">
                        <img src="/proyectos/guia_videojuego/2.jpeg" title="Vista Combinaciones" className="img-fluid mx-auto d-block border border-dark w-25" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/2.jpeg")} alt="Img sistema 2" loading="lazy"></img>
                    </div>
                    <p className="mt-4" style={{textAlign: "justify"}}>
                        La vista <i>infoPersonas.dart</i> muestra la información de cada Persona que contiene el juego. Esto se realiza creando una lista botones con el widget personalizado <code>BotonesPersonas()</code>, el cual recibe una lista con los nombres de las personas, esta lista se obtiene de un archivo <i>.txt</i> con los nombres separados por comas. El widget genera un <code>ListView()</code> que recibe una lista de widgets (los botones creados), cada botón corresponde a un botón personalizado <code>BotónInfoElevated()</code> que recibe el nombre de la Persona, la ruta de la imagen de la Persona, y contiene un accion encargado de desplegar un cuadro de dialogo personalizado CuadroDialogo1() con nombre de la Persona, su información (este contenido se coloca en una caja de contenido creada dentro de un <code>Expanded()</code> que contiene un <code>ListView()</code>), un botón para regresar y un botón para agregar este item a la vista <i>Wishlist</i>. Al presionar el botón para agregar a la <i>Wishlist</i> se verifica que el usuario haya iniciado sesión, de lo contrario se muestra un mensaje indicando que es necesario iniciar sesión para guardar items. Por lo tanto, para almacenar los ítems de cada usuario se utilizó <i>cloud_firestore</i>. La creación de estos botones se realiza recorriendo la lista que se le manda a <code>BotonesPersonas()</code> con un ciclo <code>for</code> que depende de la longitud de dicha lista. 
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <img src="/proyectos/guia_videojuego/3.jpeg" title="Vista Personas 1" className="img-fluid mx-auto d-block border border-dark mt-2 w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/3.jpeg")} alt="Img sistema 3" loading="lazy"></img>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <img src="/proyectos/guia_videojuego/4.jpeg" title="Vista Personas 2" className="img-fluid mx-auto d-block border border-dark mt-2 w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/4.jpeg")} alt="Img sistema 4" loading="lazy"></img>
                            </div>
                        </div>
                    </div>
                    <p className="mt-4" style={{textAlign: "justify"}}>
                        La vista <i>sets.dart</i> muestra la <i>Wishlist</i> con los ítems Personas y Libros guardados por el usuario. Utiliza las dependencias <i>shared_preferences</i> para obtener al usuario que haya iniciado sesión y <i>cloud_firestore</i> para leer de la de la base de datos los ítems guardados por el usuario actual. La forma en que se generan los botones de los ítems guardados es la misma que en las demás vistas que usan botones personalizados, en este caso se utiliza <code>BotonesPersonasWishlist()</code> que recibe la lista de los ítems del usuario logueado. 
                    </p>
                    <p style={{textAlign: "justify"}}>
                        Esta lista de ítems se obtiene leyendo los documentos que contiene el usuario en la base de datos, este recorrido se hace con un ciclo <code>for</code> y se van agregando a la variable <code>_listaDocumentos</code>. Cuando el usuario abre esta vista se tienen tres posibles escenarios: 1. Si el usuario no ha iniciado sesión entonces en esta vista solo se muestra el mensaje “Inicia sesión para guardar ítems”. 2. Si el usuario que inicio sesión no cuenta con ítems guardados entonces se muestra el mensaje “Aún no tienes ítems guardados”. 3. Si el usuario esta logueado y tiene ítems guardados entonces se muestra al inicio del cuerpo de la vista el mensaje “Estos son tus ítems guardados” y posteriormente se crean los widgets de los botones personalizados <code>BotonesPersonasWishlist()</code> de dichos ítems de la misma manera que en otras vistas como <i>infoPersonas</i>. En este caso, al presionar alguno de los ítems se muestra un cuadro de dialogo personalizado <code>Cuadrodialogo2()</code> que ahora en lugar de tener el botón de “Agregar a Wishlist” tiene un botón para eliminar este item de la <i>Wishlist</i> que borra el documento correspondiente de la base de datos y por consecuencia de la lista de botones a construir en la vista. Una vez que se borra un elemento se actualiza la vista para mostrar el cambio realizado.
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <img src="/proyectos/guia_videojuego/5.jpeg" title="Vista Wishlist 1" className="img-fluid mx-auto d-block border border-dark mt-2 w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/5.jpeg")} alt="Img sistema 6" loading="lazy"></img>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <img src="/proyectos/guia_videojuego/6.jpeg" title="Vista Wishlist 2" className="img-fluid mx-auto d-block border border-dark mt-2 w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/6.jpeg")} alt="Img sistema 6" loading="lazy"></img>
                            </div>
                        </div>
                    </div>
                    <p className="mt-4" style={{textAlign: "justify"}}>
                        En la vista <i>calendario.dart</i> se utiliza la dependencia <i>syncfusion_flutter_calendar</i> para mostrar un calendario con las actividades que se pueden realizar en determinados días en el juego (días del juego). Para almacenar estos eventos o actividades se utilizó una base de datos no relacional con la dependencia <i><a href="https://firebase.google.com/docs/firestore?hl=es-419">cloud_firestore</a></i>, de este modo, en la base se tiene una colección llamada “calendario” con distintos documentos, cada documento corresponde a un evento y contiene los campos “nombre”, “inicio”, “fin”, “color”. Cada vez que se construye el widget se obtiene los datos almacenados en el documento “calendario” para poder mostrarlos en la vista.
                    </p>
                    <img src="/proyectos/guia_videojuego/7.jpeg" title="Vista Calendario" className="img-fluid mx-auto d-block border border-dark w-25 mt-4" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/7.jpeg")} alt="Img sistema 7" loading="lazy"></img>
                    <p className="mt-4" style={{textAlign: "justify"}}>
                        La vista <i>sets.dart</i> ayuda al usuario a dirigirse a las vistas que contienen información sobre Libros, Respuestas de exámenes, Social Links y Finales del juego. Por lo tanto, esta vista contiene cuatro botones donde cada uno tiene una imagen de fondo que hace referencia a la vista a la que te dirige, además de tener un texto que indica la vista destino. La construcción de esta vista consta de un <code>Column()</code> que contiene dos <code>Row()</code>. Cada <code>Row()</code> contiene dos botones creados con un <code>InkWell()</code>, el cual, en el <code>onTap</code> realiza un <code>showDialog()</code> que construye la vista correspondiente al botón, y en el child se coloca un <code>Container()</code> que tiene como hijo el texto correspondiente al botón, mientras que en decoration contiene un <code>BoxDecoration()</code> para asignar la imagen mencionada anteriormente como fondo del botón.
                    </p>
                    <img src="/proyectos/guia_videojuego/8.jpeg" title="Vista Guías" className="img-fluid mx-auto d-block border border-dark w-25 mt-4" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/8.jpeg")} alt="Img sistema 8" loading="lazy"></img>
                    <p className="mt-4" style={{textAlign: "justify"}}>
                        Para la vista <i>finalesJuego.dart</i> se genera un widget <code>Text()</code> que contiene el texto de cada apartado con cada uno de los finales del juego. Este texto con la información de cada final se obtiene de un archivo <i>.txt</i> y se le manda a su respectivo <code>Text()</code>. Además, al concluir la sección con la información de cada final se agregó una imagen en un <code>GestureDetector()</code> que permite dar click en la imagen y hacerla mas grande con la ayuda de un <code>Dialog()</code> que a su vez contiene un <code>InteractiveViewer</code> para poder hacer zoom en la imagen.
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <img src="/proyectos/guia_videojuego/9.jpeg" title="Vista Posibles finales 1" className="img-fluid mx-auto d-block border border-dark mt-2 w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/9.jpeg")} alt="Img sistema 9" loading="lazy"></img>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <img src="/proyectos/guia_videojuego/10.jpeg" title="Vista Posibles finales 2" className="img-fluid mx-auto d-block border border-dark mt-2 w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/10.jpeg")} alt="Img sistema 10" loading="lazy"></img>
                            </div>
                        </div>
                    </div>
                    <p className="mt-4" style={{textAlign: "justify"}}>
                        La vista <i>libros.dart</i> muestra los diferentes libros que se pueden conseguir en el juego. La estructura y funcionamiento de esta vista es el mismo que el de la vista <i>infoPersonas.dart</i>. Por lo tanto, se crean widgets personalizados <code>BotonesLibros()</code> que corresponden a cada libro, la diferencia con los botones de la otra vista mencionada anteriormente es que en este caso la lista de los ítems (libros) se lee desde un archivo <i>.txt</i> diferente utilizando rootBundle. El contenido que se muestra al presionar cada botón corresponde al widget personalizado <code>CuadroDialogo1()</code> pero en este caso en el apartado contenido se manda una imagen y un texto correspondiente a la descripción del libro, dicha descripción se obtiene con la función <code>_leerInfoLibro2()</code> que recibe el nombre del libro y obtiene su información de su archivo <i>.txt</i> para posteriormente asignarlo a la variable <code>desc</code>.
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <img src="/proyectos/guia_videojuego/11.jpeg" title="Vista Libros 1" className="img-fluid mx-auto d-block border border-dark mt-2 w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/11.jpeg")} alt="Img sistema 11" loading="lazy"></img>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <img src="/proyectos/guia_videojuego/12.jpeg" title="Vista Libros 2" className="img-fluid mx-auto d-block border border-dark mt-2 w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/12.jpeg")} alt="Img sistema 12" loading="lazy"></img>
                            </div>
                        </div>
                    </div>
                    <p className="mt-4" style={{textAlign: "justify"}}>
                        La vista <i>respuestasExamanes.dart</i> tiene el mismo funcionamiento que la vista <i>combinaciones.dart</i> ya que, utiliza la dependencia <i>dropdown_button2</i> para construir un botón desplegable en el que se puede seleccionar el mes del que se pueden mostrar las respuestas de los exámenes del juego por fechas. La información de cada mes se lee de un archivo <i>.txt</i> con rootBundle como se hace en otras vistas mencionadas con anterioridad. 
                    </p>
                    <img src="/proyectos/guia_videojuego/13.jpeg" title="Vista RespuestasExamanes" className="img-fluid mx-auto d-block border border-dark w-25 mt-3" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/13.jpeg")} alt="Img sistema 13" loading="lazy"></img>
                    <p className="mt-4" style={{textAlign: "justify"}}>
                        La vista <i>socialLinks.dart</i> tiene el mismo funcionamiento y estructura que la vista <i>libros.dart</i>, ya que, se crean en este caso botones personalizados <code>BotonesSocialLinks()</code>, los cuales, al presionarlos muestran un cuadro de dialogo personalizado <code>CuadroDialogoSL()</code>. Dicho cuadro de dialogo cuenta con la misma estructura que los cuadros de dialogo utilizados en las vistas mencionadas anteriormente, pero con la diferencia de que en este caso no se cuenta con el botón “Agregar a Wishlist” debido a que estos ítems no son parte del contenido de esa vista. 
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <img src="/proyectos/guia_videojuego/14.jpeg" title="Vista Social Links 1" className="img-fluid mx-auto d-block border border-dark mt-2 w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/14.jpeg")} alt="Img sistema 14" loading="lazy"></img>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <img src="/proyectos/guia_videojuego/15.jpeg" title="Vista Social Links 2" className="img-fluid mx-auto d-block border border-dark mt-2 w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/15.jpeg")} alt="Img sistema 15" loading="lazy"></img>
                            </div>
                        </div>
                    </div>
                    <p className="mt-4" style={{textAlign: "justify"}}>
                        La vista <i>iniciarSesion.dart</i> se utiliza para que los usuarios puedan acceder a la aplicación con un usuario o simplemente entrar sin credenciales. Para esto se utilizaron las dependencias de <i>firestore</i> para el acceso con credenciales de los usuarios, y <i>shared_preferences</i> para almacenar de forma local al usuario que inicie sesión. Por lo tanto, el contenido de esta vista se colocó en un <code>Expanded()</code> que contiene un <code>ListView()</code>, el cual tiene como hijos los contenedores que tienen a los <code>TextFiled()</code> para ingresar los datos, la imagen del juego, y otro contenedor para los botones “Iniciar sesión” y “Entrar sin sesión”. El botón “Iniciar sesión” busca el usuario en la base de datos, en caso de encontrarlo se verifica que la contraseña sea correcta, de lo contrario se muestra un mensaje de “Contraseña invalida”, en caso de no encontrar al usuario se muestra un mensaje con la leyenda “El usuario no existe”. Además, se colocó un <code>floatingActionButton</code> al final de <code>Scaffold</code> que sirve para crear un nuevo usuario, por lo tanto, abre la vista <i>nuevoUsuario.dart</i>.
                    </p>
                    <img src="/proyectos/guia_videojuego/16.jpeg" title="Vista Iniciar Sesión" className="img-fluid mx-auto d-block border border-dark w-25 mt-3" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/16.jpeg")} alt="Img sistema 16" loading="lazy"></img>
                    <p className="mt-4" style={{textAlign: "justify"}}>
                        La vista <i>nuevoUsuario.dart</i> utiliza <i>firestore</i> para manejar las credenciales de los nuevos usuarios creados. Esta vista contiene los dos <code>TextField()</code> para introducir usuario y contraseña y el botón para crear el nuevo usuario. Además, contiene un <code>floatingActionButton</code>  en la parte superior izquierda para regresar a la vista <i>iniciarSesion.dart</i> en caso de que el usuario no quiera crear un nuevo usuario. Al presionar el botón “Crear usuario” primero se verifica que el nuevo usuario introducido existe en la base de datos, si el usuario existe se manda el mensaje “El usuario ya existe”, en caso de no existir el usuario, se valida que la contraseña y el usuario no tengan espacios en blanco, en caso de tener espacios en blanco se muestra un mensaje indicando este problema. En caso de que la contraseña y usuario superen las validaciones entonces se genera un cuadro de dialogo <code>_cuadroDialogoExitoso()</code> que es un <code>AlertDialog</code> personalizado, el cual, contiene el mensaje “Usuario creado con éxito” y un botón “Aceptar” que al presionarlo manda al usuario a la vista iniciarSesion para que el usuario pueda iniciar sesión con sus nuevas credenciales.
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <img src="/proyectos/guia_videojuego/17.jpeg" title="Vista Social Links 1" className="img-fluid mx-auto d-block border border-dark mt-2 w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/17.jpeg")} alt="Img sistema 17" loading="lazy"></img>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <img src="/proyectos/guia_videojuego/18.jpeg" title="Vista Social Links 2" className="img-fluid mx-auto d-block border border-dark mt-2 w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/guia_videojuego/18.jpeg")} alt="Img sistema 18" loading="lazy"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Guia_videojuego;