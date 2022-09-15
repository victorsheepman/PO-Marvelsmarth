import React from 'react'

import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../Atoms/FormCheck';
import { SetUp } from '../SetUp/SetUp';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { ButtonSetup } from '../../Atoms/ButtonSetup';
export const FacturaProveedores = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Proveedores / Factura
            </h3>
        </header>
        <SetUp >
            <ButtonCustom 
                title='CREAR'
                styles={{
                    width:'170px',
                    background:'#f6c94c',
                    color: 'black',
                    marginLeft:'3%'
                }}
            />
            <ButtonSetup 

            />
            <ButtonSetup 
                styles={{width:'350px'}}
                title='Agrupado por'
            />
            <ButtonSetup 
                title='Favoritos'
            />

        </SetUp>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
              <Card.Body>
                  
              <Table striped hover>
                <thead >
                  <tr>
                    <th>
                        <CheckExample />
                    </th>
                    <th>
                        Numero
                    </th>
                    <th>
                        Cliente
                    </th>
                    <th>
                        Hasta
                    </th>
                    <th>
                        Fecha Factura
                    </th>
                    <th>
                        Fecha de vencimiento
                    </th>
                    <th>
                        Actividad siguiente
                    </th>
                    <th>
                        Impuesto no incluidos
                    </th>
                    <th>
                        Total
                    </th>
                    <th>
                        Espado de pago
                    </th>
                    <th>
                        Estado
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    <td>
                        <CheckExample />
                    </td>
                    <td className='h6' onClick={()=>setShow(true)}>
                        REF 0001
                    </td>
                    <td className='h6'>
                        Victor  
                    </td>
                    <td className='h6'> 
                       14/02/2022
                    </td>
                    <td className='h6'>
                        <p className='text-danger'>Ayer</p>
                    </td>
                    <td className='h6'>
                        inmassa
                    </td>
                    <td className='h6'>
                        integer vitate
                    </td>
                    <td className='h6'>
                       77.666,00    
                    </td>
                    <td className='h6'>
                        77.666,00 
                    </td>
                    <td className='h6'>
                        <Badge 
                            bg="success"
                            style={{height:'20px', width:'80px', marginLeft:'12px'}}
                            
                    
                        >
                            Pagado
                        </Badge>
                    </td>
                    <td>
                        <Badge 
                            bg="primary"
                            style={{height:'20px', width:'80px', marginLeft:'12px'}}
                            
                    
                        >
                            Borrador
                        </Badge>
                    </td>
                  </tr>
                  <tr className='mt2'>
                    <td>
                        <CheckExample />
                    </td>
                    <td className='h6' onClick={()=>setShow(true)}>
                        REF 0001
                    </td>
                    <td className='h6'>
                        Victor  
                    </td>
                    <td className='h6'> 
                       14/02/2022
                    </td>
                    <td className='h6'>
                        <p className='text-danger'>Ayer</p>
                    </td>
                    <td className='h6'>
                        inmassa
                    </td>
                    <td className='h6'>
                        integer vitate
                    </td>
                    <td className='h6'>
                       77.666,00    
                    </td>
                    <td className='h6'>
                        77.666,00 
                    </td>
                    <td className='h6'>
                        <Badge 
                            bg="success"
                            style={{height:'20px', width:'80px', marginLeft:'12px'}}
                            
                    
                        >
                            Pagado
                        </Badge>
                    </td>
                    <td>
                        <Badge 
                            bg="primary"
                            style={{height:'20px', width:'80px', marginLeft:'12px'}}
                            
                    
                        >
                            Borrador
                        </Badge>
                    </td>
                  </tr>
                  
                  
                </tbody>
              </Table>
              </Card.Body>
          </Card>
        
    </div>
  )
}
