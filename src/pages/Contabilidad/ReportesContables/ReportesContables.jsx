import React from 'react'
import { Reportes } from '../../../components/Reportes/Reportes'

export const ReportesContables = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Reportes de contabilidad</h3>
        </header>
        <p className='caption-sm' style={{color:'#f6c84c', marginLeft:'7%'}}>
            Obtén una visión completa de la información contable de tu empresa
        </p>
        <div className='mt-3 container-lg d-flex' style={{padding:'0%', paddingLeft:'10%'}}>
            <Reportes 
                bootstrap='col-md-5'
            
            />
            <Reportes 
                bootstrap='col-md-5 mx-3'
                title='Estado de situacion financiera'
            
            />
        </div> 
        <div className='mt-3 container-lg d-flex' style={{padding:'0%', paddingLeft:'10%'}}>
            <Reportes 
                bootstrap='col-md-5'
                title='libro diario'
            
            />
            <Reportes 
                bootstrap='col-md-5 mx-3'
                title='Auxiliar por tercero'
            
            />
        </div>
        <div className='mt-3 container-lg d-flex' style={{padding:'0%', paddingLeft:'10%'}}>
            <Reportes 
                bootstrap='col-md-5'
                title='Balance por comprobacion'
                excell={true}
            
            />
            <Reportes 
                bootstrap='col-md-5 mx-3'
                title='Movimiento por cuenta contable'
            
            />
        </div>
        <p className='caption-sm mt-4' style={{color:'#f6c84c', marginLeft:'7%'}}>
           la opcion solo indica que solo es visible en excell
        </p>
    </div>
  )
}
