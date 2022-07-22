import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { ButtonCustom } from '../../../Atoms/ButtonCustom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { UserCalendar } from '../../../components/UserCalendar/UserCalendar';
import { Alert } from '../../../Atoms/Alert';

export const ListaClientes = () => {
  return (
    <div className='listaClientes '>
      <Alert />
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c'}}>Lista de clientes</h3>
            <Badge 
                bg="warning"
                style={{height:'20px', width:'50px', marginLeft:'12px'}}
                
            >
                999
            </Badge>
            <ButtonCustom 
                styles={
                    {
                        width: '100px',
                        background:'#f6c84c',
                        color:'black',
                        height:'30px',
                        marginLeft:'55%'
                    }
                }
                title='Opciones'
                classe='d-flex justify-content-center align-items-center'
            />
              <ButtonCustom 
                styles={
                    {
                        width: '130px',
                        background:'#f6c84c',
                        color:'black',
                        height:'30px',
                        marginLeft:'5%'
                    }
                }
                title='Añadir Cliente'
                classe='d-flex justify-content-center align-items-center'
            />
        </header>
        <span className='label--title ' style={{color:'#f6c84c', marginLeft:'6%'}}>
            Consulta, añade, edita y elimina informacion del cliente.
        </span>
        <div className='calendar__header mt-4'>
            <InputGroup style={{borderRadius:'30px', width:'200px' }}>
            <Form.Control
                style={{borderRadius:'30px',}}
                placeholder="Buscar por Cliente o miembro del servicio"
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
            </InputGroup>
            <button className='calendar__button'>
                Filtros
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            <div className='calendar__content'>
                <button className='calendar__button--sm'>
                    Nombre (A-Z)
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
                
            </div>
        </div>
        <Card className='mx-auto' style={{width:'90%', border:'unset'}}>
            <Card.Body>
                 
            <Table striped hover>
              <thead >
                <tr>
                  <th>
                        Nombre del cliente
                  </th>
                  <th>
                        Numero de movil
                  </th>
                  <th>
                        Genero
                  </th>
                  <th>
                        Reseñas
                  </th>
                  <th>
                        Ventas Totales
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td onClick={()=>setShow(true)}>
                    <UserCalendar flex={true} />
                  </td>
                  <td className='d-flex justify-content-center align-items-center' style={{height:'105px'}}>
                    +58 414-6524519
                  </td>
                  <td > 
                    -
                  </td>
                  <td>
                    -
                  </td>
                  
                    <td>
                        -
                    </td>
                </tr>
                <tr>
                  <td onClick={()=>setShow(true)}>
                    <UserCalendar flex={true} />
                  </td>
                  <td className='d-flex justify-content-center align-items-center' style={{height:'105px'}}>
                    +58 414-6524519
                  </td>
                  <td > 
                    -
                  </td>
                  <td>
                    -
                  </td>
                  
                    <td>
                        -
                    </td>
                </tr>
                <tr>
                  <td onClick={()=>setShow(true)}>
                    <UserCalendar flex={true} />
                  </td>
                  <td className='d-flex justify-content-center align-items-center' style={{height:'105px'}}>
                    +58 414-6524519
                  </td>
                  <td> 
                    <p className='label-title'>-</p> 
                  </td>
                  <td>
                    -
                  </td>
                  
                    <td>
                        -
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
