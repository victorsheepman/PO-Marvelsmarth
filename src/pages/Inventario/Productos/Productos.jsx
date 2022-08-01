import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import { ButtonSetup } from '../../../Atoms/ButtonSetup'
import { Producto } from '../../../components/Producto/Producto'
import { SetUp } from '../../../container/SetUp/SetUp'
import Card from 'react-bootstrap/Card'; 

export const Productos = () => {
  return (
    <div className='resumenInventario'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c', fontSize:'50px'}}>Productos</h3>
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
        <Card className='mx-auto d-flex' style={{backgroundColor:'unset', width:'100%'}}>
            <Card.Body className='d-flex flex-wrap justify-content-between '>
                <Producto 
                   
                />
                <Producto 

                />
                <Producto 
                />
                <Producto 
                    bootstrap='mt-4'
                />
                <Producto 
                    bootstrap='mt-4'
                />
                <Producto
                    bootstrap='mt-4' 
                />
                <Producto 
                    bootstrap='mt-4'
                />
                <Producto 
                    bootstrap='mt-4' 
                />
                <Producto
                    bootstrap='mt-4'
                 
                />
            </Card.Body>
            

        </Card>
    </div>
  )
}
