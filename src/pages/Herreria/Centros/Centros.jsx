import React, { useState } from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Card from 'react-bootstrap/Card';
import { ModalShadow } from '../../../Atoms/ModalShadow';
import { FormCustom } from '../../../Atoms/FormCustom';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';


export const Centros = () => {
    const [modal, setModal] = useState(false);
    const handleModalOpen = () => setModal(true);
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{padding:'5%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Sucursales</h3>
            <div style={{width:'40%'}}>
                 <ButtonCustom    
                        styles={{
                            background: '#f6c94c',
                            color: '#101928',
                            
                        }}
                        classe='mt-3'
                        title='Opciones'
                        //handle={handleModalOpen}
            />  
            <ButtonCustom    
                styles={{
                    background: '#f6c94c',
                    color: '#101928',
                    marginLeft:'4%'

                        
                }}
                classe='mt-3'
                title='Anade un nuevo centro'
                handle={handleModalOpen}
            />  
            </div>
           
        </header>
        <Card className='mx-auto ' style={{width:'75%', border:'unset'}}>
            <Card.Body className='d-flex align-items-center'>
                    <figure style={{
                        width: '200px',
                        height: '200px',
                        backgroundColor:'#101928'
                    }}>

                    </figure>
                    <div className='mx-3'>
                        <h3 className='title-3'>
                            Wanda Caceres
                        </h3>
                        <p className='caption-sm'>
                            Avenida Abraham lincoln, Santo domingo, Distrito nacional
                        </p>
                    </div>
            </Card.Body>
        </Card>
        <ModalShadow
                show={modal}
                style={{width:'85%'}}
            >
          <Card>
            <Card.Header>
                <h3 className='title-3'>
                   Anadir nuevo centro
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
                    title='Nombre del centro'
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
                <Form.Group className="col-md-12 ">  
                            <Form.Label className='label-title'>Telefono del centro</Form.Label>
                            <InputGroup>
                              
                                <DropdownButton
                                    variant="outline-secondary"
                                    title="+1"
                                    id="input-group-dropdown-1"
                                >
                                    <Dropdown.Item href="#">+58</Dropdown.Item>
                                    <Dropdown.Item href="#">+23</Dropdown.Item>
                                </DropdownButton>
                                <Form.Control aria-label="Text input with dropdown button" />
                            </InputGroup>
                        </Form.Group>
                        <FormCustom 
                                styles={
                                    {
                                        border:'none',
                                        border:"1px solid black",
                                        //backgroundColor:'#f6c84c',
                                                                    
                                    }
                                }
                                title='Email del centro'
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
