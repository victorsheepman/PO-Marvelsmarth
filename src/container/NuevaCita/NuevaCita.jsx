import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';
import InputGroup from 'react-bootstrap/InputGroup';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { ModalShadow } from '../../Atoms/ModalShadow';
import { UserCalendar } from '../../components/UserCalendar/UserCalendar';
import { user } from './helpers';

export const NuevaCita = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='cita'>
      <section className='cita__form'> 
        <h2 className='cita__form__title'>Nueva Cita</h2>
        <span className='cita__caption'>jueves, 12 may. 2022</span>
        <Card style={{marginBottom:'8%'}}>
          <Card.Body className='row w-100' >
            <FormSelection>
              <option>7:20 am</option>
              <option value="1">8:20 am</option>
              <option value="2">9:20 am</option>
              <option value="3">9:20 am</option>
            </FormSelection>
            <FormSelection 
              classCustom='mb-3 col-md-8'
              title='Servicio'
            >
              <option>Selecion un servicio</option>
                <option value="1">8:20 am</option>
                <option value="2">9:20 am</option>
                <option value="3">9:20 am</option>
            </FormSelection>
            <FormSelection
              classCustom='col-md-4'
              title='Duracion'
            > 
              <option>7 min </option>
              <option value="1">8 min</option>
              <option value="2">9 min</option>
              <option value="3">9 min</option>
            </FormSelection>
            <FormSelection
              classCustom='col-md-8'
              title='Miembre del equipo'
            >

            </FormSelection>
          </Card.Body>
        </Card>

        <span className='cita__caption' >notas de la cita</span>
        <Card>
          <Card.Body>
            <textarea style={{witdh:'100%'}}>
              
            </textarea>
          </Card.Body>
        </Card>
      </section>
      <section className='cita__list'>
          <Card className='cita__list__content' >

            <Card.Header>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" onClick={()=>setShow(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Card.Header>
            <Card.Body className='cita__list__content__body'>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              <p className='label-title' style={{textAlign:'center', marginTop:'5px'}}>
                Utiliza la busqueda para añadir un cliente, o
                dejar  el campo vacio para guardarlo  como sin cita.
              </p>
            </Card.Body>
            <Card.Footer style={
              {
                justifyContent:'space-between', 
                display:'flex', 
                flexWrap:'wrap',
                
              }
            }>
              <div className='cita__list__content__footer'> 
                <p className='label-title' style={{textAlign:'center', marginTop:'5px'}}>
                    Total: Gratis(0min)
                </p>
              </div>
               <ButtonCustom 
                title='Pagar rapido'
                styles={{
                  color:'white',
                  background:'#84888c',
                  width: '170px'
                }}
              />
              <ButtonCustom 
                title='Guardar cita'
                styles={{
                  color:'white',
                  background:'#101928',
                  width: '170px'
                }}
              />
            </Card.Footer>
          </Card>
      </section>
      <ModalShadow 
        show={show}
        setShow={setShow}
      >
         <Card className='cita__list__content' >

          <Card.Header>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" onClick={()=>setShow(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              </InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Card.Header>
          <Card.Body className='cita__list__content__body overflow-auto'>
            <p className='label-title' style={{textAlign:'center', marginTop:'5px', color:'#f6c84c'}}>
              + Crear nuevo cliente
            </p>
            {
              user.map((i)=>(
                <UserCalendar
                  letra={i.letra}
                  user={i.user}
                  flex={true}
                />
              ))
            }
          </Card.Body>
          </Card>

      </ModalShadow>
    </div>
  )
}
