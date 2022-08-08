import React from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';

export const NuevoReglasAbastecimiento = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Reglas de abastecimiento / Nuevo
            </h3>
        </header>
        <Card className='mx-auto' style={{width:'90%'}} >
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
                            classCustom='col-md-6 d-flex  align-items-baseline'
                            type='text'
                            holder=''
                    >
                        <option> </option>
                    </FormSelection>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Cantidad minima'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0.00'
                      />

                </div>
                <div className='container row'>
                    <FormSelection 
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                    
                                }
                            }
                            title='Ubicacion'
                            classCustom='col-md-6 d-flex  align-items-baseline'
                            type='text'
                            holder=''
                    >
                        <option> </option>
                    </FormSelection>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Cantidad maxima'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0.00'
                      />

                </div>
                <div className='container d-flex justify-content-end'>

                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Cantidad multiple'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0.00'
                      />
                </div>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-end align-items-center' style={{backgroundColor:'white'}}> 
                <ButtonCustom 
                  styles={{
                    background: 'white',
                    color: 'black',
                  }}
                  title='Cancelar'
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
