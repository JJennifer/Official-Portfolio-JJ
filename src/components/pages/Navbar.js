import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';


export default function NavTabs({ currentPage, handlePageChange }) {
    return (
      <>
      <Navbar bg='pink' expand='lg'>
        <Container>
        <Navbar.Brand
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
        </Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='collapse'>
        <Nav className='me-auto'>
        <Nav.Link className="nav-item list me-auto mb-2 mb-lg-0">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </Nav.Link>
        <Nav.Link className="nav-item list mb-3 mb-lg-4">
          <a
            href="#Projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </Nav.Link>
        <Nav.Link className="nav-item list me-auto mb-2 mb-lg-0">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
    );
  }
  
