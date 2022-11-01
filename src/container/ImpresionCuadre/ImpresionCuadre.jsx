import React from 'react'

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
export const ImpresionCuadre = () => {
  return (
    <div className='cuadre'>
        <div className='container d-flex justify-content-center align-items-center'>
            <h3>Impresion de Recibo Cuadre</h3>
        </div>
        <p><strong>Sucursal:</strong> Wanda Caceres (DN)</p>
        <p><strong>Fecha:</strong>03.10.2022</p>
        <div className='container d-flex align-items-center'>
            <p><strong>Colaborador:</strong>Todo</p>
            <p className='mx-3'><strong>Monto total RD$:</strong>1.450.00</p>
        </div>
        <h3>Resumen de commision (Por Colaborador)</h3>
        <Card className='mt-4 mx-auto' style={{width:'95%', border:'unset'}}>
              <Card.Body>
                  
              <Table striped hover>
                <thead >
                  <tr>
                   
                    <th>
                        Fecha factura
                    </th>
                    <th>
                        Num.de factura
                    </th>
                    <th>
                       Miembro del equipo
                    </th>
                    <th>
                       Articulo vendido
                    </th>
                    <th>
                        Cantidad
                    </th>
                    <th>
                        Valor venta
                    </th>
                    <th>
                        Cuota de comision
                    </th>
                    <th>
                       Cantidad de comision
                    </th>
                    <th>
                       Tipo de articulo
                    </th>   
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    <td>
                        1 oct 2022, 6:01pm
                    </td>
                    <td className='h6'>
                        <p className='text-primary'>6820</p>
                    </td>
                    <td className='h6'> 
                       Rosmary, La paz cruz
                    </td>
                    <td className='h6'>
                       Sandalia
                    </td>
                    <td className='h6'>
                        1
                    </td>
                    <td className='h6'>
                        50.00 DOp
                    </td>
                      <td className='h6'>
                       <p className='text-primary'>13%</p>
                    </td>
                    <td className='h6 text-success'>
                        25,58 DOP
                    </td>
                    <td className='h6'>
                       Service
                    </td>
                  </tr>
                </tbody>
              </Table>
              </Card.Body>
          </Card> 
       
    </div>
  )
}

