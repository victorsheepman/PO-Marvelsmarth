import React from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../../Atoms/ButtonCustom';
import { FormCustom } from '../../../Atoms/FormCustom';
import { FormSelection } from '../../../Atoms/FormSelection';

export const AjustesIdioma = () => {
  return (
    <div className='historialServicios row'>
        <div className='col-md-6' >
            <header className='listaClientes__header flex-column align-items-start' style={{marginTop:'30px'}}>
                <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Ajustes de Idioma</h3>
                       
            </header> 
            <p className='body-md mt-3'>
            Selecciona el idioma predeterminado para los mensajes de notificacion de cita que se envian a los clientes.
            Tambien se puede establecer un idioma para cada cliente en la configuracion de cada cliente.
            </p>
            <header className='listaClientes__header flex-column align-items-start' style={{marginTop:'30px'}}>
                <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Enlaces Online</h3>
                       
            </header> 
            <p className='body-md '>
                Añade el sitio web de tu empresa y los enlaces a tus redes sociales para compartirlos con los clientes.
            </p>
        </div>
        <div className='col-md-6'>
            <Card style={{marginTop:'12%'}}>
                <Card.Body>
                   
                    <FormSelection 
                        title='Idioma de notificacion de cliente'
                        classCustom='col-md-12'                
                    >
                        <option>Spanish (Espanol)</option>
                    </FormSelection>
                    <FormSelection 
                        title='Idioma predeterminado para tu equipo'
                        classCustom='col-md-12 mt-3'                
                    >
                        <option>Spanish (Espanol)</option>
                    </FormSelection>
                    <div className='col-md-12 bg-warning mt-4'>
                        <p className='body-md text-body text-center'>El nuevo miembro del equipo verá MarvelSmart en este idioma, pero puede cambiarlo en su configuracion personal.</p>

                    </div>

                   

                </Card.Body>
            </Card>
            <Card style={{marginTop:'4%'}}>
                <Card.Body>
                   
                    <FormCustom
                        title='Sitio web'
                        type='text'
                        holder='www.hola.com'
                        classCustom='col-md-12'
                    />
                    <FormCustom
                        title='Facebook'
                        type='text'
                        holder='www.facewbook.com'
                        classCustom='col-md-12 mt-2'
                    />
                    <FormCustom
                        title='Instagram'
                        type='text'
                        holder='www.Instagram.com'
                        classCustom='col-md-12 mt-2'
                    />
                   
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
