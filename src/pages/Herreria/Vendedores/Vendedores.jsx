import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import { FormCustom } from '../../../Atoms/FormCustom';
import { ModalShadow } from '../../../Atoms/ModalShadow';

export const Vendedores = () => {
    const [modal, setModal] = useState(false);
    const handleOpen = () => setModal(true);

  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{marginRight:'4%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Vendedores
            </h3> 
            <ButtonCustom   
                styles={{
                    background: '#f6c94c',
                    color: '#101928',
                }}
                classe='mt-3'
                title='+ Nuevo vendedor'
                handle={handleOpen}        
            />
        </header>
        <Card className='mx-auto' style={{width:'95%', border:'unset', marginTop:'20px'}}>
            <Card.Body>
            <Table striped hover>
                <thead >
                  <tr className='d-flex justify-content-around'>
                    <th>
                      RNC
                    </th>
                    <th>
                      Observaciones
                    </th>
                    <th>
                        Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                    <tr className='mt2'>
                    
                    </tr>
                  
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer  style={{
                backgroundColor:'#101928'
            }}>
                <p className='caption--sm' style={{color:'#f6c84c'}} >
                    Mostrando 1 de 1 resultados
                </p>
            </Card.Footer>
        </Card>

        <div className='container d-flex flex-column justify-content-center align-items-center' style={{marginTop:'30px'}}>
            <p className='body-md'>¡Aún no has creado tu primer vendedor!</p>
            <ButtonCustom   
                styles={{
                    background: '#f6c94c',
                    color: '#101928',
                }}
                classe='mt-3'
                title='+ Nuevo vendedor'
                //handle={handleOpen}        
            />  
        </div>
        <ModalShadow
            show={modal}
            style={{width:'85%'}}
        >
            <Card.Header>
                <h3 className='title-3'>
                    Nuevo Vendedor
                </h3>
            </Card.Header>  
            <Card.Body>
                <FormCustom 
                    styles={
                        {
                            border:'none',
                            border:"1px solid black"
                        }
                    }
                    title='Nombre'
                    classCustom='col-md-12'
                    classInput='nuevaTrasferencia__input'
                    type='number'
                    holder='0.00'
                />
                <FormCustom 
                    styles={
                        {
                            border:'none',
                            border:"1px solid black"
                        }
                    }
                    title='RNC'
                    classCustom='col-md-12'
                    classInput='nuevaTrasferencia__input'
                    type='number'
                    holder='0.00'
                />    
                <Form>
                    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label  className='label-title'>Descripcion</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Card.Body>     
        </ModalShadow>
        
       
        
    </div>
  )
}
