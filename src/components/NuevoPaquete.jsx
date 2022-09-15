    import React from 'react'
    import Card from 'react-bootstrap/Card';
    import { FormCustom } from '../Atoms/FormCustom';
    import Form from 'react-bootstrap/Form';
    import { FormSelection } from '../Atoms/FormSelection';
import { Switch } from '../Atoms/Switch';
    export const NuevoPaquete = () => {
    return (
        <div className='historialServicios'>
            <header className='listaClientes__header'>
                <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                    Anade un nuevo paquete
                </h3>
            </header>
            <div className='container d-flex justify-content-between'>
                <section style={{width:'50%'}}>
                    <Card  style={{width:'95%', border:'unset', marginTop:'2%'}}> 
                        <Card.Header style={{backgroundColor:'white'}}>
                            <h3 className='title-3'>Informacion Basica</h3>
                            <p>Ponle nombre al paquete, anade una descripcion y escoge para quien esta disponible</p>
                        </Card.Header>
                        <Card.Body>
                            <FormCustom
                                styles={
                                    {
                                        border:'none',
                                        border:"1px solid black"
                                    }
                                }
                                title='Nombre del paquete'
                                classCustom='col-md-10'
                                classInput='nuevaTrasferencia__input'
                                type='text'
                                holder=''
                            />
                            <h4 className='title-4 text-body mt-3' style={{fontSize:'16px', textAlign:'left'}}>Categoria de servicio</h4>
                            <div className='col-md-8 mt-2' style={{backgroundColor:'#f6c84c'}}>
                                <p className='text-center'>No se ha seleccionado ninguna categoria</p>

                            </div>
                            <Form>
                                <Form.Group className="mb mt-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Descripcion del paquete</Form.Label>
                                    <Form.Control as="textarea" rows={3} cols={50} />
                                </Form.Group>
                            </Form>
                            <FormSelection
                                classCustom='col-md-10 mt-4'
                                title='Paquete disponible para'
                            > 
                                <option>Todos </option>
                                
                            </FormSelection>
                        </Card.Body>
                    </Card>
                    <Card style={{width:'95%', border:'unset', marginTop:'2%'}}>
                        <Card.Header style={{backgroundColor:'white'}}>
                            <h3 className='title-3'>Reservas online</h3>
                            <p>Activas las reservas online, escoge para quien esta disponible el servicio y añade una breve descripcion</p>
                        </Card.Header>
                        <Card.Body>
                            <Switch 
                                label='Habilitar reservas online'
                            />
                        </Card.Body>
                    </Card>
                </section>
                <section style={{width:'50%'}}>
                    <Card style={{marginTop:'2%'}}>
                        <Card.Header style={{backgroundColor:'white'}}>
                            <h3 className='title-3'>Asigna servicios a tu paquete</h3>
                            <p>Ponle nombre al paquete, anade una descripcion y escoge para quien esta disponible</p>
                        </Card.Header>
                        <Card.Body style={{backgroundColor:'white'}}>
                            <span className='text-primary'>Seleccionar servicio</span>
                        </Card.Body>
                        <Card.Footer style={{backgroundColor:'white'}}>
                            <h3 className='title-3'>Otras opciones</h3>

                            <FormSelection
                                classCustom='col-md-10 mt-1'
                                title='Tipo de cita'
                            > 
                                <option>Reservado de forma consecutiva </option>
                                
                            </FormSelection>
                            <span className='caption--sm text-sm mt-2' >
                                Los servicios pueden reservarse en orden consecutivo, 
                                o paralelo con la misma hora de inicio. Mas informacion sobre los paquetes.
                            </span>

                        </Card.Footer>
                    </Card>
                    <Card style={{marginTop:'2%'}}>
                        <Card.Header style={{backgroundColor:'white'}}>
                            <h3 className='title-3'>Precio</h3>
                            <p>Anadir al precio del paquete</p>
                        </Card.Header>
                        <Card.Body>
                            <FormSelection
                                classCustom='col-md-10 mt-1'
                                title='Tipo de precio'
                            > 
                                <option>Precio del servicio</option>
                                
                            </FormSelection>
                            <FormCustom 
                                    styles={
                                        {
                                            border:'none',
                                            border:"1px solid black"
                                        }
                                    }
                                    title='Precio al menor'
                                    classCustom='col-md-10 mt-4'
                                    classInput='nuevaTrasferencia__input'
                                    type='number'
                                    holder='0.00'
                            />
                        </Card.Body>
                    </Card>
                </section>

            </div>
        </div>
    )
    }
