import React, { useState } from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';  
import Form from 'react-bootstrap/Form';
import { ModalShadow } from '../../../Atoms/ModalShadow';
import { FormCustom } from '../../../Atoms/FormCustom';
import { CheckExample } from '../../../Atoms/FormCheck';

export const Retenciones = () => {
    const [modal, setModal] = useState(false);
    const handleOpen = () => setModal(true);
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{padding:'5%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Retenciones</h3>
            
                <ButtonCustom   
                    styles={{
                        background: '#f6c94c',
                        color: '#101928',
                            
                    }}
                    classe='mt-3'
                    title='+ Nueva retencion'
                    handle={handleOpen}
                    
                />
        </header>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
              <Card.Body>
                  
              <Table striped hover>
                <thead >
                  <tr>
                    <th>
                      Nombre
                    </th>
                    <th>
                      Retencion
                    </th>
                    <th>
                      Tipo
                    </th>
                    <th>
                      Descripcion
                    </th>
                    <th>
                      Acciones
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    <td className='h6' onClick={()=>setShow(true)}>
                        Retenciones ITBIS
                    </td>
                    <td className='h6'>
                      30
                    </td>
                    <td className='h6'> 
                        Retenciones IT
                    </td>
                    <td className='h6'>
                        
                    </td>
                    
                      <td className='h6'>
                       
                      </td>
                     
                </tr>
                <tr className='mt2'>
                    <td className='h6' onClick={()=>setShow(true)}>
                        Retenciones ITBIS
                    </td>
                    <td className='h6'>
                      30
                    </td>
                    <td className='h6'> 
                        Retenciones IT
                    </td>
                    <td className='h6'>
                        
                    </td>
                    
                      <td className='h6'>
                       
                      </td>
                     
                </tr>
                <tr className='mt2'>
                    <td className='h6' onClick={()=>setShow(true)}>
                        Retenciones ITBIS
                    </td>
                    <td className='h6'>
                      30
                    </td>
                    <td className='h6'> 
                        Retenciones IT
                    </td>
                    <td className='h6'>
                        
                    </td>
                    
                      <td className='h6'>
                       
                      </td>
                     
                </tr>
                  
                </tbody>
              </Table>
              </Card.Body>
          </Card> 
          <ModalShadow
                show={modal}
                style={{width:'85%'}}
            >
                 <Card>
            <Card.Header>
                <h3 className='title-3'>
                    Nuevo retencion
                </h3>
            </Card.Header>
            <Card.Body>     
                <FormCustom 
                    styles={
                        {
                            border:'none',
                            border:"1px solid black",
                            //backgroundColor:'#f6c84c',
                                                        
                        }
                    }
                    title='Nombre de impuesto'
                    classCustom='col-md-12 align-items-baseline'
                    classInput='nuevaTrasferencia__input'
                    type='text'
                    holder='ej. Muebles'
                />
                <FormCustom 
                    styles={
                        {
                            border:'none',
                            border:"1px solid black",
                            //backgroundColor:'#f6c84c',
                                                        
                        }
                    }
                    title='Porcentaje'
                    classCustom='col-md-12 align-items-baseline mt-3'
                    classInput='nuevaTrasferencia__input'
                    type='text'
                    holder='ej. Muebles'
                />
                <FormCustom 
                    styles={
                        {
                            border:'none',
                            border:"1px solid black",
                            //backgroundColor:'#f6c84c',
                                                        
                        }
                    }
                    title='Tipo de retencion'
                    classCustom='col-md-12 align-items-baseline mt-3'
                    classInput='nuevaTrasferencia__input'
                    type='text'
                    holder='ej. Muebles'
                />
              
                <Form>
                    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <div className='container d-flex justify-content-center align-items-center'>
                    <span className='caption-sm text-body text-center'>
                        Configuracion de contabilidad
                    </span>
                </div>
                <FormCustom 
                    styles={
                        {
                            border:'none',
                            border:"1px solid black",
                            //backgroundColor:'#f6c84c',
                                                        
                        }
                    }
                    title='Cuenta contable para ventas'
                    classCustom='col-md-12 align-items-baseline mt-3'
                    classInput='nuevaTrasferencia__input'
                    type='text'
                    holder='ej. Muebles'
                />
                <FormCustom 
                    styles={
                        {
                            border:'none',
                            border:"1px solid black",
                            //backgroundColor:'#f6c84c',
                                                        
                        }
                    }
                    title='Cuenta contable para compras'
                    classCustom='col-md-12 align-items-baseline mt-3'
                    classInput='nuevaTrasferencia__input'
                    type='text'
                    holder='ej. Muebles'
                />
                
            </Card.Body>
            <Card.Footer className='d-flex justify-content-end align-items-center'>
                <ButtonCustom   
                    styles={{
                        background: '#101928',
                        color: 'white',
                            
                    }}
                    classe='mt-3'
                    title='Guardar'
                />
            </Card.Footer>
           
          </Card>
            </ModalShadow>
    </div>
  )
}
