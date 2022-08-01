import React from 'react'
import Card from 'react-bootstrap/Card'; 
import { ButtonCustom } from '../../Atoms/ButtonCustom';

import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';

export const NuevoReposicion = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Reposicion / Nuevo</h3>
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
                        title='Producto'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Laoreet id'
                    />
                     <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Ruta preferida'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        type='text'
                        holder='In massa'
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
                        title='Ubicacion'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='viviera nam'
                    />
                     <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Cantidad minima'
                        classCustom='col-md-6 d-flex align-items-baseline'
                       
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
                        title='A mano '
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='date'
                        holder='4,37'
                    />
                     <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Cantidad maxima'
                        classCustom='col-md-6 d-flex align-items-baseline'
                       
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
                        title='Prevision '
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='date'
                        holder='99,37'
                    />
                     <FormSelection 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Para ordenar'
                        classCustom='col-md-6 d-flex align-items-baseline'
                       
                        holder='25,32'
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
