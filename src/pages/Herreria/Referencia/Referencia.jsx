import React, { useState } from 'react'
import { Barra } from '../../../Atoms/Barra'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import { ModalShadow } from '../../../Atoms/ModalShadow'
import Card from 'react-bootstrap/Card';
import { FormCustom } from '../../../Atoms/FormCustom';
import { Switch } from '../../../Atoms/Switch';

export const Referencia = () => {
    const [modal, setModal] = useState(false)
    const handleOpen = ()=>{
    setModal(true);
    }
  return (
    <>
    <div className='historialServicios ' style={{padding:'35px'}}>
        <header className='listaClientes__header d-flex align-items-center justify-content-between' >
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Razones de cancelacion</h3>
            <ButtonCustom
                title='Añadir nueva referencia'
                styles={{
                    width:'200px',
                    background:'#f6c94c',
                    color: 'black',
                    marginLeft:'3%',
                    borderRadius:'5px',
                    
                }}
                handle={handleOpen}
            />
        </header>
        <Barra
            title='Walk-in'
            styles={{
                marginTop:'3%'
            }}
            isActive={true}
        />
        <Barra
            title='Instagram'
            styles={{
                marginTop:'1%'
            }}
            isActive={true}
        />
        <Barra
            title='Importadas'
            styles={{
                marginTop:'1%'
            }}
            isActive={true}
        />
        <Barra
            title='MarvelSmarth'
            styles={{
                marginTop:'1%'
            }}
            isActive={true}
        />
        <Barra
            title='Facebook'
            styles={{
                marginTop:'1%'
            }}
            isActive={true}
        />
    </div>
        <ModalShadow
          show={modal}
        >
            <Card>
                <Card.Header>
                    <h4 className='label-title'>Nueva Referencia</h4>
                </Card.Header>
                <Card.Body>
                    <FormCustom 
                        title='Nombre'
                        type='text'
                        holder='ej. Promocion del local'
                        classCustom='col-md-12 mt-3'
                        styles={{marginBottom:'20px'}}
                    />
                    <Switch 
                    
                        label='Activo'
                        sty
                    />
                </Card.Body>
                <Card.Footer className='d-flex justify-content-end bg-white'>
              
                    <ButtonCustom 
                        title='Cancelar'
                        classe='mx-2'
                        styles={
                        {
                            width:'100px',
                            background:'#101928',
                            color:'white'

                        }
                        }
                        handle={()=>setShow(false)}
                    />
                </Card.Footer>
            </Card>
        </ModalShadow>
    </>
  )
}
