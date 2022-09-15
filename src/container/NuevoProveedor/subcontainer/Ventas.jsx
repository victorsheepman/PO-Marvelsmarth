import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import { CheckExample } from '../../../Atoms/FormCheck'
import { FormCustom } from '../../../Atoms/FormCustom'
import { FormSelection } from '../../../Atoms/FormSelection'

export const VentasCompra = () => {
  return (
    <div className='container-lg row' >
        <section className='col-md-6'>
            <h3 className='title-3'>Ventas</h3>
            <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                                        
                            }
                        }
                        title='Comercial'
                        classCustom='col-md-12 d-flex align-items-baseline'
                        type='text'
                        holder=''
                    >
                    <option>Jefe</option>
            </FormSelection>
            <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                                        
                            }
                        }
                        title='Plazos de pago'
                        classCustom='col-md-12 d-flex align-items-baseline'
                        type='text'
                        holder=''
                    >
                    <option>Jefe</option>
            </FormSelection>
            <h3 className='title-3' style={{marginTop:'3%'}}>Puntos de venta</h3>
            <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Codigo de barra'
                        classCustom='col-md-12 mt-4 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Por ejemplo Director de ventas'
            />
            <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='puntos de lealtad'
                        classCustom='col-md-12 mt-4 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0,00'
            />
            <h3 className='title-3' style={{marginTop:'3%'}}>Puntos de venta</h3>
            <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Referencia'
                        classCustom='col-md-12 mt-4 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Por ejemplo Director de ventas'
            />
           
        </section>
        <section className='col-md-6'>
            <h3 className='title-3'>Ventas</h3>
            <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                                        
                            }
                        }
                        title='Plazo de pago'
                        classCustom='col-md-12 d-flex align-items-baseline'
                        type='text'
                        holder=''
                    >
                    <option>Jefe</option>
            </FormSelection>
            <CheckExample 
                title='Recordatorio de recibo'
            />
            <h3 className='title-3 mt-4'>Informacion fiscal</h3>
            <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                                        
                            }
                        }
                        title='Posicion fiscal'
                        classCustom='col-md-12 d-flex align-items-baseline'
                        type='text'
                        holder=''
                    >
                    <option>Jefe</option>
            </FormSelection>
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

        </section>

    </div>
  )
}
