import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row, Image } from 'react-bootstrap'
import SecurePayment from './Secure-Payment.png'
import Arrow from './Arrow.svg'
import './Banner.css'

function Banner() {
  return (
    <Container>
      <Row className='koulen white-text banner'>
        <Col lg={2}>
        </Col>
        <Col lg={5} className='discount-col'>
          <div className='huge-size'>30%</div>
          <div>
            <span className='long-size'>DISCOUNT</span>
            <span className='medium-size'>ON YOUR FIRST ORDER</span>
          </div>
        </Col>
        <Col lg={2} className='free-col'>
          <div className='medium-long-size'>+</div>
          <div>
            <span className='long-size'>FREE</span>
            <span className='medium-long-size'>SHIPPING</span>
            <img src={SecurePayment} alt="Secure Payment" />
          </div>
        </Col>
        <Col lg={3} className='know-col'>
          <div>
            <a href="">
              <span className='medium-long-size white-text'>KNOW MORE</span>
              <img src={Arrow} alt="Arrow" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Banner