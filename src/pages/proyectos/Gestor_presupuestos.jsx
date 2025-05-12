import { Helmet } from 'react-helmet-async';
import { useOutletContext } from "react-router-dom";

function Gestor_presupuestos() {
    const { setModalSrc, openModal } = useOutletContext();

    const handleImageClick = (url) => {
        setModalSrc(url);
        openModal();
    };

    return(
        <>
            <Helmet>
                <title>Gestor presupuestos | Portafolio</title>
            </Helmet>
            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">App - Gestor de presupuestos</h1>
            </div>

            <div className="container">
                <div className="row">
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light">
                        <div className="px-md-5 text-center">
                            <h3>Tecnologías empleadas</h3>
                            <p>
                                <i className="bi bi-code-slash"></i> Dart • <i className="bi bi-gear-fill"></i> Flutter
                                <br></br>
                                <i className="bi bi-database-fill"></i> SQLite
                                <br></br>
                                <i className="bi bi-tools"></i> decimal • intl • dropdown_button2 • fl_chart • syncfusion_flutter_charts • shared_preferences • table_calendar • calendar_date_picker2 • flutter_native_splash
                            </p>
                        </div>
                    </section>
                    
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light">
                        <div className="px-md-5 text-center">
                            <h3>Repositorio</h3>
                            <p>
                                <i className="bi bi-github"></i>
                                <br></br>
                                <a className="text-break w-100" href="https://github.com/victornietol/AplicacionPresupuesto" target="_blank" rel="noopener noreferrer">
                                    https://github.com/victornietol/AplicacionPresupuesto
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
                        Este proyecto personal Android correspondiente a la aplicación <i>Gestor de Presupuestos</i> fue diseñada para ayudar al usuario a administrar sus ingresos y egresos de manera local mediante presupuestos que puede elaborar con categorías dinámicamente. Por lo tanto, el almacenamiento de los datos se realiza en un base de datos relacional (en un futuro se busca implementar también el almacenamiento en la nube con Cloud Firestore de Firebase). La aplicación cuenta con tres vistas: <a href="#seccion_vista_inicio"><i>Inicio</i></a>, <a href="#seccion_vista_ingresos"><i>Ingresos</i></a> y <a href="#seccion_vista_egresos"><i>Egresos</i></a>
                        <br></br><br></br>
                        Con gráficos y reportes, se busca brindar apoyo al usuario en la toma de decisiones y supervisión de sus finanzas. Algunas de las características principales son el registro de ingresos y egresos, visualización de datos en gráficos, personalización de categorías para los ingresos y egresos, cálculo automático de un balance general, y el resumen de ingresos y egresos en diferentes periodos de tiempo preestablecidos o indicando un cierto periodo de días.
                        <br></br><br></br>
                        Como se mencionó anteriormente, con esto se busca ayudar en la gestión de las finanzas, con lo cuál, la aplicación permite generar tantos presupuestos como el usuario necesite. Y del mismo modo, cada presupuesto puede asignar dinámicamente distintas categorías para ingresos y egresos según lo requiera el usuario. Asimismo, se busca contruibuir a la automatización de ciertas tareas del día a día para conocer el resumen rápido de los ingresos y egresos que pueda tener un usuario.
                    </p>
                </div>
            </section>

            <section className="card card-body mt-3">
                <div className="px-md-5 text-center">
                    <h3 className="pb-4 pt-4" style={{textAlign: "start"}}>Funcionamiento del sistema</h3>
                    <p style={{textAlign: "justify"}}>
                        Al abrir la aplicación por primera vez se muestra una pantalla indicando que se debe crear un presupuesto. Una vez que se tienen presupuestos creados, el presupuesto que se visualiza al abrir la aplicación es el último seleccionado por el usuario la última vez que abrió la aplicación.
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <img src="/src/assets/proyectos/gestor_presupuestos/29.jpeg" title="Inicio de la aplicación 1" className="img-fluid mx-auto d-block mb-2 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/29.jpeg")} alt="Img interfaz sistema 29" loading="lazy"></img>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <img src="/src/assets/proyectos/gestor_presupuestos/30.jpeg" title="Inicio de la aplicación 2" className="img-fluid mx-auto d-block mb-2 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/30.jpeg")} alt="Img interfaz sistema 30" loading="lazy"></img>
                            </div>
                        </div>
                    </div>
                    <p className="mt-2" style={{textAlign: "justify"}}>
                        Una vez creando un presupuesto ya se pueden visualizar los apartados del presupuesto como balance general, total de ingreso, total de egresos, etc. Pero antes de agregar un ingreso o egreso se debe crear una categoría para el elemento financiero en cuestión, de lo contrario, se muestra un mensaje indicando lo anterior. Las categorías se pueden crear en sus respecitivas vistas con el botón <i>Agregar categoria</i>.
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <img src="/src/assets/proyectos/gestor_presupuestos/33.jpeg" title="Agregar categoria 1" className="img-fluid mx-auto d-block mb-2 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/33.jpeg")} alt="Img interfaz sistema 33" loading="lazy"></img>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <img src="/src/assets/proyectos/gestor_presupuestos/32.jpeg" title="Agregar categoria 2" className="img-fluid mx-auto d-block mb-2 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/32.jpeg")} alt="Img interfaz sistema 32" loading="lazy"></img>
                            </div>
                        </div>
                    </div>
                    <p className="mt-2" style={{textAlign: "justify"}}>
                        Al agregar un nuevo ingreso o egreso se despliega el siguiente cuadro de dialogo con los campos necesarios a llenar. Si alguno de los campos contiene un valor erróneo, entonces, se muestra un mensaje de error. 
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <img src="/src/assets/proyectos/gestor_presupuestos/35.jpeg" title="Agregar ingreso 1" className="img-fluid mx-auto d-block mb-2 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/35.jpeg")} alt="Img interfaz sistema 35" loading="lazy"></img>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <img src="/src/assets/proyectos/gestor_presupuestos/36.jpeg" title="Agregar ingreso 2" className="img-fluid mx-auto d-block mb-2 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/36.jpeg")} alt="Img interfaz sistema 36" loading="lazy"></img>
                            </div>
                        </div>
                    </div>
                    <p className="mt-2" style={{textAlign: "justify"}}>
                        Una vez que teniendo ingresos o egresos se pueden visualizar por categorias o todos en general. Dependiendo de que pestaña o categoria se haya seleccionado.
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <img src="/src/assets/proyectos/gestor_presupuestos/37.jpeg" title="Ingresos 1" className="img-fluid mx-auto d-block mb-2 border mb-2 border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/37.jpeg")} alt="Img interfaz sistema 37" loading="lazy"></img>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <img src="/src/assets/proyectos/gestor_presupuestos/38.jpeg" title="Ingreso 2" className="img-fluid mx-auto d-block mb-2 border mb-2 border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/38.jpeg")} alt="Img interfaz sistema 38" loading="lazy"></img>
                            </div>
                        </div>
                    </div>
                    <p className="mt-2" style={{textAlign: "justify"}}>
                        Además, ahora se pueden acceder a las diferentes vistas que se muestran en el menú lateral, las cuáles, ofrecen distinta información según la que se seleccione.
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <img src="/src/assets/proyectos/gestor_presupuestos/39.jpeg" title="Vistas 1" className="img-fluid mx-auto d-block mb-2 border mb-2 border-dark w-75" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/39.jpeg")} alt="Img interfaz sistema 39" loading="lazy"></img>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <img src="/src/assets/proyectos/gestor_presupuestos/40.jpeg" title="Vistas 2" className="img-fluid mx-auto d-block mb-2 border mb-2 border-dark w-75" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/40.jpeg")} alt="Img interfaz sistema 40" loading="lazy"></img>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <img src="/src/assets/proyectos/gestor_presupuestos/3.jpeg" title="Vistas 3" className="img-fluid mx-auto d-block mb-2 border mb-2 border-dark w-75" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/3.jpeg")} alt="Img interfaz sistema 5" loading="lazy"></img>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <img src="/src/assets/proyectos/gestor_presupuestos/41.jpeg" title="Vistas 4" className="img-fluid mx-auto d-block mb-2 border mb-2 border-dark w-75" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/41.jpeg")} alt="Img interfaz sistema 41" loading="lazy"></img>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <img src="/src/assets/proyectos/gestor_presupuestos/42.jpeg" title="Vistas 5" className="img-fluid mx-auto d-block mb-2 border mb-2 border-dark w-75" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/42.jpeg")} alt="Img interfaz sistema 42" loading="lazy"></img>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <img src="/src/assets/proyectos/gestor_presupuestos/3.jpeg" title="Vistas 6" className="img-fluid mx-auto d-block mb-2 border mb-2 border-dark w-75" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/3.jpeg")} alt="Img interfaz sistema 3" loading="lazy"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="card card-body mt-3">
                <div className="px-md-5 text-center">
                    <h3 className="pb-4 pt-4" style={{textAlign: "start"}}>Descripción de la interfaz</h3>
                    <section id="seccion_vista_inicio" className="card card-body bg-light mb-3">
                        <h4> Vista <i>Inicio</i></h4>
                    </section>
                    <img src="/src/assets/proyectos/gestor_presupuestos/1.png" title="Descripción interfaz 1" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/1.png")} alt="Img interfaz sistema 1" loading="lazy"></img>
                </div>
                <div className="mt-2 mb-3"></div>
                <div className="px-md-5">
                    <section className="card card-body mt-2 mb-2">
                        <strong>1. Menú</strong>
                        <p style={{textAlign: "justify"}}>
                            Este botón despliega un menú lateral con diferentes opciones de la aplicación para visualizar información.
                        </p>
                        <div className="text-center">
                            <img src="/src/assets/proyectos/gestor_presupuestos/2.png" title="Descripción interfaz 2" className="img-fluid mx-auto d-block px-2" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/2.png")} alt="Img interfaz sistema 2" loading="lazy"></img>
                        </div>
                        <div>
                            <strong>1.1. Botón de Inicio</strong>
                            <p style={{textAlign: "justify"}}>
                                Este botón dirige al usuario a la vista <i>Inicio</i> mostrada anteriormente.
                            </p>
                        </div>
                        <div>
                            <strong>1.2. Botón de Calendario</strong>
                            <p style={{textAlign: "justify"}}>
                                Abre la vista <i>Calendario</i> que muestra un calendario donde se pueden ver los ingresos y egresos realizados por día. Además, si se selecciona algún elemento financiero, entonces se muestran sus detalles.
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-lg-6">
                                        <img src="/src/assets/proyectos/gestor_presupuestos/3.jpeg" title="Descripción interfaz 3" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/3.jpeg")} alt="Img interfaz sistema 3" loading="lazy"></img>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <img src="/src/assets/proyectos/gestor_presupuestos/4.jpeg" title="Descripción interfaz 4" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/4.jpeg")} alt="Img interfaz sistema 4" loading="lazy"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <strong>1.3. Botón de Resumen Ingresos</strong>
                            <p style={{textAlign: "justify"}}>
                                Dirige al usuario a una vista donde se puede visualizar un resumen de los ingresos del presupuesto actual. Dicho resumen se muestran tanto por semana actual, mes actual, año actual, así como, seleccionando un rango de días específico.
                            </p>
                            <div className="text-center">
                                <img src="/src/assets/proyectos/gestor_presupuestos/5.jpeg" title="Descripción interfaz 5" className="img-fluid mx-auto d-block mb-3 border border-dark w-25" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/5.jpeg")} alt="Img interfaz sistema 5" loading="lazy"></img>
                            </div>
                            <p style={{textAlign: "justify"}}>
                                En caso de seleccionar un rango de fechas, entonces se muestra lo siguiente.
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-lg-6">
                                        <img src="/src/assets/proyectos/gestor_presupuestos/6.jpeg" title="Descripción interfaz 6" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/6.jpeg")} alt="Img interfaz sistema 6" loading="lazy"></img>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <img src="/src/assets/proyectos/gestor_presupuestos/7.jpeg" title="Descripción interfaz 7" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/1.jpeg")} alt="Img interfaz sistema 7" loading="lazy"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <strong>1.4. Botón de Resumen Egresos</strong>
                            <p style={{textAlign: "justify"}}>
                                Dirige al usuario a una vista donde se puede visualizar un resumen de los egresos del presupuesto actual. En resumen, tiene la misma lógica que la vista <i>Resumen Ingresos</i> pero en este caso, con los egresos del usuario.
                            </p>
                            <div className="text-center">
                                <img src="/src/assets/proyectos/gestor_presupuestos/8.jpeg" title="Descripción interfaz 8" className="img-fluid mx-auto d-block mb-3 border border-dark w-25" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/8.jpeg")} alt="Img interfaz sistema 8" loading="lazy"></img>
                            </div>
                        </div>
                        <div>
                            <strong>1.5. Botón de Gráficas</strong>
                            <p style={{textAlign: "justify"}}>
                                Este botón dirige al usuario a una vista con gráficas para facilitar la visualización de distintos criterios aplicados para los ingresos y egresos como una comparativa de los elementos financieros por dia de la semana, por año, por categoria y el balance general. Todo esto, correspondiente al presupuesto actual que haya seleccionado previamente el usuario en el menú lateral.
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-lg-6">
                                        <img src="/src/assets/proyectos/gestor_presupuestos/9.jpeg" title="Descripción interfaz 9" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/9.jpeg")}  alt="Img interfaz sistema 9" loading="lazy"></img>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <img src="/src/assets/proyectos/gestor_presupuestos/10.jpeg" title="Descripción interfaz 10" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/10.jpeg")}  alt="Img interfaz sistema 10" loading="lazy"></img>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <img src="/src/assets/proyectos/gestor_presupuestos/11.jpeg" title="Descripción interfaz 11" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/11.jpeg")}  alt="Img interfaz sistema 11" loading="lazy"></img>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <img src="/src/assets/proyectos/gestor_presupuestos/12.jpeg" title="Descripción interfaz 12" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/12.jpeg")}  alt="Img interfaz sistema 12" loading="lazy"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <strong>1.6. Botón de Presupuestos</strong>
                            <p style={{textAlign: "justify"}}>
                                Este botón despliega otros botones para seleccionar que presupuesto se quiere visualizar. Además de un botón para agregar un nuevo presupuesto. Por último, cada botón correspondiente a un presupuesto contiene otro botón para modificar el nombre del presupuesto si se desea.
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-lg-6">
                                        <img src="/src/assets/proyectos/gestor_presupuestos/13.jpeg" title="Descripción interfaz 13" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}}  onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/13.jpeg")}  alt="Img interfaz sistema 13" loading="lazy"></img>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <img src="/src/assets/proyectos/gestor_presupuestos/14.jpeg" title="Descripción interfaz 14" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}}  onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/14.jpeg")}  alt="Img interfaz sistema 14" loading="lazy"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <strong>1.7. Botón de Información</strong>
                            <p style={{textAlign: "justify"}}>
                                Este botón abre un cuadro de dialogo con un resumen con información sobre la aplicación.
                            </p>
                            <div className="text-center">
                                <img src="/src/assets/proyectos/gestor_presupuestos/15.jpeg" title="Descripción interfaz 15" className="img-fluid mx-auto d-block mb-3 w-25" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}}  onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/15.jpeg")} alt="Img interfaz sistema 15" loading="lazy"></img>
                            </div>
                        </div>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>2. Balance general</strong>
                        <p style={{textAlign: "justify"}}>
                            En esta sección se muestra el balace general entre ingresos y egresos. Además, si se presiona dicha sección, entonces, se muestra una gráfica con las cantidades totales de ingresos y egresos.
                        </p>
                        <div className="text-center">
                            <img src="/src/assets/proyectos/gestor_presupuestos/16.jpeg" title="Balance general" className="img-fluid mx-auto d-block border border-dark w-25" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}}  onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/16.jpeg")} alt="Balance general" loading="lazy"></img>
                        </div>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>3. Botón Nuevo Presupuesto</strong>
                        <p style={{textAlign: "justify"}}>
                            Este botón permite al usuario crear un nuevo presupuesto.
                        </p>
                        <div className="text-center">
                            <img src="/src/assets/proyectos/gestor_presupuestos/17.jpeg" title="Nuevo presupuesto" className="img-fluid mx-auto d-block border border-dark w-25" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}}  onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/17.jpeg")} alt="Nuevo presupuesto" loading="lazy"></img>
                        </div>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>4. Botón Agregar Ingreso</strong>
                        <p style={{textAlign: "justify"}}>
                            Este botón permite al usuario agregar un nuevo ingreso con sus respectivas características. Siempre es necesario que exista previemente una categoria creada para poder asignarle una al ingreso.
                        </p>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-6">
                                    <img src="/src/assets/proyectos/gestor_presupuestos/18.jpeg" title="Nuevo ingreso 1" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}}  onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/18.jpeg")} alt="Img interfaz sistema 18" loading="lazy"></img>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <img src="/src/assets/proyectos/gestor_presupuestos/21.jpeg" title="Nuevo ingreso 2" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}}  onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/21.jpeg")} alt="Img interfaz sistema 18" loading="lazy"></img>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>5. Botón Agregar Egreso</strong>
                        <p style={{textAlign: "justify"}}>
                            Este botón permite al usuario agregar un nuevo egreso con sus respectivas características. Siempre es necesario que exista previemente una categoria creada para poder asignarle una al egreso.
                        </p>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-6">
                                    <img src="/src/assets/proyectos/gestor_presupuestos/19.jpeg" title="Nuevo egreso 1" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/19.jpeg")} alt="Img interfaz sistema 19" loading="lazy"></img>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <img src="/src/assets/proyectos/gestor_presupuestos/20.jpeg" title="Nuevo egreso 2" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/20.jpeg")} alt="Img interfaz sistema 20" loading="lazy"></img>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>6. Botón Total Ingresos</strong>
                        <p style={{textAlign: "justify"}}>
                            Muestra el total de todos los ingresos del presupuesto actual. Al presionarlo dirige al usuario a la vista <i>Ingresos</i> para mostrar los detalles de estos elementos.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>7. Botón Total Egresos</strong>
                        <p style={{textAlign: "justify"}}>
                            Muestra el total de todos los egresos del presupuesto actual. Al presionarlo dirige al usuario a la vista <i>Egresos</i> para mostrar los detalle de estos elementos.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>8. Cuadro informativo ingresos</strong>
                        <p style={{textAlign: "justify"}}>
                            Muestra la categoria con el mayor total de ingresos del presupuesto actual.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>9. Cuadro informativo egresos</strong>
                        <p style={{textAlign: "justify"}}>
                            Muestra la categoria con el mayor total de egresos del presupuesto actual.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>10. Barra de navegación</strong>
                        <p style={{textAlign: "justify"}}>
                            Según se seleccione un elemento, dirige al usuario a la vista <i>Ingresos</i>, <i>Inicio</i> o <i>Egresos</i>. Cada vista muestra sus propios detalles.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>11. Sección top 3 ingresos</strong>
                        <p style={{textAlign: "justify"}}>
                            Muestra los 3 ingresos con mayor monto del presupuesto actual ordenados de manera descendente.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>12. Sección top 3 egresos</strong>
                        <p style={{textAlign: "justify"}}>
                            Muestra los 3 egresos con mayor monto del presupuesto actual ordenados de manera descendente.
                        </p>
                    </section>
                </div>
                <div className="px-md-5 mt-5">
                    <section id="seccion_vista_ingresos" className="card card-body bg-light mb-3">
                        <h4 style={{textAlign: "center"}}> Vista <i>Ingresos</i></h4>
                    </section>
                    <img src="/src/assets/proyectos/gestor_presupuestos/21.png" title="Descripción vista ingresos" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/21.png")} alt="Img interfaz sistema 21" loading="lazy"></img>
                    <section className="card card-body mt-3 mb-2">
                        <strong>1. Total de ingresos</strong>
                        <p style={{textAlign: "justify"}}>
                            Muestra el total de ingresos de todas las categorías en general del presupuesto actual. Si se presiona se muestra una gráfica de barras con el total de cada categoría. La gráfica tiene un comportamiento de deslizamiento hacia la derecha en caso de haber varias categorías.
                        </p>
                        <img src="/src/assets/proyectos/gestor_presupuestos/22.jpeg" title="Gráfica total ingresos" className="img-fluid mx-auto d-block border border-dark w-25" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/22.jpeg")} alt="Img interfaz sistema 22" loading="lazy"></img>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>2. Pestañas de categorias</strong>
                        <p style={{textAlign: "justify"}}>
                            En esta sección se encuentran las pestañas para cada categoría de ingresos que se indicó. Al presionar una pestaña se muestran detalles e ingresos de esa categoría. Si las categorías son varias, esta sección se vuelve deslizable.
                            <br></br><br></br>
                            Una vez que se selecciona una categoría, entonces se agregan cuatro elementos más a la sección que lista los ingresos. Uno de ellos es una etiqueta con el total de la categoría y su porcentaje respecto al total de ingresos. El segundo elemento que se agrega es un botón para eliminar dicha categoría si se desea. El tercer elemento es una etiqueta azul que indica el porcentaje de ese ingreso respecto al total de esa categoría. Y el último elemento que se agrega es una barra de porcentaje que ayuda a visualizar que porcentaje del total de ingresos corresponde a esa categoría.
                        </p>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-6">
                                    <img src="/src/assets/proyectos/gestor_presupuestos/23.jpeg" title="Pestaña ingresos 1" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/23.jpeg")} alt="Img interfaz sistema 23" loading="lazy"></img>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <img src="/src/assets/proyectos/gestor_presupuestos/24.jpeg" title="Pestaña ingresos 2" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/24.jpeg")} alt="Img interfaz sistema 24" loading="lazy"></img>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>3. Botones de ordenamiento</strong>
                        <p style={{textAlign: "justify"}}>
                            Aquí se encuentran dos botones para ordenar los ingresos que se muestran. Uno de los botones realiza el ordenamiento segun <i>fecha de registro</i>, <i>monto</i> o <i>nombre</i>; mientras que el otro botón realiza el ordenamiento de forma <i>descendente</i> o <i>ascendente</i>.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>4. Listado de ingresos</strong>
                        <p style={{textAlign: "justify"}}>
                            En esta sección se muestran todos los ingresos listados según la categoría de la pestaña actual. Cada ingreso se muestra en una especie de tarjeta, la cuál, muestra el nombre, la categoría, el monto, y en una etiqueta color verde indica el porcentaje correspondiente del monto de ese ingreso respecto al total de ingresos.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>5. Botones para agregar elementos</strong>
                        <p style={{textAlign: "justify"}}>
                            Esta parte cuenta con dos botones, uno para agregar un nuevo ingreso y otro para agregar una nueva categoria de ingresos.
                        </p>
                    </section>
                </div>
                <div className="px-md-5 mt-5">
                    <section id="seccion_vista_egresos" className="card card-body bg-light mb-3">
                        <h4 style={{textAlign: "center"}}> Vista <i>Egresos</i></h4>
                    </section>
                    <img src="/src/assets/proyectos/gestor_presupuestos/25.png" title="Descripción vista egresos" className="img-fluid mx-auto d-block" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/25.png")} alt="Img interfaz sistema 25" loading="lazy"></img>
                    <section className="card card-body mt-3 mb-2">
                        <strong>1. Total de egresos</strong>
                        <p style={{textAlign: "justify"}}>
                            Muestra el total de egresos de todas las categorías en general del presupuesto actual. Si se presiona se muestra una gráfica de barras con el total de cada categoría. La gráfica tiene un comportamiento de deslizamiento hacia la derecha en caso de haber varias categorías.
                        </p>
                        <img src="/src/assets/proyectos/gestor_presupuestos/26.jpeg" title="Gráfica total egresos" className="img-fluid mx-auto d-block border border-dark w-25" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/26.jpeg")} alt="Img interfaz sistema 26" loading="lazy"></img>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>2. Pestañas de categorias</strong>
                        <p style={{textAlign: "justify"}}>
                            En esta sección se encuentran las pestañas para cada categoría de egresos que se indicó. Al presionar una pestaña se muestran detalles y egresos de esa categoría. Si las categorías son varias, esta sección se vuelve deslizable.
                            <br></br><br></br>
                            Una vez que se selecciona una categoría, entonces se agregan cuatro elementos más a la sección que lista los egresos. Uno de ellos es una etiqueta con el total de la categoría y su porcentaje respecto al total de egresos. El segundo elemento que se agrega es un botón para eliminar dicha categoría si se desea. El tercer elemento es una etiqueta azul que indica el porcentaje de ese egreso respecto al total de esa categoría. Y el último elemento que se agrega es una barra de porcentaje que ayuda a visualizar que porcentaje del total de egresos corresponde a esa categoría.
                        </p>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-6">
                                    <img src="/src/assets/proyectos/gestor_presupuestos/27.jpeg" title="Pestaña egresos 1" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/27.jpeg")} alt="Img interfaz sistema 27" loading="lazy"></img>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <img src="/src/assets/proyectos/gestor_presupuestos/28.jpeg" title="Pestaña egresos 2" className="img-fluid mx-auto d-block mx-5 mt-3 mb-3 border border-dark w-50" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/src/assets/proyectos/gestor_presupuestos/28.jpeg")} alt="Img interfaz sistema 28" loading="lazy"></img>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>3. Botones de ordenamiento</strong>
                        <p style={{textAlign: "justify"}}>
                            Aquí se encuentran dos botones para ordenar los egresos que se muestran. Uno de los botones realiza el ordenamiento segun <i>fecha de registro</i>, <i>monto</i> o <i>nombre</i>; mientras que el otro botón realiza el ordenamiento de forma <i>descendente</i> o <i>ascendente</i>.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>4. Listado de egresos</strong>
                        <p style={{textAlign: "justify"}}>
                            En esta sección se muestran todos los egresos listados según la categoría de la pestaña actual. Cada egreso se muestra en una especie de tarjeta, la cuál, muestra el nombre, la categoría, el monto, y en una etiqueta color rojo indica el porcentaje correspondiente del monto de ese egreso respecto al total de egresos.
                        </p>
                    </section>
                    <section className="card card-body mt-2 mb-2">
                        <strong>5. Botones para agregar elementos</strong>
                        <p style={{textAlign: "justify"}}>
                            Esta parte cuenta con dos botones, uno para agregar un nuevo egreso y otro para agregar una nueva categoria de egresos.
                        </p>
                    </section>
                </div>
                
            </section>
        </>
    );
}

export default Gestor_presupuestos;