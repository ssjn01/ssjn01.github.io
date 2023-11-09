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
          <Navbar.Brand href="#">SSJ Porfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#Intro">About me</Nav.Link>
              <Nav.Link href="#Skills">Skills</Nav.Link>
              <NavDropdown title="Project" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#Project1">Project1</NavDropdown.Item>
                <NavDropdown.Item href="#Project2">Project2
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Competition" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#Competition1">Competition1</NavDropdown.Item>
                <NavDropdown.Item href="#Competition2">Competition2
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
