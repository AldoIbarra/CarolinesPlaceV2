import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row, Image } from 'react-bootstrap'
import './SignIn.css'
import NavBar from '../../components/Nav/NavBar'
import PolachekSignIn from './PolachekSignIn2.png'
import { useState } from 'react'; 


//Nuevo por Julian
function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignIn = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
          // Lógica para manejar la autenticación exitosa
          console.log('Login exitoso');
        } else {
          // Lógica para manejar la autenticación fallida
          console.error('Login fallido');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    return (
        <>
          <NavBar />
          <Container className='SignInContainer'>
            <Row>
              <Col lg={6} className='SignIn'>
                <h1 className='lancelot rose-text long-size'>Caroline's Place</h1>
                <form onSubmit={handleSignIn} className='koulen rose-text'>
                  <label className='tiny-size' htmlFor='email'>EMAIL</label>
                  <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  <label className='tiny-size' htmlFor='password'>PASSWORD</label>
                  <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                  <span><button type='submit' className='medium-size'>SIGN IN</button></span>
                </form>
              </Col>
              <Col lg={6} className='SignInImg'>
                <img src={PolachekSignIn} alt='PolachekSignIn' />
              </Col>
            </Row>
          </Container>
        </>
      );
    }
    
    export default SignIn;