import React from 'react'
import Card from 'react-bootstrap/Card';
import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { Switch } from '../../Atoms/Switch';
import { CheckExample } from '../../Atoms/FormCheck';
export const AddCliente = () => {
  return (
    <div className='add'>
        <section className='add__form'>
            <h2 className='add__form__title subtitle'>Añadir nuevo Cliente</h2>
            <Card>
                <Card.Header>
                    <h3>Informacion Basica</h3>
                </Card.Header>
                <Card.Body>
                    <div className='container row'>
                        <FormCustom 
                            title='Nombre'
                            classCustom='col-md-4'
                            type='text'
                            holder='nombre del cliente'
                        />
                        <FormCustom 
                            title='Apellido'
                            classCustom='col-md-4'
                            type='text'
                            holder='apellido del cliente'
                        />
                        <FormCustom 
                            title='ID'
                            classCustom='col-md-4'
                            type='text'
                            holder='id del cliente'
                        />
                    </div>
                    <div className='container row mt-3'>
                            <FormSelection 
                                title='Genero'
                                classCustom='col-md-4'
                            >
                                <option value="Hombre">Hombre</option>
                                <option value="Mujer">Mujer</option>
                            </FormSelection>
                            <FormCustom 
                                title='Fecha de nacimiento'
                                classCustom='col-md-4'
                                type='date'
                                holder='id del cliente'ñ
                            />
                              <FormCustom 
                                title='Año'
                                classCustom='col-md-4'
                                type='text'
                                holder='Año'
                                alpha={true}
                            />
                    </div>
                    <div className='container row mt-3 '>
                        <Form.Group className="col-md-4 ">  
                            <Form.Label className='label-title'>Numero de telefono</Form.Label>
                            <InputGroup>
                              
                                <DropdownButton
                                    variant="outline-secondary"
                                    title="+1"
                                    id="input-group-dropdown-1"
                                >
                                    <Dropdown.Item href="#">+58</Dropdown.Item>
                                    <Dropdown.Item href="#">+23</Dropdown.Item>
                                </DropdownButton>
                                <Form.Control aria-label="Text input with dropdown button" />
                            </InputGroup>
                        </Form.Group>
                      
                        <FormCustom 
                            title='Email'
                            classCustom='col-md-4'
                            type='email'
                            holder='example@gmail.com'
                        />
                         <FormCustom 
                            title='Codigo Postal'
                            classCustom='col-md-4'
                            type='text'
                            holder='codigo postal'
                            alpha={true}
                        />
                    </div>
                    <div className='container row mt-3'>
                        <Form.Group className="col-md-4 ">  
                            <Form.Label className='label-title'>Telefono de Emergencia</Form.Label>
                                <InputGroup>
                                    
                                    <DropdownButton
                                        variant="outline-secondary"
                                            title="+1"
                                            id="input-group-dropdown-1"
                                        >
                                            <Dropdown.Item href="#">+58</Dropdown.Item>
                                            <Dropdown.Item href="#">+23</Dropdown.Item>
                                    </DropdownButton>
                                    <Form.Control aria-label="Text input with dropdown button" />
                                </InputGroup>
                        </Form.Group>
                        <FormCustom 
                            title='Fecha de registro'
                            classCustom='col-md-4'
                            type='date'
                            holder='id del cliente'
                        /> 
                        <FormSelection 
                            title='¿Aplica para credito?'
                            classCustom='col-md-4'
                        >
                            <option value="Hombre">Si</option>
                            <option value="Mujer">No</option>
                        </FormSelection>

                    </div>
                     <div className='container row mt-3 '>
                        <FormCustom 
                            title='Provincia'
                            classCustom='col-md-4'
                            type='text'
                            holder='Provincia'
                        />
                        <FormCustom 
                            title='Sector'
                            classCustom='col-md-4'
                            type='text'
                            holder='Sector del cliente'
                        />
                        <FormCustom 
                            title='Ciudad'
                            classCustom='col-md-4'
                            type='text'
                            holder='Ciudad del cliente'
                        />
                    </div> 
                    <div className='container row mt-3 '>
                        <FormCustom 
                            title='Pais'
                            classCustom='col-md-4'
                            type='text'
                            holder='Pais del cliente'
                        />
                        <FormCustom 
                            title='Region'
                            classCustom='col-md-4'
                            type='text'
                            holder='Region del cliente'
                        />
                        <FormCustom 
                            title='Distrito'
                            classCustom='col-md-4'
                            type='text'
                            holder='Distrito del cliente'
                        />
                    </div> 
                    <div className='container row mt-3 ' >
                        <FormCustom 
                            title='Tipo de Cliente'
                            classCustom='col-md-4'
                            type='text'
                            holder='Distrito del cliente'
                        />
                       
                        <ButtonCustom 
                            classe='col-md-4 mt-6'
                            styles={{
                                height:'40px',
                                background:'#101928',
                                color:'#ffffff',
                                margin:'31px'
                            }}
                            title='Guardar informacion'
                            
                        />
                    </div>
                </Card.Body>
            </Card>
            <Card className='mt-3'>
                <Card.Header style={{backgroundColor:'white'}}>
                    <h3>Informacion importante del cliente</h3>
                </Card.Header>
                <Card.Body>
                    <p className='body-md text-left text-body'>
                        La informacion importante del cliente solo sera visible para ti y para los miembros del equipo
                    </p>
                    <Form>
                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>informacion del cliente</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder='Agregue unas notas sobre la cita' />
                        </Form.Group>
                    </Form>
                    <CheckExample 
                        title='Mostrar en todas las reservas'
                    />
                </Card.Body>
            </Card>
           
            
        </section>
        <section className='add__list'>
            <Card>
                <Card.Header style={{paddingLeft:'10%', paddingRight:'10%',}}>
                    <h4>
                        Notificaciones
                    </h4>
                    <p>
                        Eligue como quieres mantener el dia al cliente sobre  sus citas y ventas,
                        utilizando cupones y suscripciones
                    </p>

                </Card.Header>
                <Card.Body>
                    <div className='container'>
                        <h5>Notificaciones del cliente</h5>
                        <Switch 
                            label='Enviar notificaciones por email'
                        />
                    </div>
                    <div className='container mt-3'>
                        <h5>Notificaciones de marketing</h5>
                        <Switch 
                            label='El cliente acepta recibir las comunicaciones de marketing por email'
                        />
                        <Switch 
                            label='El cliente acepta recibir las comunicaciones de marketing por SMS'
                        />
                    </div>
                </Card.Body>
                <Card.Footer >
                    <FormSelection 
                        title='Idioma preferido'
                        classCustom='w-100'
                    
                    >
                        <option value="2">Ingles</option>
                        <option value="1">Español</option>
          
                    </FormSelection>
                </Card.Footer>
            </Card>

        </section>

    </div>
  )
}
