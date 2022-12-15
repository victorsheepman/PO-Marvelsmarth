import React, { useState } from 'react'

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Filter } from '../../components/Filter/Filter';
import { Registro } from '../../components/Registro/Registro';
import { ClienteREcibo } from '../../components/ClienteRecibo/ClienteREcibo';
import { FormCustom } from '../../Atoms/FormCustom';
import { ModalShadow } from '../../Atoms/ModalShadow';
export const ListaRecibos = () => {
    const [show, setShow] = useState(true)
  return (
    <div className='facturaAbierta'>
    <section className='facturaAbierta__form '>
        <h3 className='facturaAbierta__form__title subtitle'>Lista de recibo de servicios</h3>
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
        <div className='row d-flex flex-column justify-content-center align-items-center px-4'>
            <Registro />
            <Registro />
            <Registro />
            <Registro />
            <Registro />
        </div> 
    </section>
    <section className='facturaAbierta__list'>
        <ClienteREcibo />
        <div className='container mt-3 d-flex justify-content-center align-items-center'>
            <button className='facturaAbierta__filterButton'>
             Imprimir recibo
            </button>
        </div>
    </section>
    <ModalShadow
          setShow={setShow}
          show={show}
        >
          <Card>
            <Card.Header style={{backgroundColor:'white'}}>
              <h5 className='caption text-body'>Impresion de recibo de cuadre</h5>
            </Card.Header>
            <Card.Body>
            <FormCustom
              title='Fecha'
              type='text'
              classCustom='w-100 mt-3 '
              holder=''
            />
            <FormCustom
              title='Colaborador'
              type='text'
              classCustom='w-100 mt-3'
              holder=''
            />
            <FormCustom
              title='Sucursal'
              type='text'
              classCustom='w-100 mt-3'
              holder=''
            />
            <div className='container mt-3 d-flex justify-content-center align-items-center'>
                <button className='facturaAbierta__filterButton'>
                    Imprimir recibo
                </button>
            </div>

            </Card.Body>
          </Card>
        </ModalShadow>
    </div>)
}
