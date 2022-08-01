import React from 'react'
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../../Atoms/FormCheck'
import { FormCustom } from '../../../Atoms/FormCustom';
import { FormSelection } from '../../../Atoms/FormSelection';
export const InformacionGeneral = () => {
  return (
    <Card style={{width:'95%', marginTop:'10px'}}>
            <Card.Body>
            <div className='container row '>
                <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Tipo de Producto'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        type='text'
                        holder='Almacenable'
                >
                    <option>Almacenable</option>
                </FormSelection>

                <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Precio de venta'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        type='text'
                        holder=''
                >
                    <option>1.200RD$</option>
                </FormSelection>
            </div>
            <div className='container row '>
                <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Politica de facturacion'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        type='text'
                        holder='Almacenable'
                >
                    <option>Cantidad pedidas</option>
                </FormSelection>

                <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Impuesto del cliente'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        type='text'
                        holder=''
                >
                    <option>18%</option>
                </FormSelection>
            </div>
            <div className='container row '>
                <div className='col-md-6'>
                    <p>
                        Los productos almacenes son articulos
                        fisicos para los que se gestina el nivel del
                        inventario.

                        puede facturarse antes de que se entreguen.
                    </p>

                </div>
                <div className='col-md-6'>  
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Coste'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0.00'
                    />
                    <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Impuesto del cliente'
                        classCustom='col-md-8 d-flex align-items-baseline'
                        type='text'
                        holder=''
                >
                    <option>Todos</option>
                </FormSelection>

                </div>
            </div>
            <div className='container row '>
                <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Unidad de medida'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        type='text'
                        holder='Almacenable'
                >
                    <option>Unidades</option>
                </FormSelection>

                <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Referencia interna'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        type='text'
                        holder=''
                >
                    <option>-</option>
                </FormSelection>
            </div>
            <div className='container row '>
                <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='UoM de compra'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        type='text'
                        holder='Unidades'
                >
                    <option>Unidades</option>
                </FormSelection>

                <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Codigo de barras '
                        classCustom='col-md-6 d-flex align-items-baseline'
                        type='text'
                        holder=''
                >
                    <option>-</option>
                </FormSelection>
            </div>
            </Card.Body>
        </Card>
  )
}
