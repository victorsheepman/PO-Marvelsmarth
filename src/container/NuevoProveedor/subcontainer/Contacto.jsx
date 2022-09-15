import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'

export const ContactoDirecciones = () => {
  return (
    <div className='container-lg' >
        <h3 className='title-3 text-primary'>Agregar</h3>
        <div className='container d-flex justify-content-end align-items-center'>
                <ButtonCustom 
                    styles={{
                        background: 'white',
                        color: 'black',
                    }}
                    title='Cancelar'
                        
                        
                />  
                <ButtonCustom 
                    styles={{
                        background: 'black',
                        color: '#f6c94c',
                        marginLeft:'2%'
                    }}
                    title='Guardar'
                        
                />   

            </div>
    </div>
  )
}

