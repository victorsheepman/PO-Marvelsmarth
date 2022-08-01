import React from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../../Atoms/ButtonCustom';

export const Atributos = () => {
  return (
    <Card  style={{width:'95%'}}>
        <Card.Body>
            <div className='container row'>
                <div className='col-md-6'>
                    <h4 className='title-3'>
                        Atributo
                    </h4>
                    <span className='add-line'>
                       +Agregar linea
                    </span>

                </div>
                <div className='col-md-6'>
                    <h4 className='title-3'>
                        Valores
                    </h4>
                    <span className='add-line'>
                       +Agregar linea
                    </span>

                </div>
            </div>
            <p className='caption-lg'><strong>Advertencia:</strong> añadir o quitar atributos borrará y recreará las variantes
                existentes y llevara a la perdida de sus posibles personalizaciones
            </p>
            <div className='container d-flex mt-4 justify-content-end'>
                <ButtonCustom 
                    styles={{
                        background: '#101928',
                        color: '#f6c94c',
                    }}
                    title='Guardar'
                />   
                <ButtonCustom 
                    styles={{
                        background: 'white',
                        color: 'black',
                        marginLeft:'4%'
                    }}
                    title='Cancelar'
                />  
            </div>
        </Card.Body>
    </Card>
  )
}
