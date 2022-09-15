import React, { useState } from 'react'

import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../Atoms/FormCheck';
import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';
import { CardFooter } from 'reactstrap';
import { VentasCompra } from './subcontainer/Ventas';
import { ContactoDirecciones } from './subcontainer/Contacto';
import { Contabilidad } from './subcontainer/Contabilidad';
import { Notas } from './subcontainer/Notas';
import { ModalShadow } from '../../Atoms/ModalShadow';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import Modal from 'react-bootstrap/Modal';
export const NuevoProveedor = () => {
    const [first, setfirst] = useState(1);
    const [modal, setModal] = useState(false);
    const handleOpen = ()=> setModal(true)
    const handleClose= ()=> setModal(false)

    
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Proveedores / nuevo
            </h3>
        </header>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
            <Card.Body className='row'>
                <section className='col-md-6'>
                    <div className='d-flex px-2'>
                        <CheckExample 
                            title='Individual'
                        />
                        <CheckExample 
                            title='Compania'
                        />
                        
                    </div>
                    <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title=''
                        classCustom='col-md-12 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Brandon Freeman'
                    />
                    <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title=''
                        classCustom='col-md-12 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Nombre de la empresa'
                    />
                    <div className='row container '>
                        <section className='col-md-4'>
                            <FormSelection 
                                styles={
                                    {
                                        border:'none',
                                        borderBottom:"1px solid black"
                                        
                                    }
                                }
                                title=''
                                classCustom='col-md-6 align-items-baseline'
                                type='text'
                                holder=''
                                >
                                <option>Contacto</option>
                            </FormSelection>
                        </section>
                        <section className='col-md-8'>
                            <FormCustom
                                styles={
                                    {
                                        border:'none',
                                        borderBottom:"1px solid black"
                                    }
                                }
                                title=''
                                classCustom='col-md-12 mt-4 d-flex align-items-baseline'
                                classInput='nuevaTrasferencia__input'
                                type='text'
                                holder='Calle...'
                            />
                             <FormCustom
                                styles={
                                    {
                                        border:'none',
                                        borderBottom:"1px solid black"
                                    }
                                }
                                title=''
                                classCustom='col-md-12 mt-4 d-flex align-items-baseline'
                                classInput='nuevaTrasferencia__input'
                                type='text'
                                holder='Calle 2...'
                            />
                            <div className='container row' style={{padding:'0px'}}>
                                <FormCustom
                                    styles={
                                        {
                                            border:'none',
                                            borderBottom:"1px solid black"
                                        }
                                    }
                                    title=''
                                    classCustom='col-md-4 mt-4 d-flex align-items-baseline'
                                    classInput='nuevaTrasferencia__input'
                                    type='text'
                                    holder='Calle 2...'
                                />
                                <FormCustom
                                    styles={
                                        {
                                            border:'none',
                                            borderBottom:"1px solid black"
                                        }
                                    }
                                    title=''
                                    classCustom='col-md-4 mt-4 d-flex align-items-baseline'
                                    classInput='nuevaTrasferencia__input'
                                    type='text'
                                    holder='Estado'
                                />
                                <FormCustom
                                    styles={
                                        {
                                            border:'none',
                                            borderBottom:"1px solid black"
                                        }
                                    }
                                    title=''
                                    classCustom='col-md-4 mt-4 d-flex align-items-baseline'
                                    classInput='nuevaTrasferencia__input'
                                    type='text'
                                    holder='Cp'
                                />

                            </div>
                            <FormSelection 
                                styles={
                                    {
                                        border:'none',
                                        borderBottom:"1px solid black"
                                        
                                    }
                                }
                                title=''
                                classCustom='col-md-12 align-items-baseline'
                                type='text'
                                holder=''
                                >
                                <option>Estado</option>
                            </FormSelection>
                        </section>
                    </div>
                    <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Identificacion fiscal'
                        classCustom='col-md-12 mt-4 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Cp'
                    />
                    <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Limite de credito minimo'
                        classCustom='col-md-12 mt-4 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0.0'
                    />
                    <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Limite de credito maximo'
                        classCustom='col-md-12 mt-4 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0.0'
                    />
                    
                </section>
                <section className='col-md-6'>
                    <figure className='producto__image'>
                      { /* <img src="../../assets/images/imagen.png" alt="" srcset="" /> */}
                    </figure>
                    <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Puesto de trabajo'
                        classCustom='col-md-12 mt-4 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Por ejemplo Director de ventas'
                    />
                    <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Telefono'
                        classCustom='col-md-12 mt-4 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder=''
                    />
                    <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Movil'
                        classCustom='col-md-12 mt-4 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Por ejemplo Director de ventas'
                    />
                    <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Email    '
                        classCustom='col-md-12 mt-4 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='email'
                        holder='Por ejemplo Director de ventas'
                    />
                    <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Sitio Web'
                        classCustom='col-md-12 mt-4 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Por ejemplo Director de ventas'
                    />
                    <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                                        
                            }
                        }
                        title='Titulo'
                        classCustom='col-md-12 d-flex align-items-baseline'
                        type='text'
                        holder=''
                    >
                        <option>Jefe</option>
                    </FormSelection>
                    <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                                        
                            }
                        }
                        title='Categorias'
                        classCustom='col-md-12 d-flex align-items-baseline'
                        type='text'
                        holder=''
                    >
                        <option>Etiquetas</option>
                    </FormSelection>
                </section>
                <nav className=' container'>
                    <ul className='d-flex '>
                        <li className={first == 1 ? 'nuevoProductos__item--white' : 'nuevoProveedor__item'} onClick={()=>setfirst(1)}>
                                Informacion general
                        </li>
                        <li className={first == 2 ? 'nuevoProductos__item--white' : 'nuevoProveedor__item'} onClick={()=>setfirst(2)}>
                                Ventas y Compra
                        </li>
                        <li className={first == 3 ? 'nuevoProductos__item--white' : 'nuevoProveedor__item'} onClick={()=>setfirst(3)}>
                                Contabilidad
                        </li>
                        <li className={first == 4 ? 'nuevoProductos__item--white' : 'nuevoProveedor__item'} onClick={()=>setfirst(4)}>
                              Notas internas
                        </li>
                    </ul>

                </nav>
            </Card.Body>
            <Card.Footer style={{backgroundColor:'white'}}>
                {
                    first == 2 && <VentasCompra />
                }
                {
                    first == 1 && <ContactoDirecciones />
                }
                {
                    first == 3 && <Contabilidad />
                } 
                {
                    first == 4 && <Notas />
                } 
            </Card.Footer>
            
        </Card>
        <Modal show={modal} size="lg" fullscreen={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <h3 className='title-3'>
                    Crear Contacto
                </h3>
                
            </Modal.Header>
            <Modal.Body>
                <div className='container-lg d-flex align-items-center justify-content-around'>
                    <CheckExample 
                        title='contacto'
                    />
                    <CheckExample 
                        title='Direccion de factura'
                    />
                    <CheckExample 
                        title='Direccion de entrega'
                    />
                    <CheckExample 
                        title='otra Direccion'
                    />
                    <CheckExample 
                        title='Direccion privada'
                    />
                </div> 
                <div className='row'>
                    <section className='col-md-6 px-2'>
                        <FormCustom 
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                }
                            }
                            title='Nombre del contacto'
                            classCustom='col-md-12 d-flex'
                            classInput='nuevaTrasferencia__input'
                            type='text'
                            holder=''
                        /> 
                        <FormCustom 
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                }
                            }
                            title='Telefono'
                            classCustom='col-md-12 d-flex'
                            classInput='nuevaTrasferencia__input'
                            type='text'
                            holder=''
                        />
                        <FormCustom 
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black",
                                }
                            }
                            title='Movil'
                            classCustom='col-md-12 d-flex'
                            classInput='nuevaTrasferencia__input'
                            type='text'
                            holder=''
                        />  
                        <FormCustom 
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                }
                            }
                            title='Correo electronico'
                            classCustom='col-md-12 d-flex'
                            classInput='nuevaTrasferencia__input'
                            type='text'
                            holder=''
                        />  
                    </section>
                    <section className='col-md-6 px-2'>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Direccion'
                        classCustom='col-md-12 d-flex'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder=''
                    />
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title=''
                        classCustom='col-md-12 d-flex'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder=''
                    /> 
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title=''
                        classCustom='col-md-12 d-flex'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder=''
                    /> 
                   <div className='container row' style={{padding:'0%'}}>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title=''
                        classCustom='col-md-4 d-flex'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='ciudad'
                    />
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title=''
                        classCustom='col-md-4 d-flex'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Estado'
                    />
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title=''
                        classCustom='col-md-4 d-flex'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='C,P'
                    /> 
                   </div>
                   <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title=''
                        classCustom='col-md-12 d-flex'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Pais'
                    />


                </section>
                 
              </div>
            </Modal.Body>
            
             
                
              <Modal.Footer >
                <FormCustom 
                    styles={
                        {
                            border:'none',
                            borderBottom:"1px solid black"
                        }
                    }
                    title='Notas'
                    classCustom='col-md-12 '
                    classInput='nuevaTrasferencia__input'
                    type='text'
                    holder='Pais'
                />
                <div className='container d-flex justify-content-end align-items-center'>

               
                    <ButtonCustom 
                        styles={{
                            background: 'white',
                            color: 'black',
                        }}
                        title='Cancelar'
                            
                            
                    />  
                    <ButtonCustom 
                        styles={{
                            background: 'black',
                            color: '#f6c94c',
                            marginLeft:'2%'
                        }}
                        title='Guardar'
                        handle={handleOpen}
                            
                    />
                </div>
              </Modal.Footer>
              
        </Modal>
        
        
    </div>
  )
}
