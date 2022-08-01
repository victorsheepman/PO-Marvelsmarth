import React from 'react'
import Card from 'react-bootstrap/Card'; 
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { CheckExample } from '../../Atoms/FormCheck';

import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';

export const NuevoOrdenesDesecho = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Ordenes desecho / Nuevo</h3>
        </header>
        <Card className='mx-auto' style={{width:'90%'}}>
            <Card.Body>
                <div className='container row '>
                    <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Producto'
                        classCustom='col-md-6 d-flex align-items-baseline'
                       
                        holder='Wendy Baltz'
                    >
                        <option value="">Wendy Baltz</option>
                    </FormSelection>
                    <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Ubicacion de origen'
                        classCustom='col-md-6 d-flex align-items-baseline'
                       
                        holder='WH / Stock'
                    >
                        <option value="">Wendy Baltz</option>
                    </FormSelection>
                </div>
                <div className='container row '>
                    <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Cantidad'
                        classCustom='col-md-6 d-flex align-items-baseline'
                       
                        holder='1,00'
                    >
                        <option value="">1,00</option>
                    </FormSelection>
                    <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Ubicacion de desecho'
                        classCustom='col-md-6 d-flex align-items-baseline'
                       
                        holder='Virtual Location/Scrap'
                    >
                        <option value="">1,00</option>
                    </FormSelection>
                </div>
                <div className='container row '>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Propietario'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder=' '
                    />
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
                        holder=' '
                    />
                </div>
                <div className='conteiner mt-4 d-flex align-items-center justify-content-around'>
                        <span className='label-title'>Selecciona el estado actual de la transferencia</span>
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
