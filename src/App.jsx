import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection/Pages/HeroSection.jsx";
import ErrorSection from "./HeroSection/Pages/ErrorSection.jsx";
import Contact from "./Navigation/Contact/Contact.jsx";
import Login from "./Auth/Login/Login.jsx"
import About from "./Navigation/About/About.jsx";
import Maps from "./Navigation/Maps/Maps.jsx";
import Register from "./Auth/Register/Register.jsx";

function App() {
  return (
    <BrowserRouter>
    <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/nonfound" element={<ErrorSection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/locationacservme" element={<Maps />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          </main>
    </BrowserRouter>
  );
}

export default App;
