import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import { ButtonSetup } from '../../../Atoms/ButtonSetup'
import { SetUp } from '../../../container/SetUp/SetUp'

import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../../Atoms/FormCheck';
export const OrdenesProduccion = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>órdenes de producción</h3>
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
                          Referencia
                    </th>
                    <th>
                        Fecha Prevista
                    </th>
                    <th>
                        Producto
                    </th>
                    <th>
                        Origen
                    </th>
                    <th>
                        Estado del componente
                    </th>
                    <th>
                        Cantidad
                    </th>
                    <th>
                        UdM
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
                        En 15 dias
                    </td>
                    <td className='h6'> 
                        Laoret Id
                    </td>
                    <td className='h6'>
                        
                    </td>
                    
                      <td className='h6'>
                          
                      </td>
                      <td className='h6'>
                          35,39
                      </td>
                      <td className='h6'>
                          Valupat blandit 
                      </td>
                      <td className='h6'>
                        <Badge 
                            bg="warning"
                            style={{height:'20px', width:'80px', marginLeft:'12px'}}
                            
                    
                            >
                                Confirmado
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
                        En 15 dias
                    </td>
                    <td className='h6'> 
                        Laoret Id
                    </td>
                    <td className='h6'>
                        
                    </td>
                    
                      <td className='h6'>
                          
                      </td>
                      <td className='h6'>
                          35,39
                      </td>
                      <td className='h6'>
                          Valupat blandit 
                      </td>
                      <td className='h6'>
                        <Badge 
                            bg="warning"
                            style={{height:'20px', width:'80px', marginLeft:'12px'}}
                            
                    
                            >
                                Confirmado
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
                        En 15 dias
                    </td>
                    <td className='h6'> 
                        Laoret Id
                    </td>
                    <td className='h6'>
                        
                    </td>
                    
                      <td className='h6'>
                          
                      </td>
                      <td className='h6'>
                          35,39
                      </td>
                      <td className='h6'>
                          Valupat blandit 
                      </td>
                      <td className='h6'>
                        <Badge 
                            bg="warning"
                            style={{height:'20px', width:'80px', marginLeft:'12px'}}
                            
                    
                            >
                                Confirmado
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
