import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Card from 'react-bootstrap/Card';
export const MenuServicios = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Menu de servicios</h3>
        </header>
        <div className='mx-auto d-flex justify-content-end align-items-center' style={{width:'95%', padding:'1%' ,border:'unset', backgroundColor:'#f6c84c', borderRadius:'5px'}}>
            <ButtonCustom 
                styles={{
                    background: 'white',
                    color: 'black',
                   
                }}
                title='Opciones'
            />   
            <ButtonCustom 
                styles={{
                    background: '#101928',
                    color: 'white',
                    marginLeft:'1%'
                }}
                title='Anadir Nuevo'
            />   
        </div>
        <Card className='mx-auto mt-4' style={{width:'95%', border:'unset'}}>
            <Card.Body style={{paddingLeft:'2%'}}>
                <h4 className='title-4 text-body'>Servicio 1</h4>
                <div className='d-flex container justify-content-between align-items-center'>
                    <p className='label-title text-secondary'> Tiempo de servicio 1 </p>
                    <span className='caption-sm text-secondary'>30min</span>
                    <p className='title-3'>Desde 550 DOP</p>

                </div>
                <div className='d-flex container justify-content-between align-items-center'>
                    <p className='label-title text-secondary'> Tiempo de servicio 1 </p>
                    <span className='caption-sm text-secondary'>30min</span>
                    <p className='title-3'>Desde 550 DOP</p>

                </div>
                <div className='d-flex container justify-content-between align-items-center'>
                    <p className='label-title text-secondary'> Tiempo de servicio 1 </p>
                    <span className='caption-sm text-secondary'>30min</span>
                    <p className='title-3'>Desde 550 DOP</p>

                </div>
                <div className='d-flex container justify-content-between align-items-center'>
                    <p className='label-title text-secondary'> Tiempo de servicio 1 </p>
                    <span className='caption-sm text-secondary'>30min</span>
                    <p className='title-3'>Desde 550 DOP</p>

                </div>
                <h4 
                    className='title-4 text-body' 
                    style={
                        {
                            marginTop:'2%'
                        }
                    }>Servicio 2</h4>
                
                <div className='d-flex container justify-content-between align-items-center'>
                    <p className='label-title text-secondary'> Tiempo de servicio 1 </p>
                    <span className='caption-sm text-secondary'>30min</span>
                    <p className='title-3'>Desde 550 DOP</p>

                </div>
                <div className='d-flex container justify-content-between align-items-center'>
                    <p className='label-title text-secondary'> Tiempo de servicio 1 </p>
                    <span className='caption-sm text-secondary'>30min</span>
                    <p className='title-3'>Desde 550 DOP</p>

                </div>
                <div className='d-flex container justify-content-between align-items-center'>
                    <p className='label-title text-secondary'> Tiempo de servicio 1 </p>
                    <span className='caption-sm text-secondary'>30min</span>
                    <p className='title-3'>Desde 550 DOP</p>

                </div>
               
            </Card.Body>
            
        </Card>
    </div>
  )
}
