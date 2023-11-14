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
import Project2 from "./comp/Project/Project2"
import Competition1 from "./comp/Competition/Competiti1"
import Competition2 from "./comp/Competition/Competiti2"
import Specifications from "./comp/Specifications/Spec"

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
        <Route path="/Project2" element={<Project2 />} />
        <Route path="/Competition1" element={<Competition1 />} />
        <Route path="/Competition2" element={<Competition2 />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
