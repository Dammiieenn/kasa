import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Ereur from './page/Ereur';
import Apropos from './page/Apropos';
import Detail from "./page/Detail";
import Logement from './components/Logement';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<Apropos />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/Ereur" element={<Ereur />} />
      <Route path="*" element={<Ereur />} />
    </Routes>
  </BrowserRouter >
  );
};

export default App;
