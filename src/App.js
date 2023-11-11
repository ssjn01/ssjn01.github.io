import { BrowserRouter as Router } from "react-router-dom"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Footer from "./comp/Footer"
import Title from "./comp/Title"
import Skills from "./comp/Skills";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <Router className='wrapper' basename={process.env.PUBLIC_URL}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#"><span id="nav-title">SSJ Portfolio</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#Intro"><span class="nav-content">About me</span></Nav.Link>
              <Nav.Link href="#Skills"><span class="nav-content">Skills</span></Nav.Link>
              <NavDropdown title="Project" style={{fontSize:'20px'}} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#Project1"><span class="nav-content">Project1</span></NavDropdown.Item>
                <NavDropdown.Item href="#Project2"><span class="nav-content">Project2</span></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Competition" style={{fontSize:'20px'}} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#Competition1"><span class="nav-content">Competition1</span></NavDropdown.Item>
                <NavDropdown.Item href="#Competition2"><span class="nav-content">Competition2</span>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <body>
      <header>
        <img src="/image/me.png" alt="나의 사진" id="profile"/>
        <span id="title"><span id="keyWord">"매일 발전하는 개발자"</span><br/>
        서상준입니다.</span>
      </header>
      <div id="content">
        <div id="Intro">
          <div class="content-item">
            <Title />
          </div>
        </div>
        <div></div>
        <div id="Skills">
          <div class="content-item">
            < Skills />
          </div>
        </div>
      </div>
      </body>
      <Footer />
    </Router>
  )
}

export default App;
