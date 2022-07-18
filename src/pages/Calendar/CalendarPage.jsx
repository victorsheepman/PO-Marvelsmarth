import React, { useState } from 'react'
import { ButtonAcordion } from '../../Atoms/ButtonAcordion'
import { MyCalendar } from '../../components/BigCalendar/MyCalendar'
import { UserCalendar } from '../../components/UserCalendar/UserCalendar'
import { Agenda } from '../../container/Agenda/Agenda'
import {user} from './helpers'
import Button from 'react-bootstrap/Button';
import {ModalShadow} from '../../Atoms/ModalShadow'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { FormCustom } from '../../Atoms/FormCustom'
import { FormSelection } from '../../Atoms/FormSelection'
import InputGroup from 'react-bootstrap/InputGroup';
import { ButtonCustom } from '../../Atoms/ButtonCustom'
const CalendarPage = () => {
  const [show, setShow] = useState(false)
  return (
   <div className='calendar'>
        {/* <section className='calendar__header'>
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
              dia 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
            <ButtonAcordion title={'Añadir'} style='calendar__button--black' >
              <ul className='calendar__submenu mt-3 animate__animated animate__fadeIn' >
                <li>
                    <p>Nueva cita</p>
                </li>
                <li>
                  <p>
                    Nuevo tiempo bloqueado
                  </p>
                </li>
                <li>
                  <p>
                    Nueva venta
                  </p>
                </li>
              </ul>
            </ButtonAcordion>
          </div>
  </section> */}
        <section className='w-100 d-flex p-3 justify-content-between' style={{backgroundColor:'#e6e6e9' }}>
          
          {
            user.map((i)=>(
              <UserCalendar 
                user={i.user}
                letra={i.letra}
              />
            ))
          }
        </section>
        {/*<Agenda />*/}
        <Button variant="primary"
          onClick={()=>setShow(true)}
        >Primary</Button>
        <MyCalendar />
        <ModalShadow 
          setShow={setShow}
          show={show}
        >
          <Card>
            <Card.Header>
              <h5>Nuevo tiempo bloqueado</h5>
            </Card.Header>
            <Card.Body>
              <FormCustom 
                title='Fecha'
                type='date'
                classCustom='w-100'
              />
              <FormSelection
                title='Mienbro del equipo'
                classCustom='w-100 mt-3'
              >
                <option value="2">Mell</option>
                <option value="1">Victor</option>
              </FormSelection>
              <div className='container row mt-3'> 
                <FormSelection
                  title='Hora de inicio'
                  classCustom='col-md-6'
                >
                  <option value="2">8:00am</option>
                  <option value="1">9:00am</option>
                </FormSelection>
                <FormSelection
                  title='Hora de fin'
                  classCustom='col-md-6'
                >
                  <option value="2">1:00pm</option>
                  <option value="1">1:00pm</option>
                </FormSelection>
              </div>
              <Form.Group className="mt-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Permitir las reservas online durante una hora bloqueada" />
              </Form.Group>
              
              <Form.Group className='w-100' controlId="formBasicEmail">
                <Form.Label className='label-title'>Descripcion</Form.Label>
                <Form.Control as="textarea" aria-label="With textarea" />
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <ButtonCustom 
                title='Guardar'
                styles={
                  {
                    width:'100px',
                    color:'white',
                    background:'#101928'

                  }
                }
              />
            </Card.Footer>
          </Card>
        </ModalShadow>
    </div>
  )
}

export default CalendarPage;