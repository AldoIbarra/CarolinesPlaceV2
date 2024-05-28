import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row, Image } from 'react-bootstrap'
import './cart.css'
import NavBar from '../../components/Nav/NavBar'
import ProductImg from './Jeans.jpg'
import ProductImg2 from './blouse.jpg'


function Cart() {
    
    return (
        <>
          <NavBar />
          <section className='cart-section'>
            <Container>
              <Row className='title lancelot'>
                <Col lg={12}>
                    <h1>Your products</h1>
                </Col>
              </Row>
              <Row className='content'>
                <Col lg={8}>
                    <div className='cartProduct'>
                        <div className='cartProduct-leftPart'>
                            <img src={ProductImg} alt="Product" />
                            <div className='product-Info'>
                                <div>
                                    <h4>Jeans</h4>
                                    <p>Blue Denim Jeans</p>
                                </div>
                                <div>
                                    <p>Cantidad: 1</p>
                                </div>
                            </div>
                        </div>
                        <div className='cartProduct-rightPart'>
                            <h3>$600</h3>
                        </div>
                    </div>
                    <div className='cartProduct'>
                        <div className='cartProduct-leftPart'>
                            <img src={ProductImg2} alt="Product" />
                            <div className='product-Info'>
                                <div>
                                    <h4>Blouse</h4>
                                    <p>Orange Blouse</p>
                                </div>
                                <div>
                                    <p>Cantidad: 1</p>
                                </div>
                            </div>
                        </div>
                        <div className='cartProduct-rightPart'>
                            <h3>$450</h3>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='checkout'>
                        <div>
                            <h1>Checkout</h1>
                        </div>
                        <div className='line'>
                            <hr />
                        </div>
                        <div className='subtotal'>
                            <div>
                                <h4>Subtotal</h4>
                                <h4>(2 Products)</h4>
                            </div>
                            <h4>$1,050</h4>
                        </div>
                    </div>
                </Col>
              </Row>
            </Container>
          </section>
        </>
    );
}
    
export default Cart;