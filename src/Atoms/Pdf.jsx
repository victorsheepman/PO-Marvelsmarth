import React from 'react'
import { ButtonCustom } from './ButtonCustom'

export const Pdf = ({title='FACTURA'}) => {
  return (
    <div style={{
        height:'320px',
        width:'215px'
    }}>
        <figure style={{
            width: '100%',
            height: '235px',
            background:'blue' 
        }}>
            
        </figure>
        <ButtonCustom   
            styles={{
                width: '100%',
                height: '46px',
                background: '#101928',
                color: 'white',
            }}
            classe='mt-3'
            title={title}
            //handle={handleOpen}        
        />

    </div>
  )
}
