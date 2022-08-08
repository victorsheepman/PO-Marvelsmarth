import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export const Ventas = () => {
  return (
    <Card style={{width:'95%', marginTop:'20px'}}>
        <Card.Body>
            <h5 className='title-3'>
                Descripcion de ventas
            </h5>
            <Form.Control as="textarea" rows={3} />
        </Card.Body>
    </Card>
  )
}
