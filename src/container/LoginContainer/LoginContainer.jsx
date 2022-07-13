import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export const LoginContainer = () => {
    return (
        <div className="logincotainer">
            <figure className="logincotainer__logo">
                <img src="../assets/images/logo.png" alt="" />
            </figure>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
                <Form.Group className='d-flex justify-content-end '>
                    <span className="logincotainer__recuperar">
                        recuperar password
                    </span>
                </Form.Group>
                
                <button className='logincotainer__button'>
                   Continuar
                </button>
                <div className='logincotainer__social'>
                    <button className='logincotainer__button--social'>
                        Continuar con facebook
                    </button>
                    <button className='logincotainer__button--social'>
                        Continuar con Apple
                    </button>
                    <button className='logincotainer__button--social'>
                        Continuar con Google
                    </button>
                </div>
                <div className='container logincotainer__sesion'>
                    <h3 className='title-3 text-center'>¿Desea reservar?</h3>
                    <span className='caption text-center'>Si eres cliente <a href="/#">inicia sesión aquí</a></span>
                    <span  className='caption text-center'>o registrate aquí</span>
                </div>
            </Form>   
            
        </div>
      );
}
