import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { FormCustom } from '../../../Atoms/FormCustom';
import { FormSelection } from '../../../Atoms/FormSelection';

export const Compra = () => {
  return (
    <Card style={{width:'95%', marginTop:'-100px'}}>
        <Card.Body>
            <div className='container row'>
                <FormSelection 
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                    
                                }
                            }
                            title='Impuesto del cliente'
                            classCustom='col-md-3    align-items-baseline'
                            type='text'
                            holder=''
                    >
                        <option>18%</option>
                    </FormSelection>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Cantidad'
                        classCustom='col-md-3 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0.00'
                    />
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                color:'blue'
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Unidades de medida'
                        classCustom='col-md-2 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='unidades    '
                    />
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Precio'
                        classCustom='col-md-2 align-items-baseline'
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
                        title='Tiempo'
                        classCustom='col-md-2 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='1'
                    />
            </div>
            <span className='add-line'>
                +Agregar linea
            </span>
            <h4 className='title-3 mt-3'>Facturas de proveedores</h4>
            <div className='container row'>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                
                                
                            }
                        }
                        title='Nombre del producto'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='18% ITBIS sobre el 10%  del monto'
                    />
                    <div className='contaniner d-flex mt-3'>
                        <h5 className='title-3'>Politicas de control</h5>
                        <div className='mx-3'>
                            <Form.Check
                                type='radio'
                                label='Sobre cantidades perdidas'
                            />
                            <Form.Check
                                type='radio'
                                label='Sobre cantidades recibidas'
                            />
                            
                        </div>
                    </div>
            </div>
            <h4 className='title-3'>
                Descripcion de compra
            </h4>
        </Card.Body>
    </Card>
  )
}
