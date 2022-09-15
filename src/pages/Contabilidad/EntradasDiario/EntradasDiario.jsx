import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
export const EntradasDiario = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{marginRight:'4%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                entradas de diario
            </h3> 
            <div className='d-flex align-items-baseline ' style={{width:'50%'}} >
                <h4 className='letter' style={{marginLeft:'0px'}}>
                    Crear saldos iniciales
                </h4>
                <ButtonCustom   
                    styles={{
                        background: '#f6c94c',
                        color: '#101928',
                    }}
                    classe='mt-3 mx-4'
                    title='+ Nueva entrada de dario'
                    //handle={handleOpen}        
                />
            </div>
        </header>
        <Card className='mx-auto' style={{width:'90%', border:'unset', marginTop:'50px'}}>
              <Card.Body>
                  
              <Table striped hover>
                <thead >
                  <tr>
                   
                    <th>
                        Nombre
                    </th>
                    <th>
                        Fecha 
                    </th>
                    <th>
                        Referencia
                    </th>
                    <th>
                        Observaciones
                    </th>
                    <th>
                        Total
                    </th>
                    <th>
                        Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    
                  </tr>
                  
                </tbody>
              </Table>
              </Card.Body>
              <Card.Footer  style={{
                backgroundColor:'#101928'
            }}>
                <p className='caption--sm' style={{color:'#f6c84c'}} >
                    Mostrando 1 de 1 resultados
                </p>
            </Card.Footer>  
          </Card>
        <div className='container d-flex flex-column justify-content-center align-items-center' style={{marginTop:'30px'}}>
            <p className='body-md'>¡Aún no has creado tu primera entrada de dario!</p>
            
            <div className='container d-flex align-items-baseline justify-content-center' style={{width:'50%'}} >
                <h4 className='letter' style={{marginLeft:'0px'}}>
                    Crear saldos iniciales
                </h4>
                <ButtonCustom   
                    styles={{
                        background: '#f6c94c',
                        color: '#101928',
                    }}
                    classe='mt-3 mx-4'
                    title='+ Nueva entrada de dario'
                    //handle={handleOpen}        
                />
            </div>  
        </div>
    </div>
  )
}
