import React from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';

export const NuevoAlmacen = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Almacenes / Nuevo</h3>
        </header>
        <Card className='mt-4 mx-auto' style={{width:'95%', border:'unset'}}> 
            <Card.Body>
                <h3 className='title-3'>
                    Nombre del producto en el almacen   
                </h3>
                <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                marginLeft:'70px'
                                
                            }
                        }
                        title=''
                        classCustom='col-md-8 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='ej. Lampara de Lava'
                    />
                <div className='container row mt-5'>
                    <FormSelection 
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                    
                                }
                            }
                            title='Ubicacion de stock'
                            classCustom='col-md-6 d-flex  align-items-baseline'
                            type='text'
                            holder=''
                    >
                        <option>Wh/Stock</option>
                    </FormSelection>
                    <FormSelection 
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                    
                                }
                            }
                            title='Direccion'
                            classCustom='col-md-6 d-flex  align-items-baseline'
                            type='text'
                            holder=''
                    >
                        <option>
                            Demo-production
                        </option>
                    </FormSelection>
                </div>
            </Card.Body>
            <Card.Footer style={{backgroundColor:'white'}}>
                <div className='container d-flex mt-4 justify-content-end'>
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
                </div>
            </Card.Footer>


        </Card>
    </div>
    )
}
