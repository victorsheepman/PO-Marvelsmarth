import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../Atoms/FormCheck';
import { ButtonSetup } from '../../Atoms/ButtonSetup'
import { SetUp } from '../SetUp/SetUp'
import {ButtonCustom} from '../../Atoms/ButtonCustom'
export const OrdenesDesecho = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Ordenes de desecho</h3>
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
                        Fecha 
                    </th>
                    <th>
                        Producto
                    </th>
                    <th>
                        Cantidad
                    </th>
                    <th>
                        Unidad de medida
                    </th>
                    <th>
                        Ubicacion de origen
                    </th>
                    <th>
                        Ubicacion de desecho
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
                        03/06/2022 13:52:26
                    </td>
                    <td className='h6'> 
                        Laoreet id
                    </td>
                    <td className='h6'>
                        35,39
                    </td>
                    
                      <td className='h6'>
                        In massa
                      </td>
                      <td className='h6'>
                        Integer Vitae
                      </td>
                      <td className='h6'>
                        Laoreet id
                      </td>
                      <td className='h6'>
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
                        03/06/2022 13:52:26
                    </td>
                    <td className='h6'> 
                        Laoreet id
                    </td>
                    <td className='h6'>
                        35,39
                    </td>
                    
                      <td className='h6'>
                        In massa
                      </td>
                      <td className='h6'>
                        Integer Vitae
                      </td>
                      <td className='h6'>
                        Laoreet id
                      </td>
                      <td className='h6'>
                        <Badge 
                            bg="success"
                            style={{height:'20px', width:'80px', marginLeft:'12px'}}
                            
                    
                          >
                            Hecho
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
                        03/06/2022 13:52:26
                    </td>
                    <td className='h6'> 
                        Laoreet id
                    </td>
                    <td className='h6'>
                        35,39
                    </td>
                    
                      <td className='h6'>
                        In massa
                      </td>
                      <td className='h6'>
                        Integer Vitae
                      </td>
                      <td className='h6'>
                        Laoreet id
                      </td>
                      <td className='h6'>
                      <Badge 
                            bg="success"
                            style={{height:'20px', width:'80px', marginLeft:'12px'}}
                            
                    
                          >
                            Hecho
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
