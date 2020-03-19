import React, { Component } from 'react';
import{Nav,Navbar} from 'react-bootstrap';

 class Menu extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">FX-PROFESSIONALS</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">HOME </Nav.Link>
      <Nav.Link href="/pack">PACKAGES</Nav.Link>
      <Nav.Link href="FAQ">FAQ'S</Nav.Link>

    </Nav>
    <Nav>
     
      <Nav.Link  href="/Contact">
        CONTACT
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}

export default Menu;
