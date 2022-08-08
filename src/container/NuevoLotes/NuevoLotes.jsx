import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { FormCustom } from '../../Atoms/FormCustom';
export const NuevoLotes = () => {
    const [show, setShow] = useState(false);
    const handleOpen = () =>{
        setShow(true);
    }
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={
                {
                    color:'#f6c84c',
                    fontSize:'35px'
                }
            }>Lotes/Numeros de serie</h3>
        </header>
        <Card  className='mt-4 mx-auto' style={{width:'95%', border:'unset'}}>
            <Card.Body>
                <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Lote/n de serie'
                        classCustom='col-md-6 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='00002'
                />
                <div className='container row mt-5'>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Producto'
                        classCustom='col-md-4 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='00002'
                    />
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Cantidad'
                        classCustom='col-md-4 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='00002'
                    />
                     <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Referencia interna'
                        classCustom='col-md-4 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='00002'
                    />

                </div>
                <ButtonCustom 
                    styles={{
                        background: 'white',
                        color: 'black',
                        margin:'40px'
                    }}
                    title='Componentes'
                    handle={handleOpen}
                />   
                {
                    show && <div className='container row mt-3'>
                                <span className='text-primary'> + Agregar linea</span>
                            </div>
                }
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
