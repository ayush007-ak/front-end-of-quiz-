import React from 'react'
import { NavLink, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import CssData from './CssData';
import JavaData from './JavaData';
import { Navbar, Navlink ,Container ,Nav } from 'react-bootstrap';

function Test() {
    return (
        <div>


        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Quiz Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/css">CSS</Nav.Link>
          <Nav.Link href="/java">JAVA</Nav.Link>
          <Nav.Link href="/python">PYTHON</Nav.Link>
          <Nav.Link href="/database">DATABASE</Nav.Link>
          <Nav.Link href="/welcome">Welcome</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
         
          
          
        </Nav>
        </Container>
      </Navbar>

        </div>
    )
}

export default Test
