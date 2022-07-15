import React from 'react'
import { Citas } from '../../components/Citas/Citas'
import { ContainerWhite } from '../../components/ContainerWhite/ContainerWhite'


export const Home = () => {
  return (
    <div className='home overflow-auto'>
      <ContainerWhite 
        title='Ventas recientes'
        img='dop.png'
      />
      <ContainerWhite 
        //title='Proximas citas'
        img='reservado.png'
      />
      <ContainerWhite 
        sm={false} 
        citas={true} 
        bootstrap={'mt-3 overflow-auto'}
      >
      <Citas />
      <Citas />
      <Citas />
      <Citas />
      </ContainerWhite>
      <ContainerWhite 
        sm={false} 
        bootstrap={'mt-3 overflow-auto'} 
        citas={true} 
      >
      <Citas />
      <Citas />
      <Citas />
      <Citas />
      </ContainerWhite> 
        
    </div>
  )
}
