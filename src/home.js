import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import cart from "./images/cart.png";

import Category from "./Component/Category";

function Home() {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        <Button>cart</Button>
      </Navbar> */}

      <div className="banner">
        <div className="header">NIKKU FOOD SERVICE</div>
        <div className="search">
          <input placeholder="Search..." />
          <button>Go</button>
        </div>
        <button type="button" class="btn btn-primary">
          <img src={cart} alt="cart" />
          <span>0</span>
        </button>
      </div>
      <Category />
    </>
  );
}

export default Home;
