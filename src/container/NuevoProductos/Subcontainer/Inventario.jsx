import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { FormCustom } from '../../../Atoms/FormCustom';
import { FormSelection } from '../../../Atoms/FormSelection';

export const Inventario = () => {
  return (
    <Card  style={{width:'95%', marginTop:'30px'}}>
        <Card.Body className='ng-dark d-flex' style={{paddingLeft:'5%'}}>
            <section style={{width:'50%',height:'100%', }}>
                <h3 className='title-3'>Operaciones</h3>
                <div className='contaniner d-flex mt-3'>
                        <h5 className='label-title'>Rutas</h5>
                        <div className='mx-3'>
                            <Form.Check
                                type='checkbox'
                                label='Comprar'
                            />
                            <Form.Check
                                type='Checkbox'
                                label='Fabricar'
                            />
                            <Form.Check
                                type='Checkbox'
                                label='Obtener bajo pedido'
                            />
                            
                        </div>
                    </div>
                    <h3 className='title-3 mt-4'>Trazabilidad</h3>
                    <div className='contaniner d-flex mt-3'>
                        <h5 className='label-title'>Seguimiento</h5>
                        <div className='mx-3'>
                            <Form.Check
                                type='radios'
                                label='Por numeros de serie unico'
                            />
                            <Form.Check
                                type='radios'
                                label='Por lotes'
                            />
                        </div>
                    </div>
            </section>
            <section style={{width:'50%',height:'100%', }}>
                <h3 className='title-3'>Logistica</h3>
                <FormSelection 
                    styles={
                        {
                            border:'none',
                            borderBottom:"1px solid black"
                                    
                        }
                    }
                    title='Responsable'
                    classCustom='col-md-8  d-flex  align-items-baseline'
                    type='text'
                    holder=''
                >
                    <option>Joseph</option>
                </FormSelection>
                <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Peso'
                        classCustom='col-md-8 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0.00'
                    />
                <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Volumen'
                        classCustom='col-md-8 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0.00'
                    />
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Plazo de fabricacion'
                        classCustom='col-md-8 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0.00'
                    />
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Plazo de entrega del cliente'
                        classCustom='col-md-8 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0.00'
                    />
            </section>
        </Card.Body>
    </Card>
  )
}
