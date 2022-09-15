import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';
import Form from 'react-bootstrap/Form';
export const NuevoListaMateriales = () => {
    const [show, setShow] = useState(false)
    const handleOpen = () =>{
        setShow(true);
    }
  return (
    <div className='historialServicios'>
    <header className='listaClientes__header'>
        <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Lista de materiales / nuevo</h3>
    </header>
    <Card className='mx-auto' style={{width:'95%'}}>
        <Card.Body>
            <div className='container row'>
                <FormCustom
                    styles={
                        {
                            border:'none',
                            borderBottom:"1px solid black"
                        }
                    }
                    title='Producto'
                    classCustom='col-md-6 d-flex align-items-baseline'
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
                    title='Referecia'
                    classCustom='col-md-6 d-flex align-items-baseline'
                    classInput='nuevaTrasferencia__input'
                    type='text'
                    holder='07/06/2022'
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
                    title='Variantes de producto'
                    classCustom='col-md-6 d-flex align-items-baseline'
                    classInput='nuevaTrasferencia__input'
                    type='text'
                    holder='07/06/2022'
                >
                    <option value=""> - </option>
                </FormSelection>
                <div className='col-md-6 d-flex' style={{ marginTop:'20px'}} >

                    <h4 className='label-title'>Tipo de LdM</h4>
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

            </div>
            <div className='container row mt-4' >
            <FormSelection
                    styles={
                        {
                            border:'none',
                            borderBottom:"1px solid black"
                        }
                    }
                    title='Cantidad'
                    classCustom='col-md-6 d-flex align-items-baseline'
                    classInput='nuevaTrasferencia__input'
                    type='text'
                    holder='07/06/2022'
                >
                    <option value="">1.00</option>
                </FormSelection>

            </div>
            <div className='container'>
                <ButtonCustom 
                    styles={{
                        background: 'white',
                        color: 'black',

                    }}
                    title='Componentes'
                    handle={handleOpen}
                />   
            </div>
        </Card.Body>
        {
            show && <Card.Footer style={{backgroundColor:'white'}}>
                <Table striped hover>
                    <thead >
                        <tr>
                            <th>
                                Producto
                            </th>
                            <th>
                                Desde
                            </th>
                            <th>
                                A consumir
                            </th>
                            <th>
                                UdM
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
