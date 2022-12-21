import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import myimg from './assets/foto-digital.png'
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Image fluid src={myimg} className="pe-5"/>
      <Container fluid className="d-flex justify-content-center align-items-center border border-3 border-dark w-100">
        <Form className='pb-5'>
          <Form className='text-center py-4'>
            <Form.Label className="fs-1 fw-bolder">Login</Form.Label>
          </Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Text>Email</Form.Text>
            <Form.Control type="email" placeholder="Digite seu email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Text>Senha</Form.Text>
            <Form.Control type="password" placeholder="Digite sua senha" />
          </Form.Group>
          <Container className="d-grid gap-2">
            <Button variant="primary" size="lg" className="mb-3">
              Acessar
            </Button>
          </Container>
        </Form>
      </Container>
    </Container>
  );
}

export default App;
