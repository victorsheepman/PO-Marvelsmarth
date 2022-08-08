import React from 'react'
import Card from 'react-bootstrap/Card';
export const ClientesHerr = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header flex-column align-items-start' style={{marginTop:'30px'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Configuracion Empresa</h3>
        
        </header>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
            <Card.Body className='d-flex justify-content-between'>
                <div className='col-md-4'>
                    <h4 className='title-3 text-center'>Notificacion cliente</h4>
                    <p className='caption-sm'>Revisa los mensajes enviados a los clientes sobre sus citas.</p>
                </div>
                <div className='col-md-4'>
                    <h4 className='title-3 text-center'>Fuentes de referencia</h4>
                   <p className='caption-sm'>Configura fuentes de referencia personalizadas para saber cómo encontraron tu empresa</p>
                </div>
                
                <div className='col-md-4'>
                    <h4 className='title-3 text-center'>Razones de cancelacion</h4>
                    <p className='caption-sm'>Haz un seguimiento de por qué los clientes no asistieron a sus citas</p>
                </div>
               
            </Card.Body>
        </Card>
    </div>
  )
}
