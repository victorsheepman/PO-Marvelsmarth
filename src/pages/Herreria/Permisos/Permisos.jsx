import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../../Atoms/FormCheck';
export const Permisos = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{padding:'5%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Permisos</h3>
           <div className='container pl-3 d-flex align-items-center' style={{marginLeft:'150px'}}>           
            <ButtonCustom   
                    styles={{
                        background: '#f6c94c',
                        color: '#101928',
                       
                    }}
                    classe='mt-3 mx-3'
                    title='Roles'
                    
                    
                />
            <ButtonCustom   
                    styles={{
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
                        RESERVAS Y CLIENTES
                    </th>
                    <th>
                      INFO BASICA
                    </th>
                    <th>
                        BAJO
                    </th>
                    <th>
                        MEDIO
                    </th>
                    <th>
                        ALTO
                    </th>
                    <th>
                        PROPIETARIO
                    </th>   
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    <td>
                      <h5>Accerder a mi calendario</h5>  
                    </td>
                    <td className='h6'>
                        <CheckExample />
                    </td>
                    <td className='h6'> 
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                  </tr>
                 
                  <tr className='mt2'>
                    <td>
                      <h5>Puede reservar citas</h5>  
                    </td>
                    <td className='h6'>
                        <CheckExample />
                    </td>
                    <td className='h6'> 
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                  </tr>
                  <tr className='mt2'>
                    <td>
                      <h5>Inicio</h5>  
                    </td>
                    <td className='h6'>
                        <CheckExample />
                    </td>
                    <td className='h6'> 
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                  </tr>
                  <tr className='mt2'>
                    <td>
                      <h5>Clientes</h5>  
                    </td>
                    <td className='h6'>
                        <CheckExample />
                    </td>
                    <td className='h6'> 
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                  </tr>
                  <tr className='mt2'>
                    <td>
                      <h5>Puedes ver los datos de contacto del cliente</h5>  
                    </td>
                    <td className='h6'>
                        <CheckExample />
                    </td>
                    <td className='h6'> 
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                  </tr>
                  <tr className='mt2'>
                    <td>
                      <h5>Puede descargar clientes</h5>  
                    </td>
                    <td className='h6'>
                        <CheckExample />
                    </td>
                    <td className='h6'> 
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                  </tr>
                  <tr className='mt2'>
                    <td>
                      <h5>Mensajes</h5>  
                    </td>
                    <td className='h6'>
                        <CheckExample />
                    </td>
                    <td className='h6'> 
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table striped hover>
                <thead >
                  <tr>
                    <th>
                        SERVICIOS
                    </th>
                    <th>
                      INFO BASICA
                    </th>
                    <th>
                        BAJO
                    </th>
                    <th>
                        MEDIO
                    </th>
                    <th>
                        ALTO
                    </th>
                    <th>
                        PROPIETARIO
                    </th>   
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    <td>
                      <h5>Servicios</h5>  
                    </td>
                    <td className='h6'>
                        <CheckExample />
                    </td>
                    <td className='h6'> 
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                  </tr>
                 
                  <tr className='mt2'>
                    <td>
                      <h5>Menbresias</h5>  
                    </td>
                    <td className='h6'>
                        <CheckExample />
                    </td>
                    <td className='h6'> 
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                    <td className='h6'>
                    <CheckExample />
                    </td>
                  </tr>
                  <tr className='mt2'>
                    <td>
                      <h5>Inicio</h5>  
                    </td>
                    <td className='h6'>
                        <CheckExample />
                    </td>
                    <td className='h6'> 
                        <CheckExample />
                    </td>
                    <td className='h6'>
                        <CheckExample />
                    </td>
                    <td className='h6'>
                        <CheckExample />
                    </td>
                    <td className='h6'>
                        <CheckExample />
                    </td>
                  </tr>
                </tbody>
              </Table>
              </Card.Body>
          </Card> 
    </div>
  )
}
