import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import './Header.css'; // Create and import a CSS file for hover effects

const Header = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'black' }}>
      <Navbar.Brand href="#home" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', 
        marginLeft :"4rem"
       }}>
        Uber
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav>
          <Nav.Link href="#ride" style={{ color: '#ffffff', marginRight: '1rem' }} className="nav-link-hover">Ride</Nav.Link>
          <Nav.Link href="#drive" style={{ color: '#ffffff', marginRight: '1rem' }} className="nav-link-hover">Drive</Nav.Link>
          <Nav.Link href="#business" style={{ color: '#ffffff', marginRight: '1rem' }} className="nav-link-hover">Business</Nav.Link>
          <Nav.Link href="#about" style={{ color: '#ffffff', marginRight: '1rem' }} className="nav-link-hover">
            About <span style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>^</span>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#help" style={{ color: '#ffffff', marginRight: '1rem' }} className="nav-link-hover">Help</Nav.Link>
          <Nav.Link href="#login" style={{ color: '#ffffff', marginRight: '1rem' }} className="nav-link-hover">Login</Nav.Link>
          <Button variant="outline-light" style={{ marginLeft: '1rem', marginRight :"4rem" }}>
            Sign Up
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
