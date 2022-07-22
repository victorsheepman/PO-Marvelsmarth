import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

export const HistorialServicios = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c'}}>Historial de servicios</h3>
        </header>
        <span className='label--title ' style={{color:'#f6c84c', marginLeft:'6%', fontSize:'20px'}}>
           Ve y edita la informacion de los servicios aplicados a los clientes y escoge la visualizacion de los mismos segun lo desees
        </span>
        <div className='calendar__header mt-4'>
            <InputGroup style={{borderRadius:'30px', width:'420px' }}>
            <Form.Control
                style={{borderRadius:'30px',}}
                placeholder="Buscar por Cliente o miembro del servicio"
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
            </InputGroup>
            <button className='calendar__button historialServicios__border mx-5'>
                Filtros
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            <div className='calendar__content'>
                <button className='calendar__button--sm historialServicios__border'>
                    Nombre (A-Z)
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
                
            </div>
            <div className='calendar__content'>
                <button className='calendar__button--sm historialServicios__border'>
                   Tipo de Vista
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>        
            </div>  
        </div>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
            <Card.Body>
                 
            <Table striped hover>
              <thead >
                <tr>
                  <th>
                        Nombre del cliente
                  </th>
                  <th>
                        Fecha del servicio
                  </th>
                  <th>
                        Tiempo Transcurrido
                  </th>
                  <th>
                        Servicios Adquiridos
                  </th>
                  <th>
                        Presupuesto
                  </th>
                  <th>
                        Personal de servicio
                  </th>
                  <th>
                        Nota Cita
                  </th>
                </tr>
              </thead>
              <tbody>
              <tr className='mt2'>
                  <td className='h6' onClick={()=>setShow(true)}>
                    Victor Marquez
                  </td>
                  <td className='h6'>
                    20/04/2022
                  </td>
                  <td className='h6'> 
                    2hrs 30min
                  </td>
                  <td className='h6'>
                    Lavado, Secado,
                    Tecnica de color
                  </td>
                  
                    <td className='h6'>
                        RD$ 38,500
                    </td>
                    <td className='h6'>
                        Marinana  Pinto
                    </td>
                    <td className='h6'>
                        Cambio de look por aniversario
                    </td>
                </tr>
                <tr className='mt2'>
                  <td className='h6' onClick={()=>setShow(true)}>
                    Victor Marquez
                  </td>
                  <td className='h6'>
                    20/04/2022
                  </td>
                  <td className='h6'> 
                    2hrs 30min
                  </td>
                  <td className='h6'>
                    Lavado, Secado,
                    Tecnica de color
                  </td>
                  
                    <td className='h6'>
                        RD$ 38,500
                    </td>
                    <td className='h6'>
                        Marinana  Pinto
                    </td>
                    <td className='h6'>
                        Cambio de look por aniversario
                    </td>
                </tr>
                <tr>
                  <td className='h6' onClick={()=>setShow(true)}>
                    Victor Marquez
                  </td>
                  <td className='h6'>
                    20/04/2022
                  </td>
                  <td className='h6'> 
                    2hrs 30min
                  </td>
                  <td className='h6'>
                    Lavado, Secado,
                    Tecnica de color
                  </td>
                  
                    <td className='h6'>
                        RD$ 38,500
                    </td>
                    <td className='h6'>
                        Marinana  Pinto
                    </td>
                    <td className='h6'>
                        Cambio de look por aniversario
                    </td>
                </tr>
               
              </tbody>
            </Table>
            </Card.Body>
        </Card>
    </div>
  )
}
