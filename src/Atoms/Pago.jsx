import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import {ModalShadow} from './ModalShadow';
//import Card from 'react-bootstrap/Card';
import { FormCustom } from './FormCustom'
import { ButtonCustom } from './ButtonCustom';
export const Pago = ({title, src, bootstrap}) => {
    const [show, setShow] = useState(false)
    return(

    <Card 
        className={bootstrap}
        style={
            {  
                width: '441px',
                height: '153px',
                backgroundColor:'#f6c84c'
            }
        }
        onClick={()=>setShow(true)}
    >
        <Card.Body 
            className='d-flex flex-column  align-items-center justify-content-center' 
        >
            <img src={`../assets/images/${src}`} alt="" />
            <p className='label-title'>
                {title}
            </p>
        </Card.Body>
        <ModalShadow 
          setShow={setShow}
          show={show}
        >
          <Card>
            <Card.Header style={{backgroundColor:'white'}}>
              <h5 className='caption text-body'>Pago En efectivo</h5>
            </Card.Header>
            <Card.Body>
            <div className='facturaCliente__space'>
                <p className='caption--sm  text-body'>Cantidad por pagar</p>
                <p className='caption--sm  text-body'>3000 DOP</p>
            </div>
            <FormCustom
              title='Monto recibido por el cliente'
              type='text'
              classCustom='w-100 mt-3'
              holder=''
            />
            <span className="text-muted">
              Cambio de 1000 DOP
            </span>
            <div className='w-110 row mt-3'>
              <Card className='col-sm-4 border '>
                <Card.Body className='d-flex justify-content-center align-items-center'>
                  <p className='label-title text-body'>3000 DOP</p>
                </Card.Body>
              </Card>
              <Card className='col-sm-4 border'>
                <Card.Body className='d-flex justify-content-center align-items-center'>
                  <p className='label-title text-body'>3005 DOP</p>
                </Card.Body>
              </Card>
              <Card className='col-sm-4 border'>
                <Card.Body className='d-flex justify-content-center align-items-center'>
                  <p className='label-title text-body'>3010 DOP</p>
                </Card.Body>
              </Card>
            </div>
            <div className='w-110 row mt-2'>
              <Card className='col-sm-4 border '>
                <Card.Body className='d-flex justify-content-center align-items-center'>
                  <p className='label-title text-body'>3020 DOP</p>
                </Card.Body>
              </Card>
              <Card className='col-sm-4 border '>
                <Card.Body className='d-flex justify-content-center align-items-center'>
                  <p className='label-title text-body'>3050 DOP</p>
                </Card.Body>
              </Card>
              <Card className='col-sm-4 border'>
                <Card.Body className='d-flex justify-content-center align-items-center'>
                  <p className='label-title text-body'>3500 DOP</p>
                </Card.Body>
              </Card>
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
    </Card>
)}

