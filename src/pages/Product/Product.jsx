import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row, Image } from 'react-bootstrap'
import './product.css'
import NavBar from '../../components/Nav/NavBar'
import ProductImg from './Jeans.jpg'
import HeartImg from './heart.svg'


//Nuevo por Julian
function Product() {
    
    return (
        <>
          <NavBar />
          <section className='product-section'>
            <Container>
              <Row className='product-title'>
                <Col lg={12}>
                </Col>
                <Col lg={12}>
                  <div className='productContent'>
                    <img src={ProductImg} alt="Product" />
                    <div className='productInfo'>
                      <h1 className='lancelot'>Jeans</h1>
                      <h1>$300</h1>
                      <div className='productButtons'>
                        <button>Agregar al carrito</button>
                        <button><img src={HeartImg} alt="Add to favorites" /></button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </>
      );
    }
    
    export default Product;