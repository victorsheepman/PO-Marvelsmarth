import React, { useState } from 'react'
import { Filter } from '../../../components/Filter/Filter'
import InputGroup from 'react-bootstrap/InputGroup';
import { FacturasRecientes } from '../../../container/FacturasRecientes/FacturasRecientes';
import Card from 'react-bootstrap/Card';
import { FacturaCliente } from '../../../container/FacturaCliente/FacturaCliente';  
import { ButtonCustom } from '../../../Atoms/ButtonCustom';
import Form from 'react-bootstrap/Form';
import { ModalShadow } from '../../../Atoms/ModalShadow';
import { FormCustom } from '../../../Atoms/FormCustom';

export const FacturaAbierta = () => {
    const [cliente, setCliente] = useState(true)
    const [show, setShow] = useState(true)
  return (
    <div className='facturaAbierta'>
        <section className='facturaAbierta__form '>
            <h3 className='facturaAbierta__form__title subtitle'>Facturas abiertas</h3>
            <Filter />  
            <div  className='facturaAbierta__search '>
                <InputGroup className="mb-3 " style={{borderRadius:'30px', width:'400px' }}>
                    <Form.Control
                    style={{borderRadius:'30px',}}
                    placeholder="Buscar por Cliente o miembro del servicio"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <button className='facturaAbierta__filterButton'>
                    Filtros
                </button>
                <button className='facturaAbierta__filterButton--hoy'>
                   Hoy
                </button>
            </div>
            <FacturasRecientes />
            
        </section>
        <section className='facturaAbierta__list'>
            {
                cliente ?
                <Card>
                    <Card.Header>
                        <h4 className='title-3 ' onClick={()=>setCliente(false)}>
                            + Añadir Cliente
                        </h4>
                    </Card.Header>
                    <Card.Body className='d-flex flex-column align-items-center justify-content-center' style={{height:'600px'}}>
                        <img src="../assets/images/exclamation.png" alt="" srcset="" />
                        <p className='label-title'>
                            Selecciona una cita, servicio  o algún item para revisarlo.  
                        </p>
                    </Card.Body>
                </Card>: <FacturaCliente />
               
     
           

            }
        </section>
        <ModalShadow 
        show={show}
        setShow={setShow}
      >
         <Card className='cita__list__content' >

          <Card.Header>
            <h3>Datos de facturacion</h3>
          </Card.Header>
          <Card.Body className=''>
            <span><strong>Pago recibido por</strong></span>
            
                <FormCustom
                        styles={
                            {

                                
                               
                            }
                        }
                        title=''
                        classCustom='col-md-12'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder='Brandon Freeman'
                    />
                       <Form>
                            <Form.Group className="mb mt-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Comentarios de la factura</Form.Label>
                                <Form.Control as="textarea" rows={3} cols={50} />
                            </Form.Group>
                        </Form>
            
                   
          </Card.Body>
          <Card.Footer className='d-flex justify-content-end bg-white'>
              
               <ButtonCustom 
                title='Cancelar'
                classe='mx-2'
                styles={
                  {
                    width:'100px',
                    background:'white',
                    color:'#101928'

                  }
                }
              />

                <ButtonCustom 
                  title='Guardar'
                  styles={
                    {
                      width:'100px',
                      color:'white',
                      background:'#101928'

                    }
                  }
                />
            </Card.Footer>
          </Card>

      </ModalShadow>

    </div>
  )
}
