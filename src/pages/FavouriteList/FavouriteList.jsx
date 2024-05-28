import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row, Image } from 'react-bootstrap'
import './FavouriteList.css'
import NavBar from '../../components/Nav/NavBar'
import ProductImg from './Jeans.jpg'
import { useNavigate } from "react-router-dom";


function FavouriteList() {
    const navigate = useNavigate();
    const toCart = () => {
      navigate("/Cart");
    }
    
    return (
        <>
          <NavBar />
          <section className='favouriteList-section'>
            <Container>
              <Row className='title lancelot'>
                <Col lg={12}>
                    <h1>Your Favorites</h1>
                </Col>
              </Row>
              <Row className='content'>
                <Col lg={12}>
                    <div className='favouriteListProduct'>
                        <div className='favouriteListProduct-leftPart'>
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
                        <div className='favouriteListProduct-rightPart'>
                            <button onClick={toCart}>Add to Cart</button>
                        </div>
                    </div>
                </Col>
                
              </Row>
            </Container>
          </section>
        </>
    );
}
    
export default FavouriteList;