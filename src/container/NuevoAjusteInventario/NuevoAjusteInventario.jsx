import React from 'react'
import Card from 'react-bootstrap/Card'; 
import { ButtonCustom } from '../../Atoms/ButtonCustom';

import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';

export const NuevoAjusteInventario = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Ajuste de inventario / Nuevo</h3>
        </header>
        <Card className='mx-auto' style={{width:'90%'}}>
            <Card.Body>
                <div className='container row '>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Ubicacion'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Integer Vitae'
                    />
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Cantidad a mano'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='32,22'
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
                        title='Producto'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Laoreet id'
                    />
                     <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Cantidad contada'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='35,22'
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
                        title='Lote /N de serie'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='Integer vitae'
                    />
                     <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Fecha prevista'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='03/03/2022'
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
                        title='Propietario'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='date'
                        holder='Henry Campbell'
                    />
                     <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Usuario'
                        classCustom='col-md-6 d-flex align-items-baseline'
                       
                        holder='Wendy Baltz'
                    >
                        <option value="">Wendy Baltz</option>
                    </FormSelection>
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
