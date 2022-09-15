import React from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../../Atoms/ButtonCustom';
import { FormCustom } from '../../../Atoms/FormCustom';
export const CrearRegla = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Crear Regla</h3>
        </header>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
            
            <Card.Body>
                <h4 className='title-3'>
                    Nombre de regla
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
                <div className='container row py-5'>
                    <div className='col-md-6  row'>
                        <p className='label-title'> 
                          <strong>Segun productos</strong>   combinar <strong>todos los registros</strong> 
                        </p>
                        <div className='container  d-flex px-5 align-items-center'>
                            <span className='caption-sm text-primary'>
                                3 Registros
                            </span>
                            <ButtonCustom 
                                styles={{
                                    color: 'white',
                                    background: 'black',
                                }}
                                title='Editar dominio'
                                classe='mx-3'
                            />

                        </div>
                    </div>
                     <div className='col-md-6'>
                        <FormCustom
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black",
                                    //backgroundColor:'#f6c84c',
                                                                
                                }
                            }
                            title='Puntos por unidad'
                            classCustom='col-md-8 d-flex align-items-baseline'
                            classInput='nuevaTrasferencia__input'
                            type='number'
                            holder='p. ej taza gratis'
                        />
                        <FormCustom
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black",
                                    //backgroundColor:'#f6c84c',
                                                                
                                }
                            }
                            title='Puntos por $ gastado'
                            classCustom='col-md-8 d-flex align-items-baseline'
                            classInput='nuevaTrasferencia__input'
                            type='number'
                            holder='p. ej taza gratis'
                        />
                    </div>
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
