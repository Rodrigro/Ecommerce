import '../components/Navbar.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/esm/NavLink'
import CartWidget from './CartWidget'

function NavbarMenu() {
  return (
    <Container>
      <Nav className="me-auto nav_color container-xl contenedor" bg="primary" variant="dark" >
        <NavLink className="links_menu links" href="#">HOME</NavLink>
        <NavLink className="links_menu links" href="#">OFERTAS</NavLink>
        <NavLink className="links_menu links" href="#">ACERCA DE</NavLink>
        <NavLink className="links_menu links" href="#">CONTACTO</NavLink>
        <CartWidget />
      </Nav>
    </Container>
      
    
  );
}

export default NavbarMenu;
