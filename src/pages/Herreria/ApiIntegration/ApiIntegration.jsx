import React from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../../Atoms/ButtonCustom';
export const ApiIntegration = () => {
  return (
    <div className='historialServicios row'>
        <div className='col-md-12' >
            <header className='listaClientes__header flex-column align-items-start' style={{marginTop:'30px'}}>
                <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>API - Integraciones con otros sistemas</h3>
                       
            </header> 
            <p className='body-sm mt-3'>
            Con la opción de integraciones manuales -APÍ- de MarvelSmart puedes integrar otros sistemas para mantener actualizada tu informacion. Al compartir 
            tu usuario y token con otras herramientas, estas se sincronizan de forma permanente e ilimitada segun las instrucciones dadas. Encuentra aqui toda la documentacion
            </p>
        </div>
        <Card className='mt-1' style={{width:'50%', border:'unset'}}>
            <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
              <p>
                <strong className='body-sm text-body mx-2'>Usuario:</strong>
                jessicacollado.seniorsolver@gmail.com  
              </p>
              <p style={{marginLeft:'-19%'}}>
                <strong className='body-sm text-body mx-2'>
                  Token:
                </strong>
                0966f0960a27a465d4b8
              </p>  
              <div className='container d-flex justify-content-end align-items-center'>
                <ButtonCustom 
                  title='Renovacion token'
                  styles={{
                      width:'170px',
                      color:'#f6c94c',
                      background: 'black',
                      radius:'10px'
                      
                  }}
                />

              </div>
            </Card.Body>
            <Card.Footer>
              <p className='caption-sm'>
              Las plataformas conectadas a MarvelSmart por medio de API podrá realizar cambios constantes sobre tu informacion.
              Comparte estos datos solo con sistemas de confianza
              </p>
            </Card.Footer>
        </Card>
    </div>
  )
}
