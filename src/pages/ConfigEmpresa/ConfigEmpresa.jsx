import React from 'react'
import Card from 'react-bootstrap/Card';
import { FormCustom } from '../../Atoms/FormCustom';

export const ConfigEmpresa = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header flex-column align-items-start' style={{marginTop:'30px'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Configuracion Empresa
                </h3>
            <p className='body-md mt-3'>Ve, filtra y exporta las citas agregadas por el cliente</p>        
        </header>
        <Card className='mx-auto mt-5' style={{width:'95%'}}>
            <Card.Footer style={{backgroundColor:'white'}}>
                <h2>Datos generales</h2>
                <span className='caption'>
                    informacion basica  de tu empresa en MarvelSmarth.
                </span>
            </Card.Footer>
            <Card.Body className='row'>
                <div className='col-md-4'>
                    <div className='darkBox'>
                        <h3>Logo de tu empresa</h3>
                    </div>
                    <div className='circle'>
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38" width="38" height="38"><defs><image  width="38" height="38" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAAXNSR0IB2cksfwAAANtQTFRFEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkobh5QTgAAAEl0Uk5TAAcvRCSh9P8jVvVi/Uxk6w7sw3atucSqBCgR9mrbqwVG95lH/jScCMUN/AzntrcB7TIi8wNViJEbTpX7u75BfxT4ypdbENbLMTHDZL4AAAD8SURBVHic7dTZVsIwEAbgASzDUrBlqSgqyFoFBK37xqrw/k8Ek0Ll1GYS7/lvmjTfmZNMFwAmsXgiHuMA5chIImLSSLEqnUE/mTSjsibuYuakKv+rEI8tXtkFW1yLrCpZYJVp4HDqpLIZn4qqKgVnNKyqFJzT+OKv2nbisiZm9SuaNBS1mkK12joKO1rK6WrsC93wMzio/6nI3rvXIZW70VG9vo7yXzylggHdv1Wp4YgW7hQK7mnBe+A6QXkUb56iFsATLT3Dy+vbO6PgQ3xhflPkyj9BkMh97U4Q5DO6FsDXHvLGNYmCyfanOJ3NF98ytEnip7qc51fSOiJrcEcmFv5GPNEAAAAASUVORK5CYII="/></defs><style></style><use  href="#img1" x="0" y="0"/></svg>
                    </div>
                    <p className='mt-3'>Si necesitas ayuda para añadir el logo, haz <a href="">click aquí</a>.</p>
                </div>
                <div className='col-md-8'>
                    <div className='container row'>
                        <FormCustom
                            title='Razon Social'
                            type='text'
                            holder='Agrega un titulo'
                            classCustom='col-md-6'
                        />
                        <FormCustom
                            title='RNC/Cédula'
                            type='text'
                            holder='Agrega un titulo'
                            classCustom='col-md-6'
                        />

                    </div>
                    <div className='container row mt-3'>
                        <FormCustom
                            title='Nombre comercial'
                            type='text'
                            holder='Agrega un titulo'
                            classCustom='col-md-6'
                        />
                        <FormCustom
                            title='Telefono'
                            type='text'
                            holder='Agrega un titulo'
                            classCustom='col-md-6'
                        />

                    </div>
                    <div className='container row mt-3'>
                        <FormCustom
                            title='Direccion'
                            type='text'
                            holder='Agrega un titulo'
                            classCustom='col-md-6'
                        />
                        
                        <FormCustom
                            title='Provincia'
                            type='text'
                            holder='Agrega un titulo'
                            classCustom='col-md-3'
                        />
                        <FormCustom
                            title='Municipio'
                            type='text'
                            holder='Agrega un titulo'
                            classCustom='col-md-3'
                        />

                    </div>
                    <div className='container row mt-3'>
                        <FormCustom
                            title='Correo electronico'
                            type='text'
                            holder='Agrega un titulo'
                            classCustom='col-md-6'
                        />
                        <FormCustom
                            title='Sitio Web'
                            type='text'
                            holder='Agrega un titulo'
                            classCustom='col-md-6'
                        />

                    </div>
                    
                </div>

            </Card.Body>
        </Card>
    </div>
  )
}
