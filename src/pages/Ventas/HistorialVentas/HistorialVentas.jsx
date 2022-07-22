import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { DatosFactura } from '../../../container/DatosFactura/DatosFactura';


export const HistorialVentas = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='historialVentas '>
        <section className='ventasrapido__header'>
            <p className='subtitle'>Historial Ventas</p>
            <p className='body-md'>Ve, filtra y exporta el historial de todas tus ventas</p>
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
        <Card className='mx-auto' style={{width:'90%', border:'unset'}}>
            <Card.Body>
                 
            <Table striped hover>
              <thead >
                <tr>
                  <th>num de facturas</th>
                  <th>
                    Cliente
                  </th>
                  <th>
                    Estado
                  </th>
                  <th>
                    Fecha de factura
                  </th>
                  <th>
                    Nombre de la factura
                  </th>
                  <th>Primas</th>
                  <th>Total bruto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td onClick={()=>setShow(true)}>
                   5
                  </td>
                  <td>
                    <p className='text-primary'>Karen Popa</p>
                  </td>
                  <td>
                  <Badge bg="success">COMPLETADO</Badge>
                  </td>
                  <td>
                    18 may. 2022
                    9:22pm
                  </td>
                  <td></td>
                  <td>0,00 DOP</td>
                  <td>3000 DOP</td>
                 
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
        {
          show && <DatosFactura setShow={setShow} show={show} />  
        }
    </div>
  )
}
