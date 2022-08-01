import React, { useState } from 'react'
import { Seccion } from '../../components/Seccion/Seccion'
import { ButtonCustom } from '../../Atoms/ButtonCustom'
import { ModalShadow } from '../../Atoms/ModalShadow'
import Card from 'react-bootstrap/Card'; 
import { CardBody, Form } from 'reactstrap';
import { FormCustom } from '../../Atoms/FormCustom';
import { CheckExample } from '../../Atoms/FormCheck';
//import Form from 'react-bootstrap/Form';
export const Secciones = () => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <div className='seccion row'>
        <section className='col-md-2  seccion__aside'>
            <h4 className='title-4'>SECCIONES</h4>
            <Seccion 
              title='Detalles del cliente'
              img='distintivo'
            />
            <Seccion 
              title='Historial medico'
              img='kit'
              bootstrap='mt-3'
            />
            <Seccion 
              title='Preferencias de marketing'
              img='megafono'
              bootstrap='mt-3'
              handle={()=>setModal(true)}
            />
            <div className='seccion__line mt-3'></div>
            <Seccion 
              title='Seccion Personalizada'
              img='chat'
              bootstrap='mt-3'
              handle={
                ()=>setShow(true)
              }
            />
        </section>
        <section className='col-md-10     seccion__content'>
          <p className='label-title' style={{color:'#f6c84c'}}>Paso 1 de 2</p> 
          <h3 className='subtitle' style={{fontSize:'30px'}}>
            Agrega secciones a tu formulario de consulta
          </h3>
          <div className='seccion__content__box mt-4 '>
           
            <figure>

            </figure>
            <h3 className='subtitle text-body mt-3'>Agrega tu primera seccion</h3>
            <span className='caption text-body'>
              Arrastra y suelta o <a href="/#">Click aui</a> para regresar una seccion
            </span>
          </div>
          <div className='container d-flex justify-content-end mt-3'>
            <ButtonCustom 
              styles={{
                width:'200px',
                background:'#f6c84c',
                color: 'black',
              }}
              title='Siguiente paso'
            />
          </div>
        </section>
        <ModalShadow 
          show={show}
          setShow={show}
        >
          <Card>
            <Card.Header style={{backgroundColor:'white'}}>
              <h3 className='title-3'>
                Agregar seccion personalizada
              </h3>
            </Card.Header>
            <Card.Body className='row'>
              <FormCustom 
                title='Titulo de la seccion'
                type='text'
                holder='Agrega un titulo'
                classCustom='col-md-12'
              />
              <FormCustom 
                title='Descripcion de la seccion'
                type='text'
                holder='Agrega una seccion'
                classCustom='col-md-12 mt-3'
              />
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
                  handle={()=>setShow(false)}
                />

                <ButtonCustom 
                  title='Agregar seccion'
                  styles={
                    {
                      width:'150px',
                      color:'white',
                      background:'#101928'

                    }
                  }
                />
            </Card.Footer>
          </Card>

        </ModalShadow>
        <ModalShadow
          show={modal}
        >
          <Card>
            <Card.Header style={{backgroundColor:'white'}}>
              <h3 className='title-3'>
                Agregar una seccion de detalles del cliente
              </h3>
            </Card.Header>
            <Card.Body className='row'>
              <FormCustom 
                title='Titulo de la seccion'
                type='text'
                holder='Agrega un titulo'
                classCustom='col-md-12'
              />
              <FormCustom 
                title='Descripcion de la seccion'
                type='text'
                holder='Agrega una seccion'
                classCustom='col-md-12 mt-3'
              />
            </Card.Body>
            <Card.Body>
              <h3 className='title-3'>
                Campos del detalle del cliente
              </h3>
              <span className='label-title'>
                Escogue la informacion que te gustaria recopilar de tus clientes
              </span>
              <div className='container row'>
                <CheckExample 
                  title='Primer nombre'
                  classCustom='col-md-6 '
                />  
                <CheckExample 
                  title='Apellido'
                  classCustom='col-md-6 '
                />            
              </div>
              <div className='container row'>
                <CheckExample 
                  title='Correo'
                  classCustom='col-md-6 '
                />  
                <CheckExample 
                  title='Fecha de nacimiento'
                  classCustom='col-md-6 '
                />            
              </div>
              <div className='container row'>
                <CheckExample 
                  title='Num. telefono'
                  classCustom='col-md-6 '
                />  
                <CheckExample 
                  title='Genero'
                  classCustom='col-md-6 '
                />            
              </div>
              <div className='container row'>
                <CheckExample 
                  title='Direccion'
                  classCustom='col-md-6 '
                />          
              </div>
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
                  handle={()=>setModal(false)}
                />

                <ButtonCustom 
                  title='Agregar seccion'
                  styles={
                    {
                      width:'150px',
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
