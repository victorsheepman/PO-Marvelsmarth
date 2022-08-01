import React, { useState } from 'react'
import { Seccion } from '../../components/Seccion/Seccion'
import Card from 'react-bootstrap/Card';
import { FormCustom } from '../../Atoms/FormCustom';
import { Switch } from '../../Atoms/Switch';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
export const Addsection = () => {
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState(false);
  return (
    <div className='addSection row'>
        <section className='col-md-2  seccion__aside'>
            <h4 className='title-4'>SECCIONES</h4>
            <Seccion 
              title='Detalles del cliente'
              img='distintivo'
            />
            <Seccion 
              title='Historial medico'
              img='kit'
              bootstrap='mt-3'
            />
            <Seccion 
              title='Preferencias de marketing'
              img='megafono'
              bootstrap='mt-3'
              handle={()=>setModal(true)}
            />
            <div className='seccion__line mt-3'></div>
            <Seccion 
              title='Seccion Personalizada'
              img='chat'
              bootstrap='mt-3'
              handle={
                ()=>setShow(true)
              }
            />
        </section>
        <section className='col-md-10     seccion__content'>
            <header className='listaClientes__header flex-column'>
                <span className='caption-sm'style={{color:'#f6c84c'}}>Paso 1 de 2</span>
                <h3 className='ListaClientes' style={{color:'#f6c84c'}}>Agregar secciones a tu formulario  de consulta</h3>
            </header>
            <div className='calendar__header mt-4 justify-content-center'>
                <div className='addSection__buttons'>
                    <button className='addSection__button'>Editor</button>
                    <button className='addSection__button--yellow'>Vista previa</button>
                </div>                
            </div>
            <div className='container '>
                <div className='addSection__pie'>
                    <h3 className='title-3'>
                        Seccion 1 de 1: Seccion personalizada
                    </h3>
                   
                </div> 
                <Card>
                    <Card.Header>
                        <h3 className='title-3'>Titulo de prueba</h3>
                        <span className='caption--sm text-body'>Descripcion de prueba</span>

                    </Card.Header>
                    <Card.Body>
                        <div className='container bg-light'>
                            <div className='container row'>
                                <FormCustom 
                                    title='Pregunta'
                                    holder='Nueva pregunta'
                                    classCustom='col-md-6'
                                
                                />
                                <FormCustom 
                                    title='Tipo de respuesta'
                                    holder='Pregunta corta'
                                    classCustom='col-md-6'
                                />
                            </div>
                            <div className='container mt-4 d-flex align-items-center'>
                                <Switch
                                    label='Obligatoria'
                                />
                                <div className='w-50 d-flex justify-content-between align-items-center' style={{marginLeft:"25%"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ff0000" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-back" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>
                                    </svg>
                                    <ButtonCustom 
                                        styles={
                                            {
                                                width: '40px',
                                                height:'40px',
                                                background:'black',
                                                color:'white'
                                            }
                                           
                                        }
                                        title='X'
                                    
                                    />
                                    <ButtonCustom 
                                        styles={
                                            {
                                                width: '40px',
                                                height:'40px',
                                                background:'white',
                                                color:'black'
                                            }
                                           
                                        }
                                    
                                    >
                                        
                                    </ButtonCustom>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Footer className='d-flex align-item-center bg-white pt-5'>
                        <p className='label-title text-primary'>Agregar nueva pregunta u otro item</p>
                    </Card.Footer>

                </Card>
            </div>
            <div className='container row mt-4 justify-content-between'>
                <div className='col-md-8 d-flex align-items-center justify-content-center addSection__footer '  >
                    <h4 className='title-3'> Arrastrar y suelta o click aqui para agregar una seccion</h4>

                </div>
                <div className='col-md-2 d-flex align-items-center justify-content-center addSection__footer '>
                <h4 className='title-3'> Siguiente paso</h4>
                </div>

            </div>
        </section>
        
        
    </div>
  )
}
