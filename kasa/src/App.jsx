import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Ereur from './page/Ereur';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ereur" element={<Ereur />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter >
  );
};

export default App;
