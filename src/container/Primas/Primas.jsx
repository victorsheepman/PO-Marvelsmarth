import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';    
import { CheckExample } from '../../Atoms/FormCheck';
export const Primas = () => {
  return (
    <div className='prima'>
        <header className='prima__header'>
            <p className='body-sm'>Ajustes-Primas</p>
        </header>
         <div className='container-lg  d-flex'>
            <section className='prima__body  mt-3'>
                <h3 className='subtitle'>Propinas</h3>
                <h4 className='title-4 mt-5'>Propinas por punto de venta</h4>
                <p className='body-md mt-4'>
                    Escoge si te gustaría que los clientes pregunten si pueden <br />
                    brindarte una propina mientras creas una venta
                </p>
                <h4 className='title-4' style={{marginTop:'70px'}}>Propinas por punto de venta</h4>
                <p className='body-md mt-4'>
                    Escoge si te gustaría que los clientes pregunten si pueden <br />
                    brindarte una propina mientras creas una venta
                </p>
            </section>
            <section className='prima__body--scroll'>
                <Card className='mt-5'>
                    <Card.Body className='d-flex align-items-start  flex-column'>
                       <CheckExample 
                        title='Habilitar propinas durante el cobro por punto de venta'
                       
                       />
                        <p className='body-sm' style={{color:'black'}}>
                            Pregunta a los clientes si quieren dar una propina mientras esten pagando 
                            su conpmra en el punto de ventas. Si esta caracteristica esta deshabilitada, 
                            todavia es posible añadir una propina personalizada en el menu del carrito.
                        </p>
                    </Card.Body>
                </Card>
                <Card className='mt-5'>
                    <Card.Body>
                        <Form.Group>  
                            <Form.Label className='label-title'>1. Importe de propina</Form.Label>
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
                                <Form.Control aria-label="Text input with dropdown button" type="number" step="0.01" name="numero"  />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>  
                            <Form.Label className='label-title'>2. Importe de propina</Form.Label>
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
                                <Form.Control aria-label="Text input with dropdown button" type="number" step="0.01" name="numero" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>  
                            <Form.Label className='label-title'>3. Importe de propina</Form.Label>
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
                                <Form.Control aria-label="Text input with dropdown button" type="number" step="0.01" name="numero" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>  
                            <Form.Label className='label-title'>4. Importe de propina</Form.Label>
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
                                <Form.Control aria-label="Text input with dropdown button" type="number" step="0.01" name="numero" />
                            </InputGroup>
                        </Form.Group>
                    </Card.Body>
                </Card>

            </section>
         </div>
    </div>
  )
}
