import React, { useState } from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';  
import Form from 'react-bootstrap/Form';
import { ModalShadow } from '../../../Atoms/ModalShadow';
import { FormCustom } from '../../../Atoms/FormCustom';
import { CheckExample } from '../../../Atoms/FormCheck';

export const CamposAdd = () => {
    const [modal, setModal] = useState(false);
    const handleOpen = () => setModal(true);

  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{padding:'5%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Campos adicionales</h3>
            
               
                <ButtonCustom  
                    styles={{
                        background: '#f6c94c',
                        color: '#101928',
                    }}
                    classe='mt-3'
                    title='Nuevo campo adicional'
                    handle={handleOpen}        
                />

        </header>
        <p className='caption-sm' style={{color:'#f6c84c', marginLeft:'5%'}}>
            Crea y gestiona campos adicionales para agregar información extra en tus items
        </p>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
            <Card.Body>
                  
              <Table striped hover>
              <thead >
                  <tr>
                    <th>
                      Nombre
                    </th>
                    <th>
                      Descripcion
                    </th>
                    <th>
                      Tipo de campo
                    </th>
                    <th>
                        Acciones
                    </th>                    
                </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    <td className='h6' onClick={()=>setShow(true)}>
                        Codigo de barras
                    </td>
                    <td className='h6'>
                      
                    </td>
                    <td className='h6'> 
                        
                    </td> 
                    <td className='h6'> 
                        Texto
                    </td>         
                </tr>
                </tbody>
              </Table>
              </Card.Body>
          </Card> 
            <p className='caption--sm mt-3' style={{color:'#f6c84c'}} >
                Mostrando 1 de 1 resultados
            </p>
            <ModalShadow
            show={modal}
            style={{width:'85%'}}
            >
            <Card.Header>
                <h3 className='title-3'>
                    Nuevo Campo adicional
                </h3>
            </Card.Header>  
            <Card.Body>
              <p>Congfiguta caracteristicas particulares a tus productos creando nuevos campos adicionales</p>
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
                    title='Tipo de campo'
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
                    title='Valor por defecto'
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
                <CheckExample 
                    title='Obligatorio'
                    
                />
                <CheckExample 
                    title='Imprimir en facturas'
                
                />
            </Card.Body>  
            <Card.Footer className='container d-flex align-items-center justify-content-end'>
                <ButtonCustom  
                    styles={{
                        color: 'white',
                        background: '#101928',
                    }}
                    classe='mt-3'
                    title='Guardar'
                    handle={handleOpen}        
                />
            </Card.Footer>   
        </ModalShadow>
    </div>
  )
}
