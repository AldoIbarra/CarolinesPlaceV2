import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row, Image } from 'react-bootstrap'
import './products.css'
import NavBar from '../../components/Nav/NavBar'
import Product from './Jeans.jpg'


//Nuevo por Julian
function Products() {
    
    return (
        <>
          <NavBar />
          <section className='products-section'>
            <Container>
              <Row className='products-title lancelot'>
                <Col lg={12}>
                    <h1>Here you are: clothes</h1>
                </Col>
              </Row>
              <Row className='products-content'>
                <Col lg={4} className='product'>
                    <div>
                      <img src={Product} alt="Carolines Logo" />
                        <h2>Jeans</h2>
                        <div className='prices'>
                            <h3>$20</h3>
                            <h4>$30</h4>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className='product'>
                    <div>
                        <img src={Product} alt="Carolines Logo" />
                        <h2>Jeans</h2>
                        <div className='prices'>
                            <h3>$20</h3>
                            <h4>$30</h4>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className='product'>
                    <div>
                        <img src={Product} alt="Carolines Logo" />
                        <h2>Jeans</h2>
                        <div className='prices'>
                            <h3>$20</h3>
                            <h4>$30</h4>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className='product'>
                    <div>
                        <img src={Product} alt="Carolines Logo" />
                        <h2>Jeans</h2>
                        <div className='prices'>
                            <h3>$20</h3>
                            <h4>$30</h4>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className='product'>
                    <div>
                        <img src={Product} alt="Carolines Logo" />
                        <h2>Jeans</h2>
                        <div className='prices'>
                            <h3>$20</h3>
                            <h4>$30</h4>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className='product'>
                    <div>
                        <img src={Product} alt="Carolines Logo" />
                        <h2>Jeans</h2>
                        <div className='prices'>
                            <h3>$20</h3>
                            <h4>$30</h4>
                        </div>
                    </div>
                </Col>
              </Row>
            </Container>
          </section>
        </>
      );
    }
    
    export default Products;