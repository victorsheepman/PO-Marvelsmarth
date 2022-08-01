import React from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { CheckExample } from '../../Atoms/FormCheck';
import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';
export const NuevoUbicacion = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Ubicaciones / Nuevo</h3>
        </header>
        <Card className='mx-auto' style={{width:'95%'}}>
            <Card.Body>
                <div className='row'>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Nombre de ubicacion'
                        classCustom='col-md-6 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Ej. existencia de reserva'
                    />
                    <FormSelection 
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                    
                                }
                            }
                            title='Ubicacion padre'
                            classCustom='col-md-6 align-items-baseline'
                            type='text'
                            holder=''
                    >
                        <option>ubicaciones fisicas</option>
                    </FormSelection>
                </div>   
                <div className='row'>
                    <h3 className='title-3 col-md-6'>Informacion adicional</h3>
                    <h3 className='title-3 col-md-6'>Conteo ciclico</h3>

                </div>
                <div className='row'>
                    <FormSelection 
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                    
                                }
                            }
                            title='Tipo de ubicacion'
                            classCustom='col-md-6 d-flex align-items-baseline'
                            type='text'
                            holder=''
                    >
                        <option>ubicaciones interna</option>
                    </FormSelection>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Frecuencia de inventario'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0'
                    />

                </div>
                <div className='row'>
                    <CheckExample 
                    
                        title='Es una ubicacion de chatarra?'
                        classCustom='col-md-6'
                    />
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Ultimo inventario efectivo'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder=''
                    />
                </div>
                <div className='row'>
                    <CheckExample 
                    
                        title='Es una ubicacion de devolucion?'
                        classCustom='col-md-6'
                    />
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='siguiente inventario esperado'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder=''
                    />
                </div>
                <div className='row'>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Codigo de barras'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder=''
                    />
                </div>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-end bg-white'>
              
              <ButtonCustom 
                 title='Cancelar'
                 classe='mx-2'
                 styles={
                   {
                     width:'100px',
                     background:'white',
                     color:'#101928'

                   }
                 }
                 handle={()=>setModal(false)}
               />

               <ButtonCustom 
                 title='Agregar seccion'
                 styles={
                   {
                     width:'150px',
                     color:'white',
                     background:'#101928'

                   }
                 }
               />
           </Card.Footer>
        </Card>
    </div>
  )
}
