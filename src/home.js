import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import banner from "./images/banner.jpg";

import Category from "./Component/Category";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        <Button>cart</Button>
      </Navbar>
      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>
      <Category />
    </>
  );
}

export default Home;
