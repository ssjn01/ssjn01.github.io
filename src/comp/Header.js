import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={Link} to="/"><span id="nav-title">SSJ Portfolio</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/Intro"><span class="nav-content">About me</span></Nav.Link>
              <Nav.Link as={Link} to="/Skills"><span class="nav-content">Skills</span></Nav.Link>
              <Nav.Link as={Link} to="/Project"><span class="nav-content">Project</span></Nav.Link>
              <Nav.Link as={Link} to="/Competition"><span class="nav-content">Competition</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header