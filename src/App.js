import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Footer from "./comp/Footer"
import Home from "./comp/Home";
import Header from "./comp/Header";
import Skills from "./comp/Skills";

function App() {
  return (
    <Router className='wrapper' basename={process.env.PUBLIC_URL}>
    <Header />
    <Routes>
        <Route path="/" comp = {<Home/>} />
        <Route path="/Skills" comp = {<Skills/>} />
      </Routes>
      <body>
        <Home />
      </body>
      <Footer />
    </Router>
  )
}

export default App;
