import React from 'react'
import Card from 'react-bootstrap/Card'; 
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { CheckExample } from '../../Atoms/FormCheck';
import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';
export const NuevaTransferencia = () => {
  return (
    <div className='nuevaTrasferencia'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c', fontSize:'40px'}}>Tranferencia / nueva</h3>
        </header>
        <Card className='mx-auto mt-4'>
            <Card.Body>
                <div className='container row '>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Contacto'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Victor Marquez'
                    />
                     <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Tipo de operacion'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        type='text'
                        holder=''
                    />
                </div>
                <div className='container row '>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Documento de origen'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='cedula'
                    />
                     <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Ubicacion de origen'
                        classCustom='col-md-6 d-flex align-items-baseline'
                       
                        holder=''
                    />
                </div>
                <div className='container row '>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Fecha Prevista'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='date'
                        holder='cedula'
                    />
                     <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Ubicacion de destino'
                        classCustom='col-md-6 d-flex align-items-baseline'
                       
                        holder=''
                    />
                </div>
                <div className='conteiner mt-4 d-flex align-items-center justify-content-between'>
                        <span className='label-title'>Selecciona el estado actual de la transferencia</span>
                        <CheckExample 
                            title='En espera'
                        />
                        
                        <CheckExample 
                            title='Esperando otra operacion'
                        />
                        <CheckExample 
                            title='Hecho'
                        />
                        <CheckExample 
                            title='Borrador'
                        />
                </div>
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
    </div>
  )
}
