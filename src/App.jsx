import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Base from '/src/components/Base';
import Home from '/src/pages/Home';
import Proyectos from '/src/pages/Proyectos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base/>}>
            <Route index element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
