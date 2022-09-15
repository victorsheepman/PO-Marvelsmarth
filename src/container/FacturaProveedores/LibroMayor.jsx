import React from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
export const LibroMayor = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{padding:'5%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Catalogo de cuentas</h3>
            <div style={{width:'40%'}}>
                <ButtonCustom    
                        styles={{
                            background: '#f6c94c',
                            color: '#101928',
                            
                        }}
                        classe='mt-3'
                        title='Pdf'
                        //handle={handleModalOpen}
            />  
            <ButtonCustom    
                styles={{
                    background: '#f6c94c',
                    color: '#101928',
                    marginLeft:'4%'

                        
                }}
                classe='mt-3'
                title='XLSX'
                //handle={handleModalOpen}
            />  
            </div>
        
        </header>
        <div className='container mx-auto d-flex justify-content-center align-items-center' style={{width:'95%', border:'unset', backgroundColor:'#f6c84c'}}>
            <p className='caption-sm text-body'>
            Hay asientos contables sin publicar anterior o incluido en este periodo
            </p>
        </div>
        <Card className='mx-auto' style={{width:'95%', border:'unset', marginTop:'20px'}}>
            <Card.Body>
            <Table striped hover>
                <thead >
                  <tr className='d-flex justify-content-around'>
                    <th>
                      DIARIO
                    </th>
                    <th>
                      Cuenta
                    </th>
                    <th>
                       Ref
                    </th>
                    <th>
                       Fecha de vencimiento
                    </th>
                    <th>
                       Numeros coincidentes
                    </th>
                    <th>
                       Saldo inicial
                    </th>
                    <th>
                       Debito
                    </th>
                    <th>
                       Credito
                    </th>
                    <th>
                       Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Total
                        </td>
                            
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
        
    </div>
  )
}
