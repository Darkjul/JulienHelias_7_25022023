import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* Footer */}
      <Footer/>
    </BrowserRouter>
  );
};
        
export default App;