import React, { useState } from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Card from 'react-bootstrap/Card';
import { ModalShadow } from '../../../Atoms/ModalShadow';
import { FormCustom } from '../../../Atoms/FormCustom';
import { CheckExample } from '../../../Atoms/FormCheck';
import { FormSelection } from '../../../Atoms/FormSelection';
export const FechasCerradas = () => {
    const [modal, setModal] = useState(false);
    const handleOpen = () => setModal(true);
    const handleClose = () => setModal(false);
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{marginRight:'4%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Fechas cerradas
            </h3> 
            <ButtonCustom   
                styles={{
                    background: '#f6c94c',
                    color: '#101928',
                    
                }}
                classe='mt-3 mx-4'
                title='+ Nueva fecha cerrada'
                handle={handleOpen}
                    
            />
        </header>
        <p className='caption-sm' style={{color:'#f6c84c', marginLeft:'5%'}}>
            Fija las fechas de cierre de tu negocio.
        </p>
        <Card  className='mt-4 mx-auto' style={{width:'95%', border:'unset'}}>
            <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                
                <h3 className='title-3'>
                    Anadir una nueva fecha cerrada 
                </h3>
                <span className='caption text-center'>
                   Las fechas cerradas te permiten crear un listado de dias donde tu negocio no esta <br />
                   disponible por festividades, mantenimiento u otras razones. Los clientes no seran capaces <br />
                   de reservar estos dias
                </span>
            </Card.Body>
        </Card>
        <ModalShadow
                show={modal}
                style={{width:'85%'}}
                onHide={handleClose}
            >
          <Card>
            <Card.Header>
                <h3 className='title-3'>
                   Nueva fecha cerrada
                </h3>
            </Card.Header>
            <Card.Body>
                <div className='container d-flex justify-content-center align-items-center' style={{
                    backgroundColor:'#f6c84c',
                }}>
                    <p className='label-title'>
                        Las reservas online no pueden ser realizadas durante las fechas cerradas
                    </p>
                </div>
                <div className='container-lg row' style={{
                    padding: '0px',
                }}>
                    <FormSelection
                        title='Fecha de inicio'
                        classCustom='col-md-6 mt-2'                
                    >
                        <option value="">Selecionar una fecha</option>
                    </FormSelection>
                    <FormSelection
                        title='Fecha de fin'
                        classCustom='col-md-6 mt-2'                
                    >
                        <option value="">Selecionar una fecha</option>
                    </FormSelection>
                </div>
                
                <FormCustom
                    styles={
                        {
                            border:'none',
                            border:"1px solid black",
                            //backgroundColor:'#f6c84c',
                                                        
                        }
                    }
                    title='Descripcion'
                    classCustom='col-md-12 align-items-baseline mt-2'
                    classInput='nuevaTrasferencia__input'
                    type='text'
                    holder='ej. Muebles'
                />
                <h3 className='title-3 mt-2'>
                   Centros
                </h3>
                <CheckExample
                    title='Seleccionar todo'
                
                />
                <CheckExample
                    title='Wanda cacceres'
                
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
