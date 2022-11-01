import React from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Badge from 'react-bootstrap/Badge';
export const UsuarioRol = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Usuarios
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
                       Nombre
                    </th>
                    <th>
                        Apellidos
                    </th>
                    <th>
                       Correo electronico
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
                  <th>

                  </th>
                  <th>

                  </th>
                  <th>
                    chirychplin@gmail.com
                  </th>
                  <th>
                    Administrador
                  </th>
                  <th>
                  <Badge bg="success mt-2">Activo</Badge> 

                  </th>
                  <th>

                  </th>
                </tr>
                </tbody>
              </Table>
              </Card.Body>
          </Card>
    </div>
  )
}
