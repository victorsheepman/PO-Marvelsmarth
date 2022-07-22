import React from 'react'
import { ButtonCustom } from './ButtonCustom'

export const Alert = () => {
  return (
    <div 
        className='container d-flex align-items-baseline' 
        style={
            {
                backgroundColor:'#f6c84c', 
                marginTop:'2%', 
                height:'90px',
                position: 'relative'
            }
        }
    >
        <p className='caption text-body my-auto'> 
            Hemos encontrado perfiles duplicados. Utiliza la funsion inteligente para combinar toda la informacion de un perfil
        </p>
        <ButtonCustom 
            styles={
                {
                    width: '150px',
                    height: '30px',
                    color:'#f6c84c',
                    background:'#101928',
                    marginLeft:'2%'
                }
            }
            classe='my-auto d-flex align-items-center justify-content-center'
            title='Revisa y funciona'
        />
            <img 
                src="./assets/Icons/exit.svg" 
                style={{
                    position: 'absolute',
                    right: '2%',
                    top:'1%',
                }}
            />

    </div>
  )
}
