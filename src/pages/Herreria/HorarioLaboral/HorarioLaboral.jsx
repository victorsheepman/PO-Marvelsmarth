import React, { useState } from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'

import Card from 'react-bootstrap/Card';
import { ModalShadow } from '../../../Atoms/ModalShadow';
import { FormCustom } from '../../../Atoms/FormCustom';
import { FormSelection } from '../../../Atoms/FormSelection';
export const HorarioLaboral = () => {
    const [modal, setModal] = useState(false);
    const handleModalOpen = () => setModal(true);
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Horario Laboral
            </h3>
        </header>
        <div className='d-flex justify-content-between alingn-items-center px-3'>
            <ButtonCustom 
                title='Todos los miembros'
                styles={{
                    width:'170px',
                    background:'#f6c94c',
                    color: 'black',
                    marginLeft:'3%'
                }}
                handle={handleModalOpen}
            />
            <button className='calendar__button--md'>
            HOY jueves 12 may, 2022
          </button>
        </div> 
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <img className='mx-auto' src="../../assets/images/excell.png" alt="" width='90%' />
        </div>
        <ModalShadow
            show={modal}
            style={{width:'85%'}}
        >
            <Card>
                <Card.Header className='d-flex justify-content-center align-items-center'>
                    <h5 className='label-title text-center'>
                        Editar los horarios de Wanda  <br />
                        Domingo, 6 de junio 2022
                    </h5>
                </Card.Header>
                <Card.Body>
                    <div className='row'>
                        <FormCustom 
                            styles={
                                {
                                    border:'none',
                                    border:"1px solid black",
                                    //backgroundColor:'#f6c84c',
                                                                
                                }
                            }
                            title='Comienza el turno'
                            classCustom='col-md-6 align-items-baseline'
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
                            title='Fin del turno    '
                            classCustom='col-md-6 align-items-baseline'
                            classInput='nuevaTrasferencia__input'
                            type='text'
                            holder='ej. Muebles'
                        />


                    </div>
                    <ButtonCustom 
                        title='Agrega otro turno'
                        styles={{
                            width:'170px',
                            background:'black',
                            color: 'white',
                            
                        }}
                        classe='mt-3'
                        handle={handleModalOpen}
                    />
                     <FormSelection
                        title='Repeticiones'
                        classCustom='col-md-12 mt-4'                
                    >
                        <option>No repetir</option>
                        <option>Repetir</option>
                    </FormSelection>

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
