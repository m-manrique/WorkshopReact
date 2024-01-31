import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand  as={Link} to="/">Tekus</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">  
        <Nav.Link as={Link} to="/compras">Compras</Nav.Link>      
          <Nav className="me-auto my-2 my-lg-0" navbarScroll >           
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/category/Electronics">Electronics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Furniture">Furniture</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Shoes">Shoes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Miscellaneous">Miscellaneous</NavDropdown.Item>
            </NavDropdown>
          </Nav>          
          <Nav.Link as={Link} to="/Shop">
            <CartWidget/>
          </Nav.Link>                    
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
