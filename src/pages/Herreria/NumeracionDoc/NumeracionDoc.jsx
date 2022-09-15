import React, { useState } from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';  
import { ModalShadow } from '../../../Atoms/ModalShadow';
import { FormSelection } from '../../../Atoms/FormSelection';
import { FormCustom } from '../../../Atoms/FormCustom';
import { CheckExample } from '../../../Atoms/FormCheck';
export const NumeracionDoc = () => {
  const [modal, setModal] = useState(false)
  const handleOpen = () => setModal(true);
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{padding:'5%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Numeración de documentos</h3>
            
                <ButtonCustom   
                    styles={{
                        background: '#f6c94c',
                        color: '#101928',
                            
                    }}
                    classe='mt-3'
                    title='+ Nueva numeración'
                    handle={handleOpen}
                    
                />
        </header>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
              <Card.Body>
                  
              <Table striped hover>
                <thead >
                  <tr>
                    <th>
                      Tipo
                    </th>
                    <th>
                      Nombre
                    </th>
                    <th>
                      Preferida
                    </th>
                    <th>
                      Vigencia hasta
                    </th>
                    <th>
                      Prefijo
                    </th>
                    <th>
                      Siguiente numero
                    </th>
                    <th>
                      Accion
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    <td className='h6' onClick={()=>setShow(true)}>
                        Fecha de proveedor
                    </td>
                    <td className='h6'>
                      Fecha de proveedor
                    </td>
                    <td className='h6'> 
                        si
                    </td>
                    <td className='h6'>
                        
                    </td>
                    
                      <td className='h6'>
                        B-11
                      </td>
                      <td className='h6'>
                        1
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
            <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
                <Card.Header>
                  <h3 className='title-3'>
                        Nuevo plazo
                  </h3>
                </Card.Header>
                <Card.Body>
                  <span className='caption--sm'>
                    Crea una numeracion para tus documentos, puede ser manual o automatica
                  </span>
                  <FormSelection 
                        title='Tipo de documentacion'
                        classCustom='col-md-12 mt-3'                
                    >
                        <option>Factura de venta</option>
                    </FormSelection>
                    <FormSelection 
                        title='Tipo'
                        classCustom='col-md-12 mt-3'                
                    >
                        <option>

                        </option>
                    </FormSelection>
                    <FormSelection 
                        title='Tipo de documentacion'
                        classCustom='col-md-12 mt-3'                
                    >
                        <option>Factura de venta</option>
                    </FormSelection>
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
                                    title='Numero inicial'
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
                                    title='Fecha vencimiento'
                                    classCustom='col-md-12'
                                    classInput='nuevaTrasferencia__input'
                                    type='number'
                                    holder='0.00'
                            /> 
                      <CheckExample 
                        title='Preferida'
                        classCustom='mt-3'

                      
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
