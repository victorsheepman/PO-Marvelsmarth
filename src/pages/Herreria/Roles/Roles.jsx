import React from 'react'

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import { useState } from 'react';
import { ModalShadow } from '../../../Atoms/ModalShadow';
import { CheckExample } from '../../../Atoms/FormCheck';

export const Roles = () => {
    const [show, setShow] = useState(true)
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Roles
            </h3>
            <div className='container pl-3 d-flex align-items-center' style={{marginLeft:'150px'}}>           
            <ButtonCustom   
                    styles={{
                        width:'250px',
                        background: '#f6c94c',
                        color: '#101928',
                       
                    }}
                    classe='mt-3 mx-3'
                    title='Roles'
                    
                    
                />
            <ButtonCustom   
                    styles={{
                        width:'250px',
                        background: '#f6c94c',
                        color: '#101928',
                            
                    }}
                    classe='mt-3 mx-3'
                    title='Permisos'
                    
                    
                />
            <ButtonCustom   
                    styles={{
                        background: '#f6c94c',
                        color: '#101928',
                            
                    }}
                    classe='mt-3 mx-3'
                    title='Invitar a mi contador'
                    
                    
                />
                <ButtonCustom   
                    styles={{
                        background: '#f6c94c',
                        color: '#101928',
                            
                    }}
                    classe='mt-3'
                    title='+ Nueva usuario'
                    
                    
                />
                </div>
        </header>
        <Card className='mt-4 mx-auto' style={{width:'95%', border:'unset'}}>
              <Card.Body>
                  
              <Table striped hover>
                <thead >
                  <tr>
                   
                    <th>
                       Nombre del rol
                    </th>
                    <th>
                        Descripcion del rol
                    </th>
                    <th>
                       Modulo
                    </th>
                    <th>
                       Proceso
                    </th>
                    <th>
                        Activo
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                  
                </tr>
                </tbody>
              </Table>
              </Card.Body>
          </Card>
          <div className='container d-flex justify-content-center align-items-center mt-1'>
                <span className='caption' style={{color:'#f6c94c'}}>mostrar 1 de 1 resultados</span>
            </div>
            <ModalShadow 
        show={show}
        setShow={setShow}
      >
         <Card className='cita__list__content' >

          <Card.Header className='d-flex justify-content-center align-items-center'>
            <h3>Crear nuevo rol</h3>
          </Card.Header>
          <Card.Body>
            <ul>
                <li className='h3' style={{listStyle:"none"}}>
                    Nombre del rol
                </li>
                <li className='h3' style={{listStyle:"none"}}>
                    Descripcion del rol
                </li>
                <li className='h3' style={{listStyle:"none"}}>
                    modulo
                </li>
                <li className='h3' style={{listStyle:"none"}}>
                    Proceso
                </li>
                <li className='h3 d-flex' style={{listStyle:"none"}}>
                    Activo <CheckExample classCustom={'mx-2'} />
                </li>
            </ul>
          </Card.Body>
          </Card>

      </ModalShadow> 
    </div>
  )
}
