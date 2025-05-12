import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Base from '/src/components/Base';
import ScrollToTop from '/src/components/ScrollToTop';
import Home from '/src/pages/Home';
import Proyectos from '/src/pages/Proyectos';
import Chatbot from '/src/pages/proyectos/Chatbot';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Base/>}>
            <Route index element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/proyectos/proyecto_chatbot" element={<Chatbot />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
