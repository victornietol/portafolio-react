import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Base from '/src/components/Base';
import Home from '/src/pages/Home';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base/>}>
            <Route index element={<Home />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
