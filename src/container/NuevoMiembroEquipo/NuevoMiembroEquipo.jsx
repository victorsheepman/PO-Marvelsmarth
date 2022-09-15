import React from 'react'
import Card from 'react-bootstrap/Card';
import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';
import Form from 'react-bootstrap/Form';
import { Switch } from '../../Atoms/Switch';
import { Color } from '../../Atoms/Color';

export const NuevoMiembroEquipo = () => {
   
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{padding:'4%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>anadir nuevo miembro del equipo</h3>
        </header>
        <div className='container d-flex justify-content-between'>
            <section style={{width:'50%'}}>
                <Card style={{width:'100%', border:'unset'}}> 
                    <Card.Header>
                        <h3 className='title-3'>Informacion Basica</h3>
                    </Card.Header>
                    <Card.Body >
                        <div className='d-flex'>
                            <figure className='profile'>

                            </figure>
                            <div style={{marginLeft:'12px'}}>
                                <div className='row'>
                                    <FormCustom 
                                        styles={
                                            {
                                                border:'none',
                                                border:"1px solid black",
                                                //backgroundColor:'#f6c84c',
                                                        
                                            }
                                        }
                                        title='Nombre'
                                        classCustom='col-md-6 align-items-baseline'
                                        classInput='nuevaTrasferencia__input'
                                        type='text'
                                        holder='ej. Muebles'
                                    />
                                    <FormCustom 
                                        styles={
                                            {
                                                border:'none',
                                                border:"1px solid black",
                                                //backgroundColor:'#f6c84c',
                                                        
                                            }
                                        }
                                        title='Apellido'
                                        classCustom='col-md-6 align-items-baseline'
                                        classInput='nuevaTrasferencia__input'
                                        type='text'
                                        holder='ej. Muebles'
                                    />
                                </div>
                                <div className='row mt-3'>
                                <FormSelection 
                                    styles={
                                        {
                                            border:'none',
                                            border:"1px solid black"
                                                
                                        }
                                    }
                                    title='Rol/Cargo'
                                    classCustom='col-md-6 align-items-baseline'
                                    type='text'
                                    holder=''
                                >
                                    <option></option>
                                </FormSelection>
                                <FormSelection 
                                    styles={
                                        {
                                            border:'none',
                                            border:"1px solid black"
                                                
                                        }
                                    }
                                    title='Perfil'
                                    classCustom='col-md-6 align-items-baseline'
                                    type='text'
                                    holder=''
                                >
                                    <option></option>
                                </FormSelection>
                                
                                </div>
                            </div>
                        </div>
                        <FormCustom 
                            styles={
                                {
                                    border:'none',
                                    border:"1px solid black",
                                    //backgroundColor:'#f6c84c',
                                                        
                                }
                            }
                            title='Titulo de miembro'
                            classCustom='col-md-12 align-items-baseline mt-3'
                            classInput='nuevaTrasferencia__input'
                            type='text'
                            holder='ej. Muebles'
                        />
                        <span className='caption--sm'>
                            Este titulo sera visible para los clientes.  
                        </span>
                        <Form className='mt-3'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Notas</Form.Label>
                                <Form.Control as="textarea" rows={3} cols={50} />
                            </Form.Group>
                        </Form>

                    </Card.Body>
                    <Card.Footer>
                        <h3 className='title-3'>Contacto</h3>
                        <p className='caption' style={{fontSize:'16px', textAlign:'left'}}>
                            La informacion personal de los miembros es confidencial y no sera compartida con los clientes
                        </p>
                        <div className='row'>
                            <FormCustom 
                                styles={
                                    {
                                        border:'none',
                                        border:"1px solid black",
                                        //backgroundColor:'#f6c84c',
                                                            
                                    }
                                }
                                title='Correo electronico'
                                classCustom='col-md-6 align-items-baseline mt-3'
                                classInput='nuevaTrasferencia__input'
                                type='text'
                                holder='ej. Muebles'
                            />
                            <FormCustom 
                                styles={
                                    {
                                        border:'none',
                                        border:"1px solid black",
                                        //backgroundColor:'#f6c84c',
                                                            
                                    }
                                }
                                title='numero de movil'
                                classCustom='col-md-6 align-items-baseline mt-3'
                                classInput='nuevaTrasferencia__input'
                                type='number'
                                holder='ej. Muebles'
                            />

                        </div>

                    </Card.Footer>
                </Card>
                
            </section>
            <section  style={{width:'50%'}}>
                <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
                    <Card.Header>
                        <h3 className='title-3'>Trabaja en</h3>
                        <p className='caption' style={{fontSize:'16px', textAlign:'left'}}>
                           Escoge la locacion donde este miembro trabaja
                        </p>
                    </Card.Header>
                    <Card.Body className='d-flex'>

                        <figure className='profile--sm'>

                        </figure>
                        <div style={{marginLeft:'13px'}}>
                            <h4 className='title-3 text-body' style={{marginTop:'-12px'}} >
                                Wanda cacceres
                            </h4>
                            <span className='caption--sm' style={{marginTop:'-50px', fontSize:'14px'}}>
                                Avenida Abraham Lincoln, Santo Domingo (Piantini), Distrito Nacional
                            </span>
                        </div>
                                
                    </Card.Body>
                </Card>
                <Card className='mx-auto' style={{width:'95%', border:'unset', marginTop:'5%'}}>
                    <Card.Header>
                        <h3 className='title-3'>Reservas</h3>
                    </Card.Header>
                    <Card.Body>
                        <Switch 
                            label='Habilitar las citas en el calendario'
                        />
                         <h3 className='title-3'>Color del calendario</h3>
                            <p>Escoge el color que representaran al miembro del equipo en la citas del calendario</p>
                    </Card.Body>
                    <Card.Footer>
                        <h4 className='label-title'>Seleccionar color</h4>
                        <div className='d-flex justify-content-around'>
                            <Color 
                                color='#ff9cbb'
                            />
                             <Color 
                                color='#e2a6e6'
                            />
                            <Color 
                                color='#bbc1e8'
                            />
                            <Color 
                                color='#81bcff'
                            />
                            <Color 
                                color='#91e3ee'
                            />
                            <Color 
                                color='#6cd5cb'
                            />
                            <Color 
                                color='#a6e5bd'
                            />
                            

                            

                        </div>
                    </Card.Footer>
                </Card>
                <Card className='mx-auto' style={{width:'95%', border:'unset', marginTop:'5%'}}>
                    <Card.Header>
                        <h3 className='title-3'>Servicios</h3>
                        <p>
                            Anade los servicios que este miembro ofrece.
                        </p>
                    </Card.Header>
                    <Card.Body>
                        <div className='col-md-10 mt-2 d-flex justify-content-between align-items-center' style={{backgroundColor:'#f6c84c'}}>
                            <p className='text-center'>Todos los servicios(26)</p>
                            <h5 className='label-title'>Editar</h5>
                        </div>
                         <h3 className='title-3' style={
                            {
                                marginTop:'4px'
                            }
                         }>Comision</h3>
                            <p>Determina cuanta comision este miembro realiza. Puedes determinar el valor de la comision basada en diferentes
                                rangos de venta por servicios, productos, vouchers y membresias.
                            </p>
                    </Card.Body>
                    <Card.Footer>
                        <span className='text-primary'>Agregar comision</span>
                    </Card.Footer>

                </Card>
            </section>
        </div>
        
    </div>
  )
}
