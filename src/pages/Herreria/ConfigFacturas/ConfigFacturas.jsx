import React from 'react'
import Card from 'react-bootstrap/Card';  
import Form from 'react-bootstrap/Form';
import { CheckExample } from '../../../Atoms/FormCheck';

export const ConfigFacturas = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Configuracion de facturas
            </h3>
        </header>
        <Card className='mx-auto' style={{width:'50%', border:'unset'}}>
            <Card.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Terminos y condicion</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Notas de la factura</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group> 
            <CheckExample 
                title='Incluir estado de cuenta clientes de la facturas'
                classCustom='mt-3'

                      
            />
            <CheckExample 
                title='Utilizar numero de factura interna'
                classCustom='mt-3'

                      
            />
            </Card.Body>
        </Card>
    </div>
  )
}
