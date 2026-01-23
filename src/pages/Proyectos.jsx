import { Helmet } from 'react-helmet-async';
import { NavLink } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import Section_Chatbot from '../components/projects_sections/Section_Chatbot';
import Section_GestionBib from '../components/projects_sections/Section_GestionBib';
import Section_GestorPresup from '../components/projects_sections/Section_GestorPresup';
import Section_GuiaVideojuego from '../components/projects_sections/Section_GuiaVideojuego';
import Section_Probabilidades from '../components/projects_sections/Section_Probabilidades';
import Section_BasesDatos from '../components/projects_sections/Section_BasesDatos';
import Section_Recomendaciones from '../components/projects_sections/Section_Recomendaciones';
import Section_Compilador from '../components/projects_sections/Section_Compilador';
import Section_AlgoritmoGen from '../components/projects_sections/Section_AlgoritmoGen';
import Section_PracticaCifrado from '../components/projects_sections/Section_PracticaCifrado';
import Section_UbicacionMetro from '../components/projects_sections/Section_UbicacionMetro';
import Section_Videojuegos from '../components/projects_sections/Section_Videojuegos';

function Proyectos() {
    const { setModalSrc, openModal } = useOutletContext();

    const handleImageClick = (url) => {
        setModalSrc(url);
        openModal();
    };

    return (
        <>
            <Helmet>
                <title>Proyectos | Portafolio</title>
            </Helmet>

            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">
                    <span className="letra-hover-efecto">P</span><span className="letra-hover-efecto">r</span><span className="letra-hover-efecto">o</span><span className="letra-hover-efecto">y</span><span className="letra-hover-efecto">e</span><span className="letra-hover-efecto">c</span><span className="letra-hover-efecto">t</span><span className="letra-hover-efecto">o</span><span className="letra-hover-efecto">s</span>
                </h1>
            </div>

            <section className="card card-body card-borde pt-4 m-2 bg-light">
                <p style={{textAlign: "center"}}>
                    Algunos de los proyectos académicos y personales que he realizado son los siguientes.
                </p>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        
                        <Section_Chatbot handleImageClick={handleImageClick} />

                        <Section_GestionBib handleImageClick={handleImageClick} />

                        <Section_GestorPresup handleImageClick={handleImageClick} />

                        <Section_GuiaVideojuego handleImageClick={handleImageClick} />
                        
                        <Section_Probabilidades handleImageClick={handleImageClick} />

                        <Section_BasesDatos handleImageClick={handleImageClick} />

                        <Section_Recomendaciones handleImageClick={handleImageClick} />
                        
                        <Section_Compilador handleImageClick={handleImageClick} />

                        <Section_AlgoritmoGen handleImageClick={handleImageClick} />

                        <Section_PracticaCifrado handleImageClick={handleImageClick} />

                        <Section_UbicacionMetro handleImageClick={handleImageClick} />

                        <Section_Videojuegos handleImageClick={handleImageClick} />

                    </div>
                </div>
            </section>
        </>
    );
}

export default Proyectos;