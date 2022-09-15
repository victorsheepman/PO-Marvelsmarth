import React from 'react'
import Card from 'react-bootstrap/Card';
import { Barra } from '../../../Atoms/Barra';
import { ButtonCustom } from '../../../Atoms/ButtonCustom';
import { CheckExample } from '../../../Atoms/FormCheck';
export const NotificacionCliente = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={
                {
                    color:'#f6c84c',
                    fontSize:'35px'
                }
            }>
                Notificacion de cliente
            </h3>
        </header>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
            <Card.Body className='d-flex'>
                <div style={{width:'30%'}}>
                    <h3 className='title-3 text-center mt-3'>Notificacion por correo electronico activadas</h3>
                    <p className='text-center' style={{marginTop:'3%'}}>Actualmente, tus notificacion solo se envian por correo electronico</p>
                </div>
                <div style={{width:'70%', paddingLeft:'4%'}}>
                    <h3 className='title-3  mt-3'>Configura tu perfil de MarvelSmarth para llegar a mas clientes</h3>
                    <p className='r' style={{marginTop:'3%'}}>
                        Actualmente, tus notificacion solo se envian por correo electronico, puedes llegar a mas cliente
                        mediante
                    </p>
                    <CheckExample 
                        title='Notificaciones automaticas en la aplicacion'
                    />
                    <ButtonCustom    
                        styles={{
                            background: '#101928',
                            color: '#f6c94c',
                            
                        }}
                        classe='mt-3'
                        title='Empezar ahora'
                    />   


                </div>

            </Card.Body>
            
        </Card>
        <h3 
            className='ListaClientes' 
            style={
                {
                    color:'#f6c84c',
                    fontSize:'35px',
                    marginTop:'4%',
                    marginLeft:'3%'
                }
            }>
                Mensaje de notificacion
            </h3>
            <p 
               
                style={{
                    
                    color:'#f6c84c',
                    marginLeft:'3%'
                }}>
                    Añade información adicional a tus plantillas de mensaje y ajusta a tus necesidades la antelacion de los recordatorios
            </p>
        <div className='container mt-4'>
            <Barra 
                title='Nueva cita'
                styles={{
                    marginTop:'1%'
                }
                }
                body='Se envian automaticamente a los clientes cuando se les reserva una cita'
                isActive={true}
            />
            <Barra 
                title='Recordatorio de cita proxima'
                styles={{
                    marginTop:'1%'
                }
                }
                body='Se envian automaticamente a los clientes cuando se les reserva una cita'
                isActive={true}
            />

        </div>
    </div>
  ) 
}
