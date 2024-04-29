import React from 'react'
import './nav.css'
import './../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Navbar, NavDropdown, Nav, Image} from 'react-bootstrap'
import CarolinesLogo from './PolachekLogo.png'

function NavBar() {
  return (
    <Container>
      <Row className='nav-navBar'>
        <Col lg={2} className='nav-col'>
          <a href="/"><img src={CarolinesLogo} alt="Carolines Logo" /></a>
        </Col>
        <Col lg={8} className='lancelot nav-col medium-size'>
          <a href="">Tops</a>
          <a href="">Bottoms</a>
          <a href="">Shoes</a>
          <a href="">Accesories</a>
        </Col>
        <Col lg={2} className='nav-col small-size'>
          <a href="/SignIn">Sign in</a> 
          <a href="/SignUp">Sign up</a>
        </Col>
      </Row>
    </Container>
  )
}

export default NavBar