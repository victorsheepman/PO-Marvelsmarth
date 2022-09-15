import React, { useState } from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { ModalShadow } from '../../../Atoms/ModalShadow';
import { ConfigCosto } from '../../../components/ConfigCosto/ConfigCosto';
import { FormCustom } from '../../../Atoms/FormCustom';
import Form from 'react-bootstrap/Form';
export const CentroCosto = () => {
    const [modal, setModal] = useState(false);
    const [show, setShow] = useState(false);

    const handleModalOpen = () => setModal(true);
    const handleShowOpen = () => setShow(true);
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{padding:'5%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Centro de costo</h3>
            <div style={{width:'40%'}}>
                 <ButtonCustom    
                        styles={{
                            background: '#f6c94c',
                            color: '#101928',
                            
                        }}
                        classe='mt-3'
                        title='Configuracion'
                        handle={handleModalOpen}
            />  
            <ButtonCustom    
                styles={{
                    background: '#f6c94c',
                    color: '#101928',
                    marginLeft:'2%'
                        
                }}
                classe='mt-3'
                title='Nuevo centro de costo'
                handle={handleShowOpen}
            />  
            </div>
           
        </header>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
              <Card.Body>
                  
              <Table striped hover>
                <thead >
                  <tr>
                    <th>
                        Codigo
                    </th>
                    <th>
                        Nombre
                    </th>
                    <th>
                        Creacion
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
               
                 
                  
                </tbody>
              </Table>
               
                
              </Card.Body>
          </Card>  
            <div className='container d-flex justify-content-center align-items-center mt-1'>
                <span className='caption' style={{color:'#f6c94c'}}>mostrar 1 de 1 resultados</span>
            </div>
            <div className='container d-flex justify-content-center align-items-center flex-column' style={{marginTop:'3%'}}>
                <span className='caption' style={{color:'#f6c94c'}}>Aun no has creado tu primer centro de costo</span>
                <ButtonCustom    
                    styles={{
                        background: '#f6c94c',
                        color: '#101928',
                            
                    }}
                    classe='mt-3'
                    title='Nuevo centro de costo'
                />  
            </div>
            <ModalShadow
                show={modal}
                style={{width:'85%'}}
            >
          <Card>
            <Card.Header>
                <h3 className='title-3'>
                    Configurar los centros de costo
                </h3>
            </Card.Header>
            <Card.Body>
                <span className='caption--sm text-center'>
                    Seleccione un centro de costo predefinido para tus documentos. Tambien indica si es obligatorio o no tener un centro  de costo para crear un documento. 
                </span>
                <div className='col-md-12 mt-2 d-flex align-items-center justify-content-between' style={{backgroundColor:'#f6c84c'}}>
                   <h3 className='label-title text-body'>
                        Tipo de documentos  
                   </h3>
                   <h3 className='label-title'>
                        Centro de costos preferido
                   </h3>
                   <h3 className='label-title'>
                        Es obligatorio?
                   </h3>
                </div>
                <ConfigCosto />
                <ConfigCosto 
                    title='Factura de proveedor'
                />

            </Card.Body>
           
          </Card>
        </ModalShadow>
        <ModalShadow
                show={show}
                style={{width:'85%'}}
            >
          <Card>
            <Card.Header>
                <h3 className='title-3'>
                    Nuevo centro de costo
                </h3>
            </Card.Header>
            <Card.Body>
                <span className='caption--sm text-center'>
                    Crea nuevos centros de costos para distribuir tus ingresos y gastos.
                </span>
                
                <FormCustom 
                    styles={
                        {
                            border:'none',
                            border:"1px solid black",
                            //backgroundColor:'#f6c84c',
                                                        
                        }
                    }
                    title='Nombre'
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
                    title='Codigo'
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
             
            </Card.Body>
           
          </Card>
        </ModalShadow>
    </div>
  )
}
