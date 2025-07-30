import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import '../../assets/CSS/style.scss'; 
import Logo from '../../assets/images/Vector.png'



const Header = () => {
  return (
  <header>
    <Navbar expand="lg" className="custom-navbar py-3">
        {/* Brand */}
        <Navbar.Brand href="/" className="brand text-white fw-bold d-flex align-items-center  gap-2">
          <img src={Logo} alt="Logo" style={{ width: '30px', height: '30px' }} />
          <span >WiseConsult</span>
        </Navbar.Brand>


        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto dash-nav">
            <Nav.Link href="/" className="dash-link text-white">Home</Nav.Link>
            <Nav.Link href="/pricing" className="dash-link text-white">Pricing</Nav.Link>
            <Nav.Link href="#" className="dash-link text-white">Blogs</Nav.Link>
            <Nav.Link href="/about" className="dash-link text-white">About Us</Nav.Link>
            <Nav.Link href="#" className="dash-link text-white">Contact</Nav.Link>
           </Nav>

        </Navbar.Collapse>

        {/* Right Button */}
        <div className="ms-auto d-none d-lg-block">
          <a href="/" className="btn-secondary" variant="outline-light"> Get Started</a>
        </div>
    </Navbar>
  </header>
  );
}

export default Header