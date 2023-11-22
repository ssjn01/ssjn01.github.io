import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Footer from "./comp/Footer"
import Home from "./comp/Home";
import Header from "./comp/Header";
import Skills from "./comp/Skills";
import SelfIntro from "./comp/SelfIntro"
import Project from "./comp/Project"
import Competition from "./comp/Competiti"
import Specifications from "./comp/Spec"

function App() {
  return (
    <Router className='wrapper' basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Intro" element={<SelfIntro />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Specification" element={<Specifications />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Competition" element={<Competition />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
