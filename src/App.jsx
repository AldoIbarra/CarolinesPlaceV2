import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SecondBanner from './Second-Banner.png'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import NavBar from './components/Nav/NavBar'
import Banner from './components/Banner/Banner'

function App() {
  return (
    <>
    <NavBar/>
    <Banner/>
    <Container>
      <Row>
        <Col lg={12}>
          <img src={SecondBanner} alt="Second Banner" />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
