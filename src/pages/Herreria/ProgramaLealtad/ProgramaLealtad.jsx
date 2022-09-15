import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../../Atoms/FormCheck';
import { FormCustom } from '../../../Atoms/FormCustom';
import { FormSelection } from '../../../Atoms/FormSelection';
export const ProgramaLealtad = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{marginRight:'4%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Programa de lealtad
            </h3> 
            <ButtonCustom   
                styles={{
                    background: '#f6c94c',
                    color: '#101928',
                    
                }}
                classe='mt-3 mx-4'
                title='+ Nuevo programa'
                //handle={handleOpen}
                    
            />
        </header>
        <Card className='mx-2 mt-4 px-2 py-2' style={{width:'50%', border:'unset'}}>
            <Card.Body>
                <CheckExample
                    title='Calcular por precio de venta de articulos antes del descuento'
                />
                <span className='caption-sm mx-5'>
                    Dar recompensa a los clientes, muestras gratis, etc.
                </span>
                    <FormSelection
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                }
                            }
                            title='Programa de lealtad'
                            classCustom='col-md-12 d-flex align-items-baseline '
                            classInput='nuevaTrasferencia__input'
                            type='text'
                            holder='07/06/2022'
                        >
                            <option value="">PROGRAMA-01</option>
                        </FormSelection>
            </Card.Body>
        </Card>
    </div>
  )
}
