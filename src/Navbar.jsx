import React from 'react';
import { Nav, Navbar,Container  } from 'react-bootstrap';
// import styled from 'styled-components';

// const Styles = styled.div`
//   .navbar {
//     background-color: #222;
//   }

//   a, .navbar-brand, .navbar-nav .nav-link {
//     color: #bbb;

//     &:hover {
//       color: white;
//     }
//   }
// `;

export const NavigationBar = () => (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">Code Life</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
)