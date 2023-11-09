import { BrowserRouter as Router } from "react-router-dom"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
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
            <div class="content-title">Education</div>
            <div class="education-item">
              <div class="education-item-title">
                가천대학교 컴퓨터공학부(컴퓨터공학전공)
              </div>
              <div class="education-item-content">
                2020.03 ~ 
              </div>
              <div class="education-item-title">
                설화고등학교
              </div>
              <div class="education-item-content">
                2017.03 ~ 2020.02 
              </div>
              <div class="education-item-title">
                배방중학교
              </div>
              <div class="education-item-content">
                2014.03 ~ 2017.02 
              </div>
              <div class="education-item-title">
                배방초등학교
              </div>
              <div class="education-item-content">
                2008.03 ~ 2014.02
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div id="skills">
          <div class="content-item">
            <div class="content-title">Skills</div>
            <div class="education-item">
              <table>
                <tr><td><img src="/image/html.svg" alt="html"/></td>
                <td><img src="/image/css.svg" alt="css"/></td>
                <td><img src="/image/node.svg" alt="node"/></td>
                </tr>
                <br/>
                <tr><td><img src="/image/firebase.svg" alt="firebase"/></td>
                <td><img src="/image/amazon.svg" alt="amazon"/></td>
                <td><img src="/image/python.svg" alt="python"/></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      </body>
      <footer expand="lg" className="bg-body-tertiary">
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <h1 class="text-black font-weight-light text-capitalize p-3">SSJ Porfolio</h1>
              <p class="text-black py-4 m-0">&copy;Copyright 2023 - Made by SSJ</p>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  )
}

export default App;
