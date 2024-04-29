import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row, Image } from 'react-bootstrap'
import './SignUp.css'
import NavBar from '../../components/Nav/NavBar'

function SignUp() {
  return (
    <>
        <NavBar/>
        <Container>
            <Row>
                <Col lg={12} className='SignUp'>
                    <h1 className='lancelot rose-text long-size'>Caroline's Place</h1>
                    <form action="" className='koulen rose-text'>
                        <label className='tiny-size' htmlFor="">NAME</label>
                        <input type="text" />
                        <label className='tiny-size' htmlFor="">BORNDATE</label>
                        <input type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" />
                        <label className='tiny-size' htmlFor="">EMAIL</label>
                        <input type="text" />
                        <label className='tiny-size' htmlFor="">PASSWORD</label>
                        <input type="text" />
                        <span><button className='medium-size'>SIGN UP</button></span>
                    </form>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default SignUp