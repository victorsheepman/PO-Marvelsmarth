import React from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { FormCustom } from '../../Atoms/FormCustom';
export const NuevoUdm = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Categorias de las unidades de medida / nuevo</h3>
        </header>
        <Card className='mx-auto' style={{width:'95%'}}>
            <Card.Body>
                <h3 className='title-3'>Categorias de unidades de medida</h3>
                <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title=''
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                    />
                <h3 className='title-3 mt-4'>Unidad de medida</h3>
                <div className='container row'>
                    <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Unidad de medida'
                        classCustom='col-md-4 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                    />
                    <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Tipo'
                        classCustom='col-md-2 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                    />
                    <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Ratio'
                        classCustom='col-md-2 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                    />
                     <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Activo'
                        classCustom='col-md-2 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                    />
                    <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Presicion'
                        classCustom='col-md-2 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                    />

                </div>
                <span className='text-primary'>+ Agregar linea</span>
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
