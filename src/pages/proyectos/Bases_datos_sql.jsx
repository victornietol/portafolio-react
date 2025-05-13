import { Helmet } from 'react-helmet-async';
import { useOutletContext } from "react-router-dom";

function Bases_datos_sql() {
    const { setModalSrc, openModal } = useOutletContext();

    const handleImageClick = (url) => {
        setModalSrc(url);
        openModal();
    };

    return (
        <>
            <Helmet>
                <title>Bases de datos SQL | Portafolio</title>
            </Helmet>

            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">Bases de datos SQL</h1>
            </div>

            <div className="container">
                <div className="row">
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light">
                        <div className="px-md-5 text-center">
                            <h3>Tecnologías empleadas</h3>
                            <p>
                                <i className="bi bi-code-slash"></i> SQL
                                <br></br>
                                <i className="bi bi-gear-fill"></i> MySQL 
                            </p>
                        </div>
                    </section>
                    
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light">
                        <div className="px-md-5 text-center">
                            <h3>Repositorios</h3>
                            <p>
                                <i className="bi bi-github"></i>
                                <br></br>
                                1. Base de datos: <a className="text-break w-100" target="_blank" rel="noopener noreferrer" href="https://github.com/victornietol/BasesDeDatos2459/tree/main/Proyecto_final">
                                    Centrales eléctricas
                                </a>
                                <br></br>
                                2. Base de datos: <a className="text-break w-100" target="_blank" rel="noopener noreferrer" href="https://github.com/victornietol/BasesDeDatos2/tree/main/Proyecto_BD2">Gestón académica de Universidad</a>
                                <br></br>
                                3. Base de datos: <a className="text-break w-100" target="_blank" rel="noopener noreferrer" href="https://github.com/victornietol/9no-Semestre/blob/main/SQL/Temas%20Especiales/Proyecto_TE_BD.sql">Cine</a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            
            <section className="card card-body mt-2">
                <div className="px-md-5 text-center">
                    <h3 className="pb-3 pt-3" style={{textAlign: "start"}}>Descripción</h3>
                    <p style={{textAlign: "justify"}}>
                        En esta sección se colocaron algunas de las bases de datos relacionales que he implementado como parte de proyectos académicos. Dichas bases, se modelaron teniendo en cuenta las formas normales para cuidar la integradad de los datos y evitar redundancia. Al final de cada sección correspondiente a una base, incluyo el diagrama entidad-relación de la base de datos y los enlaces a los scripts <i>.sql</i> con la creación de tablas, inserciones, triggers, procedimientos almacenados, funciones y vistas, según sea el caso. Las bases de datos que se muestran corresponden: <a href="#bd_centrales">Centrales électricas</a>, <a href="#bd_universidad">Gestión académica de Universidad</a>, <a href="#bd_cine">Cine</a>.
                    </p>
                </div>
            </section>

            <section id="bd_centrales" className="card card-body mt-3">
                <div className="px-md-5 text-center">
                    <h3 className="pb-4 pt-4" style={{textAlign: "start"}}>1. Base de datos: Centrales électricas</h3>
                    <p style={{textAlign: "justify"}}>
                        El modelo de negocios para esta base de datos corresponde a la administración de la energía eléctrica que se produce en un determinado país. Se cuidó que los campos fueran atómicos, que las tablas tuvieran llaves primarias, que las tablas tuvieran relación bajo la lógica del modelo de negocios con llaves foráneas, y también se definieron tablas catalogo para datos repetitivos como países. Las entidades principales de la base que se plantearon se mencionan a continuación.
                    </p>
                    <h4 style={{textAlign: "start"}}>Entidades</h4>
                    <ul>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Productor</strong>
                                <br></br>
                                Productor básico de electricidad que tiene una razón social y RFC único. Además, pertenece a algunas 
                                de las siguientes categorías: Central Hidroeléctrica, Central Solar, Central Nuclear o Central Térmica. Por último, 
                                su entidad federativa corresponde a la entidad en la que se encuentra dado de alta.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Central</strong>
                                <br></br>
                                Categoría de central a la que pertenecen los productores básicos y solo comprende Central Hidroeléctrica, Central Solar, Central Nuclear o Central Térmica.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Hidroeléctrica</strong>
                                <br></br>
                                Central hidroeléctrica o presa que corresponde a un productor básico existente y que cuenta con una ocupación, capacidad máxima y número de turbinas. 
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Solar</strong>
                                <br></br>
                                Central solar que corresponde a un productor básico existente y que cuenta con una superficie total de paneles solares establecida, una media anual de horas de sol y el tipo, el cual puede ser fotovoltaica o termodinámica.  
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Nuclear</strong>
                                <br></br>
                                Central nuclear que corresponde a un productor básico existente y que cuenta con un numero de rectores contabilizados, un registro del volumen de plutonio consumido y un registro de los residuos nucleares que produce.   
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Térmica</strong>
                                <br></br>
                                Central térmica que corresponde a un productor existente y que cuenta con un registro del número de hornos que posee, un registro del volumen del carbón consumido y otro registro del volumen de gases emitidos.  
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Suministrador</strong>
                                <br></br>
                                Entidad que le vende plutonio a una o varias centrales nucleares.  
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Transportista</strong>
                                <br></br>
                                Empresa de transporte que se encarga transportar mercancía. Además, solo puede hacer un único porte por compra. 
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Porte</strong>
                                <br></br>
                                Transporte de una mercancía realizado por un transportista. 
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Venta</strong>
                                <br></br>
                                Transacción que involucra la compra de plutonio por parte de una central nuclear. Cuenta con un vendedor, un comprador y un transportista. Además, cuenta con el registro de la cantidad de plutonio adquirida. 
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Estación primaria</strong>
                                <br></br>
                                Estación que reciben energía de varios productores básicos y que son cabecera de una o varias redes de distribución.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Red distribución</strong>
                                <br></br>
                                Red que distribuye la energía y es identificada por un número de red. Además, sólo puede contar con una estación primaria como cabecera, está compuesta por una serie de líneas y puede pertenecer a una o varias compañías eléctricas.  
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Compañia eléctrica</strong>
                                <br></br>
                                Compañía de energía eléctrica que tiene la propiedad de una red de distribución y cuenta con un nombre.                        
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Línea</strong>
                                <br></br>
                                Línea eléctrica que pertenece a una red de distribución y se identifica por un número secuencial de determinada longitud dentro del número de red. Por lo menos abastece a dos subestaciones.                       
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Subestación</strong>
                                <br></br>
                                Subestación de energía eléctrica que es abastecida por una sola línea y distribuye a una o varias zonas de servicio.                       
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Zona servicio</strong>
                                <br></br>
                                Área de determinada extensión que puede ser atendida por más de una subestación y que pertenece sólo a una provincia.                       
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Consumidor</strong>
                                <br></br>
                                Categoría de consumidores finales que pertenece a una zona de servicio del que se tiene un registro del consumo medio y el número de consumidores finales de dicha categoría.                       
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>País</strong>
                                <br></br>
                                Determinada área geográfica al que pertenece uno o varios suministradores.                      
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Entidad federativa</strong>
                                <br></br>
                                Territorio delimitado también llamado Estado, que pertenece a un país y que puede contar con varios productores básicos.                       
                            </p>
                        </li>
                    </ul>
                    <div className="mt-4" style={{textAlign: "start"}}>
                        <h4>Scripts</h4>
                        <div>
                            <ul>
                                <li>
                                    Creación de tablas, triggers y funciones: <a target="_blank" rel="noopener noreferrer" href="https://github.com/victornietol/BasesDeDatos2459/blob/main/Proyecto_final/Proyecto_BD1_2459.sql">Ver Script</a> 
                                </li>
                                <li>
                                    Inserciones de datos prueba: <a target="_blank" rel="noopener noreferrer" href="https://github.com/victornietol/BasesDeDatos2459/blob/main/Proyecto_final/Inserciones_Proyecto.sql">Ver Script</a>
                                </li>
                                <li>
                                    Algunas consultas y vistas realizadas: <a target="_blank" rel="noopener noreferrer" href="https://github.com/victornietol/BasesDeDatos2459/blob/main/Proyecto_final/Consultas_Proyecto.sql">Ver Script</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="/proyectos/bases_datos_sql/DER-BD-1.png" title="BD Centrales électricas" className="img-fluid mx-auto d-block mt-4 mb-3 border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/bases_datos_sql/DER-BD-1.png")} alt="Img DER-BD-1" loading="lazy"></img>
                </div>
            </section>

            <section id="bd_universidad" className="card card-body mt-3">
                <div className="px-md-5 text-center">
                    <h3 className="pb-4 pt-4" style={{textAlign: "start"}}>2. Base de datos: Gestión Académica de Universidad</h3>
                    <p style={{textAlign: "justify"}}>
                        Este proyecto académico, correspondiente al diseño de la base de datos para una universidad, se realizó con base en las relaciones entre las distintas entidades propuestas para el modelo de negocios y con el objetivo de mejorar la administración de los procesos administrativos y llevar un control sobre los estudiantes inscritos, profesores, cursos, carreras, calificaciones, etc. La base consta principalmente de 12 tablas con datos correspondientes al modelo de negocios (que en este caso es una universidad). Y 2 tablas extra solicitas en los requerimientos del proyecto planteado por el profesor, correspondientes a la administración de la base de datos en donde una de ellas cumple el objetivo de almacenar los movimientos relacionados con inserciones, actualizaciones y eliminaciones en la base, y la otra tabla tiene el objetivo de almacenar los usuarios que manipulan la base, esto, con el objetivo de poner en práctica ciertos triggers al manipular ciertas tablas.
                    </p>
                    <h4 style={{textAlign: "start"}}>Entidades</h4>
                    <ul>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Carrera</strong>
                                <br></br>
                                La tabla <i>carrera</i> contiene todas carreras de la universidad y funciona como un catálogo para evitar redundancia en los datos, por lo tanto, no se pueden repetir nombres de carreras. El <i>id</i> de esta tabla viaja como llave foránea a la tabla <i>estudiante</i>. 
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Dirección</strong>
                                <br></br>
                                La tabla <i>direccion</i> contiene las direcciones de los profesores y estudiantes para facilitar el registro de distintas direcciones y poder indicar que mas de una persona puede tener el mismo domicilio, por lo tanto, el <i>id</i> de esta tabla es llave foránea en las tablas <i>profesor</i> y <i>estudiante</i>. 
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Estudiante</strong>
                                <br></br>
                                La tabla <i>estudiante</i> almacena los datos relacionados a los estudiantes y su información personal. Contiene los campos <i>matricula</i> y curp que no aceptan valores repetidos para poder llevar un control de los estudiantes en la universidad y evitar duplicidad de estudiantes.El <i>id</i> de esta tabla viaja como llave foránea a la tabla <i>inscrito</i> para controlar las inscripciones. 
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Profesor</strong>
                                <br></br>
                                La tabla <i>profesor</i> cuenta con los datos personales de los profesores y se evita duplicidad de profesores con el campo <i>curp</i>, el cual, no puede contener valores repetidos. El <i>id</i> de esta tabla viaja como llave foránea a la tabla <i>cursos</i> para llevar un control de los cursos impartidos en la universidad. 
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Materia</strong>
                                <br></br>
                                La tabla <i>materia</i> corresponde a un catalogo de materias para optimizar el control de las materias disponibles en la universidad. Evita la duplicidad de materias al no aceptar valores repetidos. El <i>id</i> de esta tabla es una llave foránea en la tabla <i>cursos</i>.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Ciclo</strong>
                                <br></br>
                                La tabla <i>ciclos</i> guarda los ciclos registrados en la universidad y funciona como un catalogo para evitar duplicidad de datos y poder referenciar determinado ciclo al añadir algún curso. Por lo tanto, no acepto datos duplicados y el id de esta tabla es llave foránea en <i>cursos</i>. 
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Grupo</strong>
                                <br></br>
                                La tabla grupos almacena la denominación de todos los grupos disponibles en la universidad y también funciona como catalogo para evitar duplicidad de datos y facilitar la asignación de grupos dependiendo de su disponibilidad. El <i>id</i> de esta tabla es llave foránea en la tabla <i>cursos</i>.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Horario</strong>
                                <br></br>
                                La tabla <i>horario</i> contiene una hora de inicio, una hora de finalización y los días de la semana correspondientes a un horario disponible para impartir algún curso. Del mismo modo que tablas anteriores, funciona como catalogo para evitar duplicidad de horarios y facilitar la asignación de horas y días a los cursos, lo que se refleja en una agilizar el proceso de asignar un horario disponible a un curso. El <i>id</i> de esta tabla es llave foránea en la tabla <i>cursos</i>. 
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Salon</strong>
                                <br></br>
                                La tabla <i>salones</i> almacena todos los salones disponibles en la universidad con el objetivo de facilitar la asignación de un salón a un curso en un horario disponible. Por lo tanto, funge como un catalogo que no acepta valores duplicados y el <i>id</i> de esta tabla es una llave foránea en la tabla <i>cursos</i>. Con esto se logra evitar duplicidad de datos y mejor manejo en la asignación de salones a los cursos basándose en su disponibilidad. 
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Curso</strong>
                                <br></br>
                                La tabla <i>cursos</i> registra todos los cursos con los que cuenta la universidad y que los alumnos pueden inscribir, por lo tanto, esto se logra recibiendo las llaves primarias de las tablas <i>profesor, materia, ciclos, grupos, horario,</i> y <i>salones</i>. Para evitar duplicidad al registrar un curso se asignó una llave única que la compone los campos correspondientes a las llaves foráneas, además, se cuenta con un campo <i>clave_curso</i> que no acepta datos duplicados para facilitar el manejo e identificación de los cursos disponibles. Por otro lado, para agilizar la asignación de horarios se estableció otra llave única compuesta correspondiente a los campos <i>fk_salones</i> y <i>fk_horario</i> con el objetivo de no empalmar horarios en el mismo salón.  
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Inscrito</strong>
                                <br></br>
                                La tabla <i>inscrito</i> contiene los cursos que han inscrito los estudiantes, por lo tanto, recibe como llaves foráneas los <i>id</i> de la tablas <i>estudiante</i> y <i>cursos</i>. Además, se estableció una llave única compuesta con las llaves foráneas para evitar que un estudiante se inscriba dos veces en el mismo curso.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Calificación</strong>
                                <br></br>
                                La tabla <i>calificaciones</i> ayuda a llevar el control de las calificaciones de los cursos inscritos de los estudiantes y con ello facilitar la asignación de las mismas. Recibe como llave foránea el id de la tabla <i>inscrito</i>. Asimismo, se definió una llave única con la llave foránea para evitar que se asignen dos calificaciones distintas al mismo curso. 
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Bitacora</strong>
                                <br></br>
                                La tabla <i>bitacora</i> registra las inserciones, actualizaciones y eliminaciones de datos en a base de datos con el objetivo de tener una mejor administración y control de la base de datos. Esto se logra mediante triggers, los cuales insertan la fecha, el usuario, la tabla, la sentencia y la acción que se realizo en la base.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Usuario BD</strong>
                                <br></br>
                                La tabla <i>usuarios_BD</i> contiene los usuarios registrados en la base que pueden realizar distintas acciones dependiendo de su nivel de privilegio (admin, lector). Esto para facilitar el control de usuarios y accesos. 
                            </p>
                        </li>
                    </ul>
                    <div className="mt-4">
                        <h4 style={{textAlign: "start"}}>Triggers</h4>
                        <p style={{textAlign: "justify"}}>
                            Se crearon triggers del tipo <i>before insert, before update</i> y <i>after delete</i> en cada una de las tablas de la base a excepción de la tabla bitácora con el objetivo de realizar un manejo y validación de los datos introducidos, lo cual, se ve reflejado en una mejora de la calidad de los datos. También se implementaron con la misión de tener un registro automático de las operaciones que se realizan en la base de datos y mejorar el control.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h4 style={{textAlign: "start"}}>Procedimientos almacenados</h4>
                        <p style={{textAlign: "justify"}}>
                            Los procedimientos almacenados realizados tienen el objetivo de agilizar acciones en la base de datos como inscribir cursos por parte un alumno, automatizar la asignación de horarios en salones libres para distintos cursos, inserciones de profesores y estudiantes, etc. Por lo tanto, se definieron los siguientes 14 procedimientos con funciones específicas: 
                        </p>
                        <ul>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>inscripcion_curso</strong></i>
                                    <br></br>
                                    Procedimiento para inscribir o retirar cursos a los que se inscriben los estudiantes. Se debe ingresar la acción a realizar (inscribir o retirar), la clave del curso y la matricula del estudiante.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>asignar_calificacion</strong></i>
                                    <br></br>
                                    Procedimiento para inscribir o retirar cursos a los que se inscriben los estudiantes. Se debe ingresar la acción a realizar (inscribir o retirar), la clave del curso y la matricula del estudiante.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>horario_estudiante</strong></i>
                                    <br></br>
                                    Procedimiento para mostrar el horario con las materias inscritas del estudiante indicado. Solo se ingresa la matricula del estudiante.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>crear_curso_auto</strong></i>
                                    <br></br>
                                    Procedimiento para crear un curso indicando el profesor, materia, grupo y ciclo, el salón y hora se asigna automáticamente.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>insertar_estudiante</strong></i>
                                    <br></br>
                                    Procedimiento para insertar un nuevo estudiante, recibe como parámetros los campos de la tabla estudiante y la tabla dirección. Si la dirección no existe en la tabla dirección entonces se inserta en su respectiva tabla.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>insertar_profesor</strong></i>
                                    <br></br>
                                    Procedimiento para insertar un nuevo profesor, recibe como parámetros los campos de la tabla profesor y la tabla dirección. Si la dirección no existe en la tabla dirección entonces se inserta en su respectiva tabla.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>insertar_curso_manual</strong></i>
                                    <br></br>
                                    Procedimiento para agregar un curso ingresando el nombre completo del profesor, nombre de la materia, el ciclo, el grupo, la hora de inicio, la hora de termino, los días, y el salón. Estos datos ingresados ya deben estar en sus respectivas tablas en la BD, de lo contrario se mostrará un error.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>eliminar_estudiante</strong></i>
                                    <br></br>
                                    Procedimiento para eliminar un estudiante de la tabla estudiantes indicando solo su matrícula. Al eliminarlo se indica cuantos cursos inscritos tenía.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>eliminar_profesor</strong></i>
                                    <br></br>
                                    Procedimiento para eliminar un profesor de la tabla profesores indicando su nombre completo. Al eliminarlo se indica cuantos cursos impartía.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>mostrar_bitacora</strong></i>
                                    <br></br>
                                    Procedimiento para mostrar los registros de la bitácora según la fecha y la sentencia indicada. Si se ingresa null en ambos campos se muestran todos los registros.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>actualizar_calificacion</strong></i>
                                    <br></br>
                                    Procedimiento para actualizar una calificación de un curso inscrito por un estudiante.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>calificaciones_estudiante</strong></i>
                                    <br></br>
                                    Procedimiento para mostrar las calificaciones del estudiante que se introduce como parámetro.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>crear_usuario_BD</strong></i>
                                    <br></br>
                                    Procedimiento almacenado para crear un nuevo usuario para administrar la BD o solo visualizar datos dependiendo el privilegio que se introduzca. Solo existe los tipos de privilegio "admin" y "lector".
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>eliminar_usuario_BD</strong></i>
                                    <br></br>
                                    Procedimiento almacenado para crear un nuevo usuario para administrar la BD o solo visualizar datos dependiendo el privilegio que se introduzca. Solo existe los tipos de privilegio "admin" y "lector".
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h4 style={{textAlign: "start"}}>Vistas</h4>
                        <p style={{textAlign: "justify"}}>
                            Se crearon 13 vistas para agilizar consultas frecuentes para agilizar la visualización de ciertos datos. Dichas vistas son las siguientes:
                        </p>
                        <ul>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>cursos_lunes, cursos_martes, cursos_miercoles, cursos_jueves, cursos_viernes, cursos_sabado</strong></i>
                                    <br></br>
                                    Vistas que muestran los cursos que se dan en días de la semana específicos.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>numero_cursos_profesor</strong></i>
                                    <br></br>
                                    Vista que cuenta cuantos cursos tienen los profesores.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>numero_cursos_estudiante</strong></i>
                                    <br></br>
                                    Vista que cuenta cuantos cursos inscritos tienen los alumnos y muestra el promedio de sus calificaciones.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>estudiantes_materia</strong></i>
                                    <br></br>
                                    Vista que muestra cuantos estudiantes hay por materia.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>estudiantes_carrera</strong></i>
                                    <br></br>
                                    Vista que muestra cuantos estudiantes hay por carrera.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>estudiantes_grupo</strong></i>
                                    <br></br>
                                    Vista que muestra cuantos estudiantes hay por grupo.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>total_estudiantes</strong></i>
                                    <br></br>
                                    Vista que cuenta los estudiantes que hay en la base de datos.
                                </p>
                            </li>
                            <li>
                                <p style={{textAlign: "justify"}}>
                                    <i><strong>total_profesores</strong></i>
                                    <br></br>
                                    Vista que cuenta los profesores que hay en la base de datos.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4" style={{textAlign: "start"}}>
                        <h4>Scripts</h4>
                        <div>
                            <ul>
                                <li>
                                    Creación de tablas, triggers: <a href="https://github.com/victornietol/BasesDeDatos2/blob/main/Proyecto_BD2/1_CreacionTablas_y_Triggers_BD.sql" target="_blank" rel="noopener noreferrer">Ver Script</a> 
                                </li>
                                <li>
                                    Inserciones de datos prueba: <a href="https://github.com/victornietol/BasesDeDatos2/blob/main/Proyecto_BD2/2_Inserciones_BD.sql" target="_blank" rel="noopener noreferrer">Ver Script</a>
                                </li>
                                <li>
                                    Procedimientos almacenados: <a href="https://github.com/victornietol/BasesDeDatos2/blob/main/Proyecto_BD2/3_Procedimientos_Almacenados_BD.sql" target="_blank" rel="noopener noreferrer">Ver Script</a>
                                </li>
                                <li>
                                    Vistas: <a href="https://github.com/victornietol/BasesDeDatos2/blob/main/Proyecto_BD2/4_Vistas_BD.sql" target="_blank" rel="noopener noreferrer">Ver Script</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="/proyectos/bases_datos_sql/DER-BD-2.png" title="BD Centrales électricas" className="img-fluid mx-auto d-block mt-4 mb-3 border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/bases_datos_sql/DER-BD-2.png")} alt="Img DER-BD-1" loading="lazy"></img>
                </div>
            </section>

            <section id="bd_cine" className="card card-body mt-3">
                <div className="px-md-5 text-center">
                    <h3 className="pb-4 pt-4" style={{textAlign: "start"}}>3. Base de datos: Cine</h3>
                    <p style={{textAlign: "justify"}}>
                        Para esta ocasión, se solicitó como proyecto académico de la materia Temas Especiales de Bases de Datos, realizar un base SQL que debe estar normalizada para cuidar la integridad y evitar redundancia en los datos, con el fin de gestionar un cine respecto a los boletos, funciones, clientes, salas, etc., de una empresa. Por lo tanto, se definió un modelo con 26 entidades, entre las cuales, algunas tablas funcionan como catálogos para datos que son repetitivos y no van a cambiar, tales como, <i>tipo_sala</i>, <i>clasificación</i>, <i>país</i>, <i>categoría</i>, entre otras. Por consecuencia, se buscó cuidar que los campos  fueran atómicos, las tablas contaran con llaves primarias, que las tablas tuvieran relación entre ellas como entidades bajo la lógica del modelo de negocio con llaves foráneas, y que, como se mencionó anteriormente, los campos que pudieran repetirse con frecuencia como los son países, sucursal, etc., entonces terminaran siendo tablas catálago. Con fin demostrativo, en esta ocasión se generó el script <i>.sql</i> a partir del modelo entidad-relación generado en MySQL Workbench aplicando forward engineering.
                    </p>
                    <h4 style={{textAlign: "start"}}>Entidades</h4>
                    <ul>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Actor</strong>
                                <br></br>
                                Persona que participa en una o varias películas.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Actua</strong>
                                <br></br>
                                Tabla de relación entre <i>Actor</i> y <i>Pelicula</i>.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Asiento</strong>
                                <br></br>
                                Información del asiento de una sala.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Boleto</strong>
                                <br></br>
                                Boletos únicos que contienen información sobre el mismo.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Categoría</strong>
                                <br></br>
                                Categoría a la que puede pertenecer una película.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Clasificación</strong>
                                <br></br>
                                Clasificación de una película según la edad permitida.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Cliente</strong>
                                <br></br>
                                Cliente único del cine.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Compras_boletos</strong>
                                <br></br>
                                Tabla de relación entre <i>Cliente</i> y <i>Boleto</i>.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Delegación</strong>
                                <br></br>
                                Delegación correspondiente a una o varías sucursales, es una tabla catálogo. 
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Dirección</strong>
                                <br></br>
                                Tabla que almacena direcciones, los campos son atómicos.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Director</strong>
                                <br></br>
                                Persona que dirige una película.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Dirige</strong>
                                <br></br>
                                Tabla de relación entre <i>Director</i> y <i>Película</i>.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Estado</strong>
                                <br></br>
                                Estado que puede tener una o varías delegaciones, es una tabla catálogo.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Fila_asiento</strong>
                                <br></br>
                                Fila a la que pertenece un asiento, es una tabla catálogo.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Función</strong>
                                <br></br>
                                Tabla con la información correspondiente de una función de una película. Contiene campos como llaves foráneas de <i>Película</i>, <i>Idioma</i>, <i>Tipo_proyección</i>, <i>Sala</i>.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Idioma</strong>
                                <br></br>
                                Idioma de una película, es una tabla catálogo.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>País</strong>
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Pelicula_categoría</strong>
                                <br></br>
                                Tabla de relación entre <i>Película</i> y <i>Categoría</i>.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Sala</strong>
                                <br></br>
                                Sala que pertenece a una sucursal.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Sucursal</strong>
                                <br></br>
                                Recinto que tiene salas para la proyección de películas.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Tipo_asiento</strong>
                                <br></br>
                                Tabla catálogo para el tipo de asiento.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Tipo_boleto</strong>
                                <br></br>
                                Tabla catálogo para el tipo de boleto.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Tipo_cliente</strong>
                                <br></br>
                                Tabla catálogo para el tipo de cliente.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Tipo_proyección</strong>
                                <br></br>
                                Tabla catálogo para el tipo de proyección.
                            </p>
                        </li>
                        <li>
                            <p style={{textAlign: "justify"}}>
                                <strong>Tipo_sala</strong>
                                <br></br>
                                Tabla catálogo para el tipo de sala.
                            </p>
                        </li>
                    </ul>
                    <div className="mt-4" style={{textAlign: "start"}}>
                        <h4>Scripts</h4>
                        <div>
                            <ul>
                                <li>
                                    Creación de tablas: <a href="https://github.com/victornietol/9no-Semestre/blob/main/SQL/Temas%20Especiales/Proyecto_TE_BD.sql" target="_blank" rel="noopener noreferrer">Ver Script</a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="/proyectos/bases_datos_sql/DER-BD-3.png" title="BD Centrales électricas" className="img-fluid mx-auto d-block mt-4 mb-3 border border-dark" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/bases_datos_sql/DER-BD-3.png")} alt="Img DER-BD-1" loading="lazy"></img>
                </div>
            </section>
        </>
    );
}

export default Bases_datos_sql;