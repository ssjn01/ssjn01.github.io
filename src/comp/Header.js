import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/"><span id="nav-title">SSJ Portfolio</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/Intro"><span class="nav-content">About me</span></Nav.Link>
              <Nav.Link href="/Skills"><span class="nav-content">Skills</span></Nav.Link>
              <Nav.Link href="/Specification"><span class="nav-content">Specification</span></Nav.Link>
              <NavDropdown title="Project" style={{ fontSize: '20px' }} id="navbarScrollingDropdown">
                <NavDropdown.Item href="/Project1"><span class="nav-content">Project1</span></NavDropdown.Item>
                <NavDropdown.Item href="/Project2"><span class="nav-content">Project2</span></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Competition" style={{ fontSize: '20px' }} id="navbarScrollingDropdown">
                <NavDropdown.Item href="/Competition1"><span class="nav-content">Competition1</span></NavDropdown.Item>
                <NavDropdown.Item href="/Competition2"><span class="nav-content">Competition2</span>
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