import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export const CitasPage = () => {
  return (
    <div className='citasPage'>
      <section className='ventasrapido__header'>
          <p className='subtitle'>Citas</p>
          <p className='body-md'>Ve, filtra y exporta las citas agregadas por el cliente</p>
      </section>
        <div className='calendar__header'>
          <InputGroup style={{borderRadius:'30px', width:'200px' }}>
            <Form.Control
              style={{borderRadius:'30px',}}
              placeholder="Buscar por Cliente o miembro del servicio"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
              <button className='calendar__button'>
                  Todos
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
              </button>
              <button className='calendar__button--md'>
                  HOY jueves 12 may, 2022
              </button>
              <div className='calendar__content'>
                  <button className='calendar__button--sm'>
                      Exportar
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                      </svg>
                  </button>
                  
              </div>
          </div>
        <Card className='mx-auto' style={{width:'90%'}}>
          <Card.Body>
            
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Ref</th>
                  <th>
                    Dia de creacion
                  </th>
                  <th>Fecha agendada</th>
                  <th>Hora</th>
                  <th>Duracion</th>
                  <th>Miembro del Equipo</th>
                  <th>Precio</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className='text-primary'>dhcvnd</p>
                  </td>
                  <td>
                    16 may. 2022
                  </td>
                  <td>
                    16 may. 2022
                  </td>
                  <td>4:00 PM</td>
                  <td>30 min</td>
                  <td>Victor</td>
                  <td>3000 DOP</td>
                  <td>
                    <Badge bg="primary">Nuevo</Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className='text-primary'>dhcvnd</p>
                  </td>
                  <td>
                    16 may. 2022
                  </td>
                  <td>
                    16 may. 2022
                  </td>
                  <td>4:00 PM</td>
                  <td>30 min</td>
                  <td>Victor</td>
                  <td>3000 DOP</td>
                  <td>
                    <Badge bg="danger">Cancelado</Badge>
                  </td>


                </tr>
                <tr>
                  <td>
                    <p className='text-primary'>dhcvnd</p>
                  </td>
                  <td>
                    16 may. 2022
                  </td>
                  <td>
                    16 may. 2022
                  </td>
                  <td>4:00 PM</td>
                  <td>30 min</td>
                  <td>Victor</td>
                  <td>3000 DOP</td>
                  <td>
                    <Badge bg="danger">Cancelado</Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className='text-primary'>dhcvnd</p>
                  </td>
                  <td>
                    16 may. 2022
                  </td>
                  <td>
                    16 may. 2022
                  </td>
                  <td>4:00 PM</td>
                  <td>30 min</td>
                  <td>Victor</td>
                  <td>3000 DOP</td>
                  <td>
                    <Badge bg="danger">Cancelado</Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className='text-primary'>dhcvnd</p>
                  </td>
                  <td>
                    16 may. 2022
                  </td>
                  <td>
                    16 may. 2022
                  </td>
                  <td>4:00 PM</td>
                  <td>30 min</td>
                  <td>Victor</td>
                  <td>3000 DOP</td>
                  <td>
                    <Badge bg="danger">Cancelado</Badge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className='text-primary'>dhcvnd</p>
                  </td>
                  <td>
                    16 may. 2022
                  </td>
                  <td>
                    16 may. 2022
                  </td>
                  <td>4:00 PM</td>
                  <td>30 min</td>
                  <td>Victor</td>
                  <td>3000 DOP</td>
                  <td>
                    <Badge bg="danger">Cancelado</Badge>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        
    </div>
  )
}
