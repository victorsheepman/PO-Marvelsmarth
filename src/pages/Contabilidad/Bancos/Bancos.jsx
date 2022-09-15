import React, { useState } from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { ModalShadow } from '../../../Atoms/ModalShadow';
import { FormCustom } from '../../../Atoms/FormCustom';
import { CheckExample } from '../../../Atoms/FormCheck';

export const Bancos = () => {
  const [modal, setModal] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
  return (
    <div className='historialServicios'>
      <header className='listaClientes__header justify-content-between px-4'>
          <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Bancos</h3>
          <ButtonCustom
              title='+ Nuevo banco'
              styles={{
                  width:'170px',
                  height:'47px',
                  background:'#f6c94c',
                  color: 'black',
                  marginLeft:'3%'
              }}
              handle={handleOpen}
          />
      </header>
      <Card className='mx-auto' style={{width:'90%', border:'unset', marginTop:'50px'}}>
              <Card.Body>
                  
              <Table striped hover>
                <thead >
                  <tr>
                   
                    <th>
                        Nombre
                    </th>
                    <th>
                        Nombre de la cuenta 
                    </th>
                    <th>
                        Descripcion 
                    </th>
                    <th>
                        Saldo
                    </th>
                    <th>
                        Acciones
                    </th> 
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                  <td>
                    Banco 1  
                  </td> 
                  <td>
                  </td>
                  <td></td>
                  <td>
                    RD$ 0.00  
                  </td>
                  <td></td>   
                </tr>
                <tr className='mt2'>
                  <td>
                    Tarjeta de credito empresarial
                  </td> 
                  <td>
                  </td>
                  <td></td>
                  <td>
                    RD$ 0.00  
                  </td>
                  <td></td>   
                </tr>
                  
                </tbody>
              </Table>
              </Card.Body>
              <Card.Footer className='d-flex justify-content-end mt-3'  style={{
                backgroundColor:'#101928'
            }}>
                <ButtonCustom
                  title='Total: RD$ 525'
                  styles={{
                      width:'170px',
                      height:'47px',
                      background:'#f6c94c',
                      color: 'black',
                      //marginLeft:'3%'
                  }}
                />
            </Card.Footer>  
          </Card>
          <ModalShadow
            show={modal}
            style={{width:'85%'}}
            >
            <Card.Header>
                <h3 className='title-3'>
                    Nuevo Banco
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
                    title='Tipo de cuenta'
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
                    title='Nombre de la cuenta'
                    classCustom='col-md-12'
                    classInput='nuevaTrasferencia__input'
                    type='text'
                    holder=''
                />    
                 <FormCustom 
                    styles={
                        {
                            border:'none',
                            border:"1px solid black"
                        }
                    }
                    title='numero de la cuenta'
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
                    title='Saldo inicial'
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
                    title='Fecha'
                    classCustom='col-md-12'
                    classInput='nuevaTrasferencia__input'
                    type='date'
                    holder='0.00'
                />   
                <Form>
                    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label  className='label-title'>Descripcion</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Card.Body>  
            <Card.Footer className='container d-flex align-items-center justify-content-end'>
                <ButtonCustom  
                    styles={{
                        color: 'white',
                        background: '#101928',
                    }}
                    classe='mt-3'
                    title='Guardar'
                    handle={handleClose}        
                />
            </Card.Footer>   
        </ModalShadow>
    </div>
  )
}
