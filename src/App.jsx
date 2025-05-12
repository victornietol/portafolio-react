import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Base from './components/Base';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import Chatbot from './pages/proyectos/Chatbot';
import Contacto from './pages/Contacto';

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
            

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
