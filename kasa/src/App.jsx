import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Ereur from './page/Ereur';
import Apropos from './page/Apropos';
import Detail from "./page/Detail";
import Navigation from './components/Navigation';
import Fouter from './components/Fouter';

const App = () => {
  return (
   
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<Apropos />} />
        <Route path="/ereur" element={<Ereur />} />
      <Route path="*" element={<Ereur />} />
    </Routes>
    <Fouter />
  </BrowserRouter >
  );
};

export default App;