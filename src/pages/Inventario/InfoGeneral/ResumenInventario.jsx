import React from 'react'

import { ButtonSetup } from '../../../Atoms/ButtonSetup';
import { SetUp } from '../../../container/SetUp/SetUp';
const ResumenInventario = () => {
  return (
    <div className='resumenInventario'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c'}}>Resumen de inventario</h3>
        </header>
            <SetUp >
                <ButtonSetup 

                />
                <ButtonSetup 
                    title='Agrupado por'
                />
                <ButtonSetup 
                    title='Favoritos'
                />

            </SetUp>
    </div>
    )
}

export default ResumenInventario