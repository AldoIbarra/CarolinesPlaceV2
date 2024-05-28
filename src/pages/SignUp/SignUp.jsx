import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import './SignUp.css';
import NavBar from '../../components/Nav/NavBar';

function SignUp() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [fechaNac, setFechaNac] = useState('');
  const [tipo, setTipo] = useState('Comprador'); // Valor predeterminado para el tipo de usuario

  const handleSignUp = async (e) => {
    console.log(JSON.stringify({ nombreUsuario, email, contraseña, fechaNac, tipo }));
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombreUsuario, email, contraseña, fechaNac, tipo }),
      });
      if (response.ok) {
        console.log('Registro exitoso');
      } else {
        console.error('Error en el registro');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <NavBar />
      <section className='SignUpSection'>
        <Container>
          <Row>
            <Col lg={12} className='SignUp'>
              <h1 className='lancelot rose-text long-size'>Caroline's Place</h1>
              <form onSubmit={handleSignUp} className='koulen rose-text'>
                <label className='tiny-size' htmlFor='nombreUsuario'>Nombre de Usuario</label>
                <input type='text' id='nombreUsuario' value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} />
                <label className='tiny-size' htmlFor='email'>Correo Electrónico</label>
                <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className='tiny-size' htmlFor='contraseña'>Contraseña</label>
                <input type='password' id='contraseña' value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                <label className='tiny-size' htmlFor='fechaNac'>Fecha de Nacimiento</label>
                <input type='date' id='fechaNac' value={fechaNac} onChange={(e) => setFechaNac(e.target.value)} />
                <div>
                  <label className='tiny-size'>Tipo de Usuario:</label>
                  <div>
                    <input type='radio' id='Comprador' name='tipo' value='Comprador' checked={tipo === 'Comprador'} onChange={() => setTipo('Comprador')} />
                    <label htmlFor='comprador'>Comprador</label>
                  </div>
                  <div>
                    <input type='radio' id='Vendedor' name='tipo' value='Vendedor' checked={tipo === 'Vendedor'} onChange={() => setTipo('Vendedor')} />
                    <label htmlFor='vendedor'>Vendedor</label>
                  </div>
                </div>
                <span><button type='submit' className='medium-size'>Registrarse</button></span>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SignUp;
