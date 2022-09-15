import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { TipoServicio } from '../../../components/TipoServicio/TipoServicio';

export const AddServicio = () => {
    const [modal, setModal] = useState(false)
    const handleOpen = () => setModal(true);
    return (
        <>
        <div className='historialServicios'>
            <header className='listaClientes__header'>
                <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Añadir una oferta al menú de servicios</h3>
            </header>
            <Card  style={{width:'45%', border:'unset', marginLeft:'6%'}} onClick={handleOpen}>
                <Card.Body>
                    <h3 className='title-3'>Servicio</h3>
                    <p className='caption' style={{fontSize:'16px', textAlign:'left'}}>
                        Servicios reservados por un cliente en una sola visita
                    </p>
                </Card.Body>
            </Card>
        </div>
        {
            modal && <TipoServicio 
                        show={modal}
                        setShow={setModal}
                    />
        }
        </>
    )
}
