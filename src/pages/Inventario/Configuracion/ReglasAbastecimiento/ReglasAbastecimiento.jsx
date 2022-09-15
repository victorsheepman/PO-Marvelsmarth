import React from 'react'
import { ButtonCustom } from '../../../../Atoms/ButtonCustom'
import { ButtonSetup } from '../../../../Atoms/ButtonSetup'
import { SetUp } from '../../../../container/SetUp/SetUp'
import Card from 'react-bootstrap/Card';

export const ReglasAbastecimiento = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Reglas de abastecimiento
            </h3>
        </header>
        <SetUp >
            <ButtonCustom 
                title='CREAR'
                styles={{
                    width:'170px',
                    background:'#f6c94c',
                    color: 'black',
                    marginLeft:'3%'
                }}
            />
            <ButtonSetup 

            />
            <ButtonSetup 
                styles={{width:'350px'}}
                title='Agrupado por'
            />
            <ButtonSetup 
                title='Favoritos'
            />

        </SetUp>
        <Card  className='mt-4 mx-auto' style={{width:'95%', border:'unset'}}>
            <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                
                <h3 className='title-3'>
                    No se encontro ninguna regla de abastecimiento
                </h3>
                <span className='caption'>
                    Utilizar el boton de 'clear' y añade una nueva ubicacion
                </span>
            </Card.Body>
        </Card>
    </div>
  )
}
