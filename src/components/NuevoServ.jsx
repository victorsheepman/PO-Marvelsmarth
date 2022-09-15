
import React from 'react'
import Card from 'react-bootstrap/Card';
import { FormCustom } from '../Atoms/FormCustom';
import { FormSelection } from '../Atoms/FormSelection';
import Form from 'react-bootstrap/Form';
import { Switch } from '../Atoms/Switch';
import { CheckExample } from '../Atoms/FormCheck';
export const NuevoServ = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes mt3' style={{color:'#f6c84c',fontSize:'35px'}}>
                Añade un nuevo servicio individual
            </h3>
        </header>
        <div className='container d-flex justify-content-between'>
            <section style={{width:'50%'}}>
            <Card className='col-md-6' style={{width:'95%', border:'unset'}}> 
                <Card.Header>
                    <h3 className='title-3'>Informacion basica</h3>
                    <p>Asigna miembros  del equipo al servicio y gestiona la comision</p>
                </Card.Header>
                <Card.Body className='d-flex flex-column align-items-center'>
                    <FormCustom
                        styles={
                            {
                                border:'none',
                                border:"1px solid black"
                            }
                        }
                                        title='Nombre del articulo'
                                        classCustom='col-md-10'
                                        classInput='nuevaTrasferencia__input'
                                        type='text'
                                        holder=''
                                />
                <FormSelection
                    classCustom='col-md-10 mt-4'
                    title='Tipo de tratamiento'
                > 
                    <option>Fijo </option>
                                
                </FormSelection>
                <span className='caption--sm mt-2'>
                    Escoge el tipo de tratamiento mas relevante. Esto no sera
                    visible para tus clientes
                </span>
                <h4 className='title-4 text-body' style={{fontSize:'16px', textAlign:'left'}}>Categoria de servicio</h4>
                <div className='col-md-8' style={{backgroundColor:'#f6c84c'}}>
                    <p className='text-center'>No se ha seleccionado ninguna categoria</p>

                </div>
                <Form>
                    <Form.Group className="mb mt-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripcion del servicio</Form.Label>
                        <Form.Control as="textarea" rows={3} cols={50} />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb mt-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripcion de los cuidados posteriores</Form.Label>
                        <Form.Control as="textarea" rows={3} cols={50} />
                    </Form.Group>
                </Form>


                </Card.Body>
            </Card>
            <Card className='mt-3' style={{width:'95%', border:'unset'}}> 
                    <Card.Header>
                        <h3 className='title-3'>Equipo</h3>
                        <p>Asigna miembros  del equipo al servicio y gestiona la comision</p>
                    </Card.Header>
                    <Card.Body>
                        
                        <CheckExample 
                            title='Seleccinar todo'
                        />
                        <div className='row'>
                            <CheckExample 
                                title='Wanda Caceres'
                                classCustom='mt-3 col-md-6'
                            />
                            <CheckExample 
                                title='Pamela'
                                classCustom='mt-3 col-md-6'
                            />
                        </div>
                        <div className='row'>
                            <CheckExample 
                                title='Victoria'
                                classCustom='mt-3 col-md-6'
                            />
                            <CheckExample 
                                title='Vargas'
                                classCustom='mt-3 col-md-6'
                            />
                        </div>
                        <div className='row'>
                            <CheckExample 
                                title='elianna'
                                classCustom='mt-3 col-md-6'
                            />
                            <CheckExample 
                                title='Mell'
                                classCustom='mt-3 col-md-6'
                            />
                        </div>
                        
                        <span className='text-primary mt-4'>Ver todos los miembros del equipo</span>
                    </Card.Body>
                    <Card.Footer style={{backgroundColor:'white'}}>
                        <h3 className='title-3'>
                            Comision de miembros del equipo
                        </h3>
                        <p>
                            Calcula la comision del miembro del equipo cuando se venda el producto
                        </p>
                        <Switch 
                            label='Activar comision de miembro del equipo'
                        />
                    </Card.Footer>
                </Card>
            </section>
            <section style={{width:'50%'}}>
                <Card className='col-md-6' style={{width:'95%', border:'unset'}}>
                    <Card.Header  style={{backgroundColor:'white'}}>
                        <h3 className='title-3'>Ajustes de venta</h3>
                    </Card.Header>
                    <Card.Body>
                        <h3 className='title-3'>
                            Establecer la tasa de impuestos
                        </h3>
                        <FormSelection
                            classCustom='col-md-12'
                            title='Impuesto'
                        > 
                            <option>Prederterminado </option>
                          
                        </FormSelection>
                    </Card.Body>
                    <Card.Footer style={{backgroundColor:'white'}}>
                        <h3 className='title-3'>
                            Ventas de cupones
                        </h3>
                        <Switch 
                            label='Activar ventas de cupones'
                        />
                         <FormSelection
                            classCustom='col-md-12 mt-3'
                            title='Periodo de caducidad del cupón'
                        > 
                            <option>Prederterminado </option>
                          
                        </FormSelection>

                    </Card.Footer>
                </Card>
                <Card className='mt-3' style={{width:'95%', border:'unset'}}>
                    <Card.Header>
                        <h3 className='title-3'>Reservas online</h3>
                        <p>Activas las reservas online, escoge para quien esta disponible el servicio y añade una breve descripcion</p>
                    </Card.Header>
                    <Card.Body>
                        <Switch 
                            label='Habilitar reservas online'
                        />
                    </Card.Body>
                </Card>
                <Card className='mt-3' style={{width:'95%', border:'unset'}}>
                    <Card.Header>
                        <h3 className='title-3'>Precios y duracion</h3>
                        <p>Añade las opciones y la duracion del servicio</p>
                    </Card.Header>
                    <Card.Body>

                        <div className='container mt-2' style={{backgroundColor:'#f2f2f7'}}>
                            <h3 className='title-3'>Opciones de precios 1</h3>
                            <div className='row'>
                            <FormSelection
                                classCustom='col-md-3'
                                title='Duracion'
                            > 
                                <option>1 min </option>
                              
                            </FormSelection>
                            <FormSelection
                                classCustom='col-md-3'
                                title='Tipo de precio '
                            > 
                                <option>Fijo </option>
                              
                            </FormSelection>
                            <FormCustom 
                                    styles={
                                        {
                                            border:'none',
                                            borderBottom:"1px solid black"
                                        }
                                    }
                                    title='Precio'
                                    classCustom='col-md-3'
                                    classInput='nuevaTrasferencia__input'
                                    type='number'
                                    holder='0.00'
                            />
                            <FormCustom 
                                    styles={
                                        {
                                            border:'none',
                                            borderBottom:"1px solid black"
                                        }
                                    }
                                    title='Precio especial'
                                    classCustom='col-md-3'
                                    classInput='nuevaTrasferencia__input'
                                    type='number'
                                    holder='0.00'
                            />

                            </div>
                            <FormCustom 
                                    styles={
                                        {
                                            border:'none',
                                            borderBottom:"1px solid black"
                                        }
                                    }
                                    title='Nombre de precio'
                                    classCustom='col-md-6 mt-3'
                                    classInput='nuevaTrasferencia__input'
                                    type='text'
                                    holder='Pelo largo'
                            />
                            <span className='text-primary' style={{marginTop:'2%'}}>Opciones de precios avanzadas</span>
                        </div>
                        <span className='text-primary mt-3' style={{marginTop:'2%'}}>Añadir opcion de precios</span>
                    </Card.Body>
                </Card>
            </section>
        </div>
       
    </div>
  )
}
