import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { ButtonCustom } from '../../../Atoms/ButtonCustom';
import { FormCustom } from '../../../Atoms/FormCustom';
import { FormSelection } from '../../../Atoms/FormSelection';

export const CrearRecompensa = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Crear Recompensa
            </h3>
        </header>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
            
            <Card.Body>
                <h4 className='title-3'>
                    Nombre de recompensa
                </h4>
                <FormCustom 
                    styles={
                        {
                            border:'none',
                            borderBottom:"1px solid black",
                            //backgroundColor:'#f6c84c',
                                                        
                        }
                    }
                    title=''
                    classCustom='col-md-6 align-items-baseline'
                    classInput='nuevaTrasferencia__input'
                    type='text'
                    holder='p. ej taza gratis'
                />
                <div className='container row'>
                    <div className='col-md-6 d-flex' style={{ marginTop:'20px'}} >

                        <h4 className='label-title'>Recompensa</h4>
                        <div className='ml-4' style={{marginLeft:'30px'}}>
                            <Form.Check 
                                type='radio'
                                id={`default`}
                                label='Fabricar este producto'
                            />
                            <Form.Check 
                                type='radio'
                                id={`default`}
                                label='Kit'
                            />
                        </div>
                    </div>
                    <div className='col-md-6 d-flex' style={{ marginTop:'20px'}} >
                        <FormCustom 
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black",
                                    //backgroundColor:'#f6c84c',
                                                                
                                }
                            }
                            title='centro de recompensa'
                            classCustom='col-md-6 d-flex align-items-baseline mt-3'
                            classInput='nuevaTrasferencia__input'
                            type='number'
                            holder='0.0'
                        />
                         <FormCustom 
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black",
                                    //backgroundColor:'#f6c84c',
                                                                
                                }
                            }
                            title='Puntos minimos'
                            classCustom='col-md-6 d-flex align-items-baseline mt-3'
                            classInput='nuevaTrasferencia__input'
                            type='number'
                            holder='0.0'
                        />

                    </div>

                </div>
                <div className='container row mt-3'>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',                                                    
                            }
                        }
                        title='Producto de regalo'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0.0'
                    />
                    <div className='row col-md-6'>
                            <FormSelection
                                styles={
                                    {
                                        border:'none',
                                        borderBottom:"1px solid black"
                                    }
                                }
                                title='Cantidad del descuento'
                                classCustom='col-md-6 d-flex align-items-baseline '
                                classInput='nuevaTrasferencia__input'
                                type='number'
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
                                title=''
                                classCustom='col-md-4 d-flex align-items-baseline '
                                classInput='nuevaTrasferencia__input'
                                type='number'
                                holder='07/06/2022'
                            >
                                <option value="">Dias</option>
                            </FormSelection>
                            

                    </div>
                </div>
                    
                <div className='container row'>
                    <div className='col-md-6 d-flex' style={{ marginTop:'20px'}} >

                        <h4 className='label-title'>
                            Aplicar descuento en
                        </h4>
                        <div className='ml-4' style={{marginLeft:'30px'}}>
                            <Form.Check 
                                type='radio'
                                id={`default`}
                                label='En el periodo'
                            />
                            <Form.Check 
                                type='radio'
                                id={`default`}
                                label='En el producto mas barato'
                            />
                            <Form.Check 
                                type='radio'
                                id={`default`}
                                label='En el producto especifico'
                            />
                        </div>
                    </div>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',                                                    
                            }
                        }
                        title='importe del descontado maximo'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0.0'
                    />

                </div>

            </Card.Body>
            <Card.Footer className='container d-flex justify-content-end' style={{backgroundColor:'white'}}>
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
