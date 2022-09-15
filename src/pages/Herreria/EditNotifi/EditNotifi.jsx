import React from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../../Atoms/ButtonCustom';
import { CheckExample } from '../../../Atoms/FormCheck';
import { FormCustom } from '../../../Atoms/FormCustom';
export const EditNotifi = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{marginRight:'4%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Editar notificaciones
            </h3> 
        </header>
        <div className='row  ' style={{width:'100%'}}>
            <section className='col-md-6'>
            <Card style={{width:'100%', border:'unset', marginTop:'20px', backgroundColor:'#f6c84c'}}>
              
                <Card.Body>
                        <p className='config-span'>Personaliza el contenido de tus correos, eligiendo un plan de pago</p>
                    </Card.Body>
            </Card>

            </section>
            <section className='col-md-6'>
                <Card style={{width:'100%', border:'unset', marginTop:'20px'}}>
                    <Card.Header>
                        <h3 className='title-3'>
                            Notificación para facturas próximas a vencerse                     
                        </h3>
                    </Card.Header>
                    <Card.Body>
                        <CheckExample 
                            title='Activar notificaciones antes del vencimiento'
                        />
                        <FormCustom 
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black",
                                    //backgroundColor:'#f6c84c',
                                                                
                                }
                            }
                            title='Dias'
                            classCustom='d-flex col-md-4 align-items-baseline mt-3'
                            classInput='nuevaTrasferencia__input'
                            type='text'
                            holder='ej. Muebles'
                        />
                        <img src="../../assets/images/email.png" alt="" srcset="" style={{width:'100%'}} />
                    </Card.Body> 
                </Card>
            </section>
            

        </div>
        <div className='container d-flex mt-4 justify-content-end'>
            <ButtonCustom 
                styles={{
                    background: '#101928',
                    color: '#f6c94c',
                }}
                title='Cancelar'
            />   
            <ButtonCustom 
                styles={{
                    background:'#f6c94c',
                    color:'#101928',
                    marginLeft:'4%'
                }}
                title='Guardar'
            />  
        </div>
    </div>
  )
}
