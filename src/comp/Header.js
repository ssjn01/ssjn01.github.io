import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
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
              <NavDropdown title="Competition" style={{ fontSize: '20px' }} id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/Competition1"><span class="nav-content">Competition1</span></NavDropdown.Item>
                <NavDropdown.Item as={Link} to  ="/Competition2"><span class="nav-content">Competition2</span>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header