import React from 'react'
import { ButtonSetup } from '../../Atoms/ButtonSetup'
import { SetUp } from '../SetUp/SetUp'
import {ButtonCustom} from '../../Atoms/ButtonCustom'

import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../Atoms/FormCheck';
import { ModalShadow } from '../../Atoms/ModalShadow';
export const Transferencia = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Transferencia</h3>
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
                        Desde
                    </th>
                    <th>
                        Hasta
                    </th>
                    <th>
                        Contacto
                    </th>
                    <th>
                        Fecha prevista
                    </th>
                    <th>
                        Documento de origen
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
                        Laoreet id
                    </td>
                    <td className='h6'> 
                        Interget vitae
                    </td>
                    <td className='h6'>
                        Henry Campell
                    </td>
                    
                      <td className='h6'>
                          En 10 dias
                      </td>
                      <td className='h6'>
                          Documento de origen
                      </td>
                      <td className='h6'>
                        <Badge 
                            bg="warning"
                            style={{height:'20px', width:'80px', marginLeft:'12px'}}
                            
                    
                            >
                                En espera
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
                        Laoreet id
                    </td>
                    <td className='h6'> 
                        Interget vitae
                    </td>
                    <td className='h6'>
                        Henry Campell
                    </td>
                    
                      <td className='h6'>
                          En 10 dias
                      </td>
                      <td className='h6'>
                          Documento de origen
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
                        Laoreet id
                    </td>
                    <td className='h6'> 
                        Interget vitae
                    </td>
                    <td className='h6'>
                        Henry Campell
                    </td>
                    
                      <td className='h6'>
                          En 10 dias
                      </td>
                      <td className='h6'>
                          Documento de origen
                      </td>
                      <td className='h6'>
                        <Badge 
                           //bg="warning"
                            style={{height:'20px', width:'80px', marginLeft:'12px', backgroundColor:'#9ae5ef'}}
                            
                    
                            >
                                En espera
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
