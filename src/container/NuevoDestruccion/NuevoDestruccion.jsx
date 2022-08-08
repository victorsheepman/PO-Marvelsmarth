import React from 'react'
import { ButtonCustom } from '../../Atoms/ButtonCustom'
import { ButtonSetup } from '../../Atoms/ButtonSetup'
import { SetUp } from '../SetUp/SetUp'
import Card from 'react-bootstrap/Card';
import { FormSelection } from '../../Atoms/FormSelection';
export const NuevoDestruccion = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Ordenes de descontruccion / nuevo</h3>
        </header>
        <SetUp >
            <ButtonCustom 
                title='CREAR'
                styles={{
                    width:'170px',
                    background:'#f6c94c',
                    color: 'black',
                    marginLeft:'3%'
                }}
            />
            <ButtonSetup 

            />
            <ButtonSetup 
                styles={{width:'350px'}}
                title='Agrupado por'
            />
            <ButtonSetup 
                title='Favoritos'
            />

        </SetUp>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
            <Card.Body>
                <div className='container row'>
                    <FormSelection
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
                        holder='07/06/2022'
                    >
                        <option value="">Joseph</option>
                    </FormSelection>
                    <FormSelection
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Orden de fabricacion'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='07/06/2022'
                    >
                        <option value="">

                        </option>
                    </FormSelection>
                </div>
                <div className='container row mt-3'>
                    <FormSelection
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Lista de materiales'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='07/06/2022'
                    >
                        <option value=""></option>
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
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='07/06/2022'
                    >
                        <option value="">
                            Wh/ stock
                        </option>
                    </FormSelection>
                </div>
                <div className='container row mt-3'>
                    <FormSelection
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Cantidad'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        //type='text'
                        holder='07/06/2022'
                    >
                        <option value="">1.00</option>
                    </FormSelection>
                    <FormSelection
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Ubicacion de deseo'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='07/06/2022'
                    >
                        <option value="">
                            Wh/ stock
                        </option>
                    </FormSelection>
                </div>
                <div className='container d-flex justify-content-end'>
                    <FormSelection
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Lote / n de serie'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='07/06/2022'
                    >
                        <option value="">
                            Wh/ stock
                        </option>
                    </FormSelection>

                </div>
            </Card.Body>
            <Card.Footer className='container d-flex justify-content-end'>
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

            </Card.Footer>

        </Card>
    </div>
  )
}
