import { BrowserRouter as Router, Routes} from "react-router-dom"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Footer from "./comp/Footer"
import Home from "./comp/Home";
import Header from "./comp/Header";

function App() {
  return (
    <Router className='wrapper' basename={process.env.PUBLIC_URL}>
    <Header />
      <main>
        <Routes>
        </Routes>
      </main>
      <body>
        <Home />
      </body>
      <Footer />
    </Router>
  )
}

export default App;
