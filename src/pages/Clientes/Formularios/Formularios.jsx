import React from 'react'

import { ButtonCustom } from '../../../Atoms/ButtonCustom';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export const Formularios = () => {
  return (
    <div className='formularios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c'}}>Lista de clientes</h3>
          
            <ButtonCustom 
                styles={
                    {
                        width: '150px',
                        background:'#f6c84c',
                        color:'black',
                        height:'30px',
                        marginLeft:'55%'
                    }
                }
                title='Crear formulario'
                classe='d-flex justify-content-center align-items-center'
            />
        </header>
        <span className='label--title ' style={{color:'#f6c84c', marginLeft:'6%'}}>
            Consulta, añade, edita y elimina informacion del cliente.
        </span>
        <Card className='mx-auto mt-4' style={{width:'90%', border:'unset'}}>
            <Card.Body>
                 
            <Table striped hover>
              <thead >
                <tr>
                  <th>
                        Nombre del formulario
                  </th>
                  <th>
                        servicios
                  </th>
                  <th>
                        Solicitud
                  </th>
                  <th>
                        Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td >
                    <p className='label-title'>COVID 19</p>
                  </td>
                  <td>
                    Todos los servicios
                  </td>
                  <td > 
                    Antes de la cita
                  </td>
                  <td>
                    <Badge 
                        bg="warning"
                        style={{height:'20px', width:'80px', marginLeft:'12px'}}
                
                    >
                        INACTIVO
                    </Badge>
                  </td>
                  
                   
                </tr>
               
              </tbody>
            </Table>
            </Card.Body>
            <Card.Footer  style={{
                backgroundColor:'#101928'
            }}>
                <p className='caption--sm' style={{color:'#f6c84c'}} >
                    Mostrando 1 de 1 resultados
                </p>
            </Card.Footer>
        </Card>
    </div>
  )
}
