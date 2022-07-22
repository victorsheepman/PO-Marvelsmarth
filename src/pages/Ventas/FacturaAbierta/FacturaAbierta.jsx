import React, { useState } from 'react'
import { Filter } from '../../../components/Filter/Filter'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FacturasRecientes } from '../../../container/FacturasRecientes/FacturasRecientes';
import Card from 'react-bootstrap/Card';
import {UserCalendar} from '../../../components/UserCalendar/UserCalendar';
import { FacturaCliente } from '../../../container/FacturaCliente/FacturaCliente';
export const FacturaAbierta = () => {
    const [cliente, setCliente] = useState(true)
  return (
    <div className='facturaAbierta'>
        <section className='facturaAbierta__form '>
            <h3 className='facturaAbierta__form__title subtitle'>Facturas abiertas</h3>
            <Filter />  
            <div  className='facturaAbierta__search '>
                <InputGroup className="mb-3 " style={{borderRadius:'30px', width:'400px' }}>
                    <Form.Control
                    style={{borderRadius:'30px',}}
                    placeholder="Buscar por Cliente o miembro del servicio"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <button className='facturaAbierta__filterButton'>
                    Filtros
                </button>
                <button className='facturaAbierta__filterButton--hoy'>
                   Hoy
                </button>
            </div>
            <FacturasRecientes />
            
        </section>
        <section className='facturaAbierta__list'>
            {
                cliente ?
                <Card>
                    <Card.Header>
                        <h4 className='title-3 ' onClick={()=>setCliente(false)}>
                            + Añadir Cliente
                        </h4>
                    </Card.Header>
                    <Card.Body className='d-flex flex-column align-items-center justify-content-center' style={{height:'600px'}}>
                        <img src="../assets/images/exclamation.png" alt="" srcset="" />
                        <p className='label-title'>
                            Selecciona una cita, servicio  o algún item para revisarlo.  
                        </p>
                    </Card.Body>
                </Card>: <FacturaCliente />
               
     
           

            }
        </section>

    </div>
  )
}
