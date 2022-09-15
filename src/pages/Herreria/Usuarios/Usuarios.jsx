import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

export const Usuarios = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{padding:'4%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Usuarios</h3>
            <div className='d-flex'>
                <ButtonCustom 
                    title='Invitar a mi contador'
                    styles={{
                        width:'190px',
                        background:'#f6c94c',
                        color: 'black',
                        marginLeft:'3%',
                        borderRadius:'6px'
                    }}
                />
                <ButtonCustom 
                    title='Nuevo usuario    '
                    styles={{
                        width:'170px',
                        background:'#f6c94c',
                        color: 'black',
                        marginLeft:'3%'
                    }}
                />
            </div>
        </header>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
              <Card.Body>
                  
              <Table striped hover>
                <thead >
                  <tr>
                   
                    <th>
                          Nombre
                    </th>
                    <th>
                        Apellidos
                    </th>
                    <th>
                        Correo Electronico
                    </th>
                    <th>
                        Perfil
                    </th>
                    <th>
                        Estado
                    </th>
                    <th>
                        Acciones
                    </th>
                
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                  
                    <td className='h6' onClick={()=>setShow(true)}>
                        
                    </td>
                    <td className='h6'>
                       
                    </td>
                    <td className='h6'> 
                        victorsheepman@gmail.com
                    </td>
                    <td>
                        Administrador
                    </td>
                    <td className='h6'>
                        <Badge 
                            bg="success"
                            style={{height:'20px', width:'80px', marginLeft:'12px'}}
                            
                    
                            >
                            Activo
                        </Badge>
                    </td>
                    <td>
                        <img src="../assets/images/trio.png" alt="" srcset="" />
                    </td>
                  </tr>
                  
                  
                </tbody>
              </Table>
              </Card.Body>
            </Card>
            <div className='container d-flex justify-content-center align-items-center mt-1'>
                <span className='caption' style={{color:'#f6c94c'}}>mostrar 1 de 1 resultados</span>
            </div> 
    </div>
  )
}
