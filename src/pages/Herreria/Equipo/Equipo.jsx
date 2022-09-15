import React from 'react'
import Card from 'react-bootstrap/Card';
export const Equipo = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Equipo</h3>
        </header>
        <Card className='mx-1 mt-2' style={{width:'50%', border:'unset'}}>
            <Card.Body>
                <div className='container py-2' style={{borderBottom:'1px solid grey', borderTop:'1px solid grey'}}>
                    <h3 className='title-3'>
                        Miembros del equipo
                    </h3>
                    <span className='caption'>
                        Agrega, edita y elimina miembros de tu equipo.
                    </span>
                </div>
                <div className='container py-2' style={{borderBottom:'1px solid grey', borderTop:'1px solid grey'}}>
                    <h3 className='title-3'>
                        Horario Laboral
                    </h3>
                    <span className='caption'>
                        Distribuye el horario de los miembros de tu equipo.
                    </span>
                </div>
                <div className='container py-2' style={{borderBottom:'1px solid grey', borderTop:'1px solid grey'}}>
                    <h3 className='title-3'>
                        Permisos
                    </h3>
                    <span className='caption'>
                        Configura el nivel de acceso a MarvelSmart para cada miembro del equipo
                    </span>
                </div>
                <div className='container py-2'>
                    <h3 className='title-3'>
                        Comisiones
                    </h3>
                    <span className='caption'>
                        Configura el cálculo de las comisiones recibidas por los miembros del equipo
                    </span>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}
