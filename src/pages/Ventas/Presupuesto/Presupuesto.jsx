import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { ButtonCustom } from '../../../Atoms/ButtonCustom';
import { FormCustom } from '../../../Atoms/FormCustom';
import Badge from 'react-bootstrap/Badge'

export const Presupuesto = () => {
    const [show, setShow] = useState(1)
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Presupuesto</h3>
        </header>
        <div className='container d-flex'>
            <p className='caption-sm' style={{color:'#f6c84c'}}>S0001</p>
            <p className='caption-sm mx-2' style={{color:'#f6c84c'}}>S0002</p>
            <p className='caption-sm mx-2' style={{color:'#f6c84c'}}>S0003</p>
        </div>
        <Card className='mx-auto' style={{width:'85%', border:'unset'}}>
            <Card.Body>
                <h3 className='title-3' style={
                    {
                        fontSize:'30px', 
                        borderBottom:'1px solid black'
                    }
                }>
                    
                    S0002
                </h3>
                <div className='d-flex'>
                    <p>
                        <strong>Cliente:</strong>
                        <small className='text-primary mx-2'>
                            joseph
                        </small>
                    </p>
                    <p className='caption-sm mx-4'>
                        Expiracion <br /> 
                        plazos de pago
                    </p>
                </div>
                <nav className='container mt-4'>
                    <ul className='d-flex'>
                        <li className={'nuevoProveedor__item'}>
                            Lineas de pedido
                        </li>
                        <li className={'nuevoProveedor__item'}>
                            Productos opcionales
                        </li>
                        <li className={'nuevoProveedor__item'}>
                            Otra informacion
                        </li>
                    </ul>
                </nav>
                {
                    /*<div className='d-flex'>
                    <ButtonCustom 
                        styles={{
                            background: 'white',
                            color: 'black',
                        }}
                        title='Lista de pedidos'
                        handle={()=>setShow(1)}
                    />
                    <ButtonCustom 
                        styles={{
                            background: 'white',
                            color: 'black',
                            border: 'none',
                        }}
                        title='Productos opcionales'
                        //handle={()=>setShow(1)}
                    />
                    <ButtonCustom 
                        styles={{
                            background: 'white',
                            color: 'black',
                        }}
                        title='Otra informacion'
                       // handle={()=>setShow(1)}
                    /> 

                </div>*/
            }
               
            </Card.Body>
                {
            show == 1 && <Card.Footer style={{backgroundColor:'white'}}>
            <Table striped hover>
                <thead >
                    <tr>
                        <th>
                            Producto
                        </th>
                        <th>
                            Descripcion
                        </th>
                        <th>
                            Cantidad
                        </th>
                        <th>
                            UdM
                        </th> 
                        <th>
                            Presupuesto unitario
                        </th>   
                        <th>
                            Impuestos
                        </th>
                        <th>
                           Subtotal
                        </th>            
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p className='text-primary'>
                                Producto-prueba-1
                            </p>
                        </td>
                        <td>
                            <p className='text-primary'>
                                Producto-prueba-1
                            </p>
                        </td>
                        <td>
                            1,00
                        </td>
                        <td>
                            Unidades
                        </td>
                        <td>
                            1.500
                        </td>
                        <td>
                        <Badge 
                           //bg="warning"
                            style={{height:'20px', width:'80px', marginLeft:'12px', backgroundColor:'#9ae5ef'}}
                            
                    
                            >
                                18% ITBIS
                            </Badge>
                        </td>
                        <td>
                            RD$ 1.500,00   
                        </td>
                    </tr>
                </tbody>
                <div className='d-flex '>
                    <span className='text-primary'>Agregar un producto</span>
                    <span className='text-primary mx-3'>Agregar una seccion</span>
                    <span className='text-primary mx-3'>Agregar nota</span>
                </div>
                
            </Table>
            <div className='container d-flex flex-column align-items-end' style={{backgroundColor:'white'}}>
                <p className='caption-sm'>
                    Importe libre de impuesto: RD$1500
                </p>
                <p className='caption-sm'>
                    ITBIS: RD$1500
                </p>
                <p className='caption-sm'>
                    Total: RD$1500
                </p>
            </div>
        </Card.Footer>
        } 
        </Card>
        
    </div>
  )
}
