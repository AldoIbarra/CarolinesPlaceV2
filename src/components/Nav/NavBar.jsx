import React from 'react'
import './nav.css'
import './../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Navbar, NavDropdown, Nav, Image} from 'react-bootstrap'
import CarolinesLogo from './PolachekLogo.png'

function NavBar() {
  return (
    <section className='navBar'>
      <Container>
        <Row className='navBar-row'>
          <Col lg={2} className='nav-col'>
            <a href="/"><img src={CarolinesLogo} alt="Carolines Logo" /></a>
          </Col>
          <Col lg={8} className='lancelot nav-col medium-size'>
            <a href="/Products">Tops</a>
            <a href="/Products">Bottoms</a>
            <a href="/Products">Shoes</a>
            <a href="/Products">Accesories</a>
          </Col>
          <Col lg={2} className='nav-col small-size'>
            <a href="/SignIn">Sign in</a> 
            <a href="/SignUp">Sign up</a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default NavBar