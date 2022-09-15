import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import { Pdf } from '../../../Atoms/Pdf'
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../../Atoms/FormCheck';

export const ConfigPantallas = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{marginRight:'4%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Configuracion de pantallas
            </h3> 
            <div className='d-flex align-items-baseline justify-content-around' style={{width:'30%'}} >
                <h4 className='letter' style={{marginLeft:'13px'}}>
                    Estilo global
                </h4>
                <ButtonCustom   
                    styles={{
                        background: '#f6c94c',
                        color: '#101928',
                    }}
                    classe='mt-3'
                    title='Clasico (carta)'
                    //handle={handleOpen}        
                />
            </div>
        </header>
        <div className='container mx-auto d-flex justify-content-between' style={{width:'95%', backgroundColor:'#f6c94c', marginTop:'50px'}}>

            <Pdf />
            <Pdf 
                title='COTIZACION'
            />
            <Pdf 
                title='TRANSACION'
            />
             <Pdf 
                title='ORDEN DE COMPRA'
            />
        </div>
        <Card className='mx-auto' style={{width:'95%', border:'unset', marginTop:'20px'}}>
            <Card.Body className='d-flex'>
                <div className='container'>
                    <h3 className='title-3'>
                        Configuracion general
                    </h3>
                    <span className='caption'>
                        Los parametros que actives se aplican para todas las pantallas
                    </span>
                    <CheckExample 
                        title='Mostrar monto total en letras'
                        classCustom='mt-3'
                    />
                     <CheckExample 
                        title='Mostrar saltos de linea en la descripcion de los productos'
                        classCustom='mt-1'
                    />

                </div>
                <div className='container'>
                    <h3 className='title-3'>
                        Firma de usuarios para documentos
                    </h3>
                </div>

            </Card.Body>
        </Card>
    </div>
  )
}
