import React from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { FormSelection } from '../../Atoms/FormSelection';
export const NuevoReglasTraslado = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 
                className='ListaClientes' 
                style={{color:'#f6c84c',fontSize:'35px'}}
            >
               Reglas de estrateguia de traslado / Nuevo
            </h3>
        </header>
        <Card className='mx-auto' style={{width:'90%'}}>
            <Card.Body>
                <div className='container row'>
                    <FormSelection 
                        styles={
                                    {
                                        border:'none',
                                        borderBottom:"1px solid black"
                                        
                                    }
                                }
                        title='Cuando llega el producto'
                        classCustom='col-md-6 d-flex  align-items-baseline'
                        type='text'
                        holder=''
                    >
                    <option>WH/Stock</option>
                    </FormSelection>
                    <FormSelection 
                        styles={
                                    {
                                        border:'none',
                                        borderBottom:"1px solid black"
                                        
                                    }
                                }
                        title='Almacenar en sububicacion'
                        classCustom='col-md-6 d-flex  align-items-baseline'
                        type='text'
                        holder=''
                    >
                    <option>WH/Stock</option>
                    </FormSelection>

                </div>
                <div className='container row'>
                    <FormSelection 
                        styles={
                                    {
                                        border:'none',
                                        borderBottom:"1px solid black"
                                        
                                    }
                                }
                        title='Categoria de producto'
                        classCustom='col-md-6 d-flex  align-items-baseline'
                        type='text'
                        holder=''
                    >
                    <option>-</option>
                    </FormSelection>
                </div>
            
            </Card.Body>
            <Card.Footer className='d-flex justify-content-end align-items-center' style={{backgroundColor:'white'}}> 
                <ButtonCustom  
                  styles={{
                    background: '#101928',
                    color: '#f6c94c',
                  }}
                  title='Guardar'
                />   
                <ButtonCustom 
                  styles={{
                    background:'#101928',
                    color:'#f6c94c',
                    marginLeft:'4%'
                  }}
                  title='Guardar'
                />  
            </Card.Footer>
        </Card>
    </div>
  )
}
