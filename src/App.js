// Import des éléments nécéssaires au fonctionnement de App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Fiche from "./pages/Fiche/Fiche";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      {/* Import du Header sur chaque page du site */}
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements/:id" element={<Fiche />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* Import du Footer sur chaque page du site */}
      <Footer/>
    </BrowserRouter>
  );
};
        
export default App;