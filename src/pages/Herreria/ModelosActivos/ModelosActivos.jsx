import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

export const ModelosActivos = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{marginRight:'4%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Modelos de Activo
            </h3> 
            <ButtonCustom   
                styles={{
                    background: '#f6c94c',
                    color: '#101928',
                    
                }}
                classe='mt-3 mx-4'
                title='+ Nuevo modelo de activo'
                //handle={handleOpen}
                    
            />
        </header>
        <Card className='mx-auto' style={{width:'95%', border:'unset', marginTop:'20px'}}>
            <Card.Body>
                <Table striped hover>
                    <thead >
                      <tr>
                        <th>
                            Nombre del modelo activo 
                        </th>
                        <th>
                            Metodo 
                        </th>
                        <th>
                            Duracion
                        </th>
                        <th>
                            Tiempo de distribucion
                        </th>
                        <th>
                            Cuenta de activo fijo
                        </th>
                        <th>
                            Cuenta despreciada
                        </th>
                        <th>
                            Cuenta de gastos
                        </th>
                        <th>
                            Diario
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr className='mt2'>
                       
                            <td className='h6'>
                               
                            </td>
                            <td className='h6'>
                                
                            </td>
                            <td className='h6'>
                                
                            </td>
                            <td className='h6'>
                                
                            </td>
                            <td className='h6'>
                                
                            </td>
                            <td className='h6'>
                                
                            </td>
                      </tr>
                      <tr className='mt2'>
                       
                            <td className='h6'>
                              
                            </td>
                            <td className='h6'>
                               
                            </td>
                            <td className='h6'>
                            
                            </td>
                            <td className='h6'>
                               
                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                      </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
        <p className='caption--sm mt-4' style={{color:'#f6c84c'}} >
            Mostrando 1 de 1 resultados
        </p>
    </div>
  )
}
