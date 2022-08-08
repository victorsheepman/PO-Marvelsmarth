import React from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../../Atoms/ButtonCustom';
import { FormSelection } from '../../../Atoms/FormSelection';
export const AjustesHora = () => {
  return (
    <div className='historialServicios row'>
        <div className='col-md-6' style={{paddingLeft:'4%'}}>
            <header className='listaClientes__header flex-column align-items-start' style={{marginTop:'30px'}}>
                <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Ajustes de horario y Calendario</h3>
                       
            </header> 
            <p className='body-md mt-3'>
            Selecciona la zona horaria y el formato de hora que se adapte a tu negocio. Los cambios de ahorro de luz solar 
            se aplicaran automaticamente en funcion de la zona horaria seleccionada.
            </p>
        </div>
        <div className='col-md-6'>
            <Card style={{marginTop:'12%'}}>
                <Card.Body>
                   
                    <FormSelection 
                        title='Zona Horaria'
                        classCustom='col-md-12'                
                    >
                        <option>(GMT -04:00) Santo Domingo</option>
                    </FormSelection>
                    <FormSelection 
                        title='Formato de hora'
                        classCustom='col-md-12 mt-3'                
                    >
                        <option>12 Horas</option>
                    </FormSelection>
                    <FormSelection 
                        title='Inicio de la semana'
                        classCustom='col-md-12 mt-3'                
                    >
                        <option>Domingo</option>
                    </FormSelection>
                    <FormSelection 
                        title='Fuente de la cita de color'
                        classCustom='col-md-12 mt-3'                
                    >
                        <option>Empleado</option>
                    </FormSelection>
                
                   

                </Card.Body>
            </Card>

        </div>
        <div className='container d-flex mt-4 justify-content-end'>
            <ButtonCustom 
                styles={{
                    background: '#101928',
                    color: '#f6c94c',
                }}
                title='Cancelar'
            />   
            <ButtonCustom 
                styles={{
                    background:'#f6c94c',
                    color:'#101928',
                    marginLeft:'4%'
                }}
                    title='Guardar'
            />  
        </div>
        
    </div>
  )
}
