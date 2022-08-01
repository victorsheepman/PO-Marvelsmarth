import React from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';

export const NuevoCategoria = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 
                className='ListaClientes' 
                style={{color:'#f6c84c',fontSize:'35px'}}
            >
                Categorias de producto / nuevo
            </h3>
        </header>
        <Card className='mx-auto' style={{width:'90%'}}> 
            <Card.Body>
                <div className='container row'>
                    <FormCustom 
                        styles={
                        {
                        border:'none',
                        borderBottom:"1px solid black",
                        //backgroundColor:'#f6c84c',
                                    
                        }
                        }
                        title='Nombre de la categoria '
                        classCustom='col-md-6 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='ej. Muebles'
                    />
                    <FormSelection 
                        styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                    
                                }
                            }
                        title='Ubicacion de origen predeterminada'
                        classCustom='col-md-6 align-items-baseline'
                        type='text'
                        holder=''
                    >
                  <option>-</option>
                </FormSelection>
                </div>
                <div className='container row'>
                    <h4 className='title-3'>Propiedades de la cuenta</h4>
                    <h4 className='title-3'>Valoracion del invento</h4>
                </div>
                <div className='container row'>
                    <FormSelection 
                        styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                    
                                }
                            }
                            title='Cuenta de ingreso'
                            classCustom='col-md-6 d-flex  align-items-baseline'
                            type='text'
                            holder=''
                    >
                        <option>400001 vienes de venta</option>
                    </FormSelection>
                    <FormSelection 
                            styles={
                                    {
                                        border:'none',
                                        borderBottom:"1px solid black"
                                        
                                    }
                                }
                                title='Metodo de coste'
                                classCustom='col-md-6 d-flex  align-items-baseline'
                                type='text'
                                holder=''
                        >
                            <option>Precio estandar</option>
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
                            title='Cuenta de gastos'
                            classCustom='col-md-6 d-flex  align-items-baseline'
                            type='text'
                            holder=''
                    >
                        <option>530001 vienes de venta</option>
                    </FormSelection>
                    <FormSelection 
                            styles={
                                    {
                                        border:'none',
                                        borderBottom:"1px solid black"
                                        
                                    }
                                }
                                title='Valoracion de inventario'
                                classCustom='col-md-6 d-flex  align-items-baseline'
                                type='text'
                                holder=''
                        >
                            <option>Manual</option>
                    </FormSelection>
                </div>
                <h3 className='title-3 mt-3'>
                    Logistica
                </h3>
                <FormSelection 
                            styles={
                                    {
                                        border:'none',
                                        borderBottom:"1px solid black"
                                        
                                    }
                                }
                                title='Forzar estrategia de retirada'
                                classCustom='col-md-6 d-flex  align-items-baseline'
                                type='text'
                                holder=''
                        >
                            <option>Manual</option>
                    </FormSelection>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-end align-center' style={{backgroundColor:'white'}}>
                <ButtonCustom  
                  styles={{
                    background: '#101928',
                    color: '#f6c94c',
                  }}
                  title='Guardar'
                />   
                <ButtonCustom 
                  styles={{
                    background:'white',
                    color:'#101928',
                    marginLeft:'4%'
                  }}
                  title='Guardar'
                />  
            </Card.Footer>
        </Card>
    </div>
  )
}
