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
        const data = await response.json(); // Parsea la respuesta JSON
        console.log('Respuesta del servidor:', data);
    
        // Verifica si la sesión se estableció correctamente
        if (response.ok) {
          // Accede a las variables de sesión recibidas y muéstralas en la consola
          console.log('ID de usuario en sesión:', data.usuarioId);
          console.log('Tipo de usuario en sesión:', data.tipo);
          console.log('Login exitoso');
        } else {
          console.error('Login fallido');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    

    
    return (
        <>
          <NavBar />
          <section className='signInSection'>
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
          </section>
        </>
      );
    }
    
    export default SignIn;