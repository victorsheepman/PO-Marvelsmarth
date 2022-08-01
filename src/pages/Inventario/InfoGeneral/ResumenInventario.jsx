import React from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonSetup } from '../../../Atoms/ButtonSetup';
import { Inventario } from '../../../components/Inventario/Inventario';
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
        <div className='container mt-4 d-flex justify-content-between mx-auto'>
            <Inventario 
                boostrap='ml-2'
            />
            <Inventario />
            <Inventario />
            <Inventario />

        </div>
    </div>

    )
}

export default ResumenInventario