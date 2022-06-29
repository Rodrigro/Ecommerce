import '../components/Navbar.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/esm/NavLink'
import CartWidget from './CartWidget'

function NavbarMenu() {
  return (
    <Navbar className='nav-menu' bg="primary" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="Inicio">Inicio</Nav.Link>
      <Nav.Link href="Ofertas">Ofertas</Nav.Link>
      <Nav.Link href="Productos">Productos</Nav.Link>
      <Nav.Link href="contacto">Contacto</Nav.Link>
      <Nav.Link> <CartWidget /></Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
    
        
      

      
    
  );
}

export default NavbarMenu;
