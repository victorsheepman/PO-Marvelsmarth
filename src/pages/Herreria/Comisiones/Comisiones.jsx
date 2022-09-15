import React from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../../Atoms/ButtonCustom';
import { CheckExample } from '../../../Atoms/FormCheck';
export const Comisiones = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Comisiones</h3>
        </header>
        <Card className='mx-2 mt-4 px-2 py-2' style={{width:'50%', border:'unset'}}>
            <Card.Body>
                <CheckExample
                    title='Calcular por precio de venta de articulos antes del descuento'
            
                />
                <CheckExample
                    title='Calcular por precio de venta incluyendo impuestos'
                    classCustom='mt-4'
                
                />
                <span className='caption-sm mt-1'>
                    Los cambios en la configuracion de comisiones e impuestos solo se aplicaran  a las nuevas facturas, las facturas existentes no se veran afectadas

                </span>
                <CheckExample
                    title='Calcular por precio de venta antes del descuento de la membresia'
                    classCustom='mt-4'
                
                />
            </Card.Body>
            <Card.Footer className='d-flex justify-content-end align-items-center'>
                <ButtonCustom   
                    styles={{
                        background: '#101928',
                        color: 'white',
                            
                    }}
                    classe='mt-3'
                    title='Guardar'
                />
            </Card.Footer>
            
        </Card>
    </div>
  )
}
