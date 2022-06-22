import '../components/Navbar.css'
//mport Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/esm/NavLink'
import CartWidget from './CartWidget'

function NavbarMenu() {
  return (
    <Container>
      <Nav className="me-auto container-xl contenedor" bg="primary" variant="dark" >
        <NavLink className="links_menu" href="#">Home</NavLink>
        <NavLink className="links_menu" href="#">Home</NavLink>
        <NavLink className="links_menu" href="#">Features</NavLink>
        <NavLink className="links_menu" href="#">Pricing</NavLink>
        <CartWidget />
      </Nav>
    </Container>
      
    
  );
}

export default NavbarMenu;
