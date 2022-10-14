import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';


const NavbarResponsive = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt='logo' className='logo'></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className={({ isActive }) => isActive ? "Avtive" : "Inactive"} to="/" >
                <Nav.Link href="#home">Home</Nav.Link>
              </NavLink>
              <NavLink className={({ isActive }) => isActive ? "Avtive" : "Inactive"} to="/item" >
                <Nav.Link href="#cervezas">Cervezas</Nav.Link>
              </NavLink>
              <NavLink className={({ isActive }) => isActive ? "Avtive" : "Inactive"} to="/Contacto" >
                <Nav.Link href="#about">Nosotros</Nav.Link>
              </NavLink>
            </Nav>
            <Nav>
              <Link to='/#'>
                <Nav.Link href="#register">Registrarme</Nav.Link>
              </Link>
              <Link to='/#'>
                <Nav.Link href="#login">Ingresar</Nav.Link>
              </Link>
              <Nav.Link href="#">
                <Link to='/#'>
                  <Button variant='secondary'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                  </Button>
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <CartWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
};

export default NavbarResponsive;