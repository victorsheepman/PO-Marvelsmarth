import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { FormCustom } from '../../Atoms/FormCustom';
export const NuevoLealtad = () => {
    const [show, setShow] = useState(1)
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Programa de lealtad de punto de venta / Nuevo</h3>
        </header>
        <Card className='mx-auto' style={{width:'85%', border:'unset'}}>
            <Card.Body>
                <h3 className='title-3'>
                    PROGRAMA-01
                </h3>
                <FormCustom 
                    styles={
                        {
                            border:'none',
                            borderBottom:"1px solid black",
                            //backgroundColor:'#f6c84c',
                                                        
                        }
                    }
                    title='Puntos por $ gastados'
                    classCustom='col-md-6 align-items-baseline mt-3'
                    classInput='nuevaTrasferencia__input'
                    type='number'
                    holder='0.0'
                />
                <ButtonCustom 
                    styles={{
                        background: 'white',
                        color: 'black',
                    }}
                    title='Recompensas'
                    handle={()=>setShow(1)}
                /> 
            </Card.Body>
                {
            show == 1 && <Card.Footer style={{backgroundColor:'white'}}>
            <Table striped hover>
                <thead >
                    <tr>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Tipo de recompensa
                        </th>
                        <th>
                            Costo de r...
                        </th>            
                    </tr>
                </thead>
                <span className='text-primary'> + Agregar linea</span>
            </Table>
            <div className='container d-flex justify-content-end' style={{backgroundColor:'white'}}>
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
            </div>
        </Card.Footer>
        } 
        </Card>
        

    </div>
  )
}
