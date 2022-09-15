import React from 'react'
import Card from 'react-bootstrap/Card';

export const ClientesSer = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Clientes</h3>
        </header>
        <Card  style={{width:'45%', border:'unset', marginLeft:'6%'}}>
            <Card.Body >
                <h3 className='title-3'>Menu de servicio</h3>
                <p className='caption' style={{fontSize:'16px', textAlign:'left'}}>Añade, edita y borra los tipos de servicios disponibles al agendar</p>
            </Card.Body>
        </Card>
    </div>
  )
}
