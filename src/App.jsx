import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Base from './components/Base';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import Chatbot from './pages/proyectos/Chatbot';
import Gestor_presupuestos from './pages/proyectos/Gestor_presupuestos';
import Guia_videojuego from "./pages/proyectos/Guia_videojuego";
import Prob_partidos from "./pages/proyectos/Prob_partidos";
import Bases_datos from "./pages/proyectos/Bases_datos_sql";
import Recomendador_beb from "./pages/proyectos/Recomendador_beb";
import Compilador_sencillo from "./pages/proyectos/Compilador_sencillo";
import AlgoritmoGenetico_AFD from "./pages/proyectos/AlgoritmoGenetico_AFD";
import Practica_cifrado from "./pages/proyectos/Practica_cifrado";
import Videojuegos from "./pages/proyectos/Videojuegos";
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Base/>}>
            <Route index element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/proyectos/proyecto_chatbot" element={<Chatbot />} />
            <Route path="/proyectos/proyecto_gestor_presupuestos" element={<Gestor_presupuestos />} />
            <Route path="/proyectos/proyecto_guia_videojuego" element={<Guia_videojuego />} />
            <Route path="/proyectos/proyecto_prob_partidos" element={<Prob_partidos />} />
            <Route path="/proyectos/proyecto_bases_datos_sql" element={<Bases_datos />} />
            <Route path="/proyectos/proyecto_recomendador_beb" element={<Recomendador_beb />} />
            <Route path="/proyectos/proyecto_compilador_sencillo" element={<Compilador_sencillo />} />
            <Route path="/proyectos/proyecto_algoritmoGenetico_AFD" element={<AlgoritmoGenetico_AFD />} />
            <Route path="/proyectos/proyecto_practica_cifrado" element={<Practica_cifrado />} />
            <Route path="/proyectos/proyecto_videojuegos" element={<Videojuegos />} />

            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;