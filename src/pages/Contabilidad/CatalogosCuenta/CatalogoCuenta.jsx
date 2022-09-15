import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
export const CatalogoCuenta = () => {
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
                        title='Saldo iniciales'
                        //handle={handleModalOpen}
            />  
            <ButtonCustom    
                styles={{
                    background: '#f6c94c',
                    color: '#101928',
                    marginLeft:'4%'

                        
                }}
                classe='mt-3'
                title='Exportar a excel'
                //handle={handleModalOpen}
            />  
            </div>
        
        </header>
        <p className='caption-sm' style={{color:'#f6c84c', marginLeft:' 10%'}}>
            Configura y ordena tu catálogo de cuentas personalizando, edita, desactivando o creando nuevas cuentas
        </p>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
              <Card.Body>
                  
              <Table striped hover>
                <thead >
                  <tr>

                    <th>
                        Titulo
                    </th>
                    <th>
                        Descripcion
                    </th>
                    <th>
                        Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    <td className='h6' onClick={()=>setShow(true)}>
                        Activos
                    </td>
                    <td className='h6'>
                        Bajo esta categoría se encuentran los activos que tiene la empresa                   
                        </td>
                    <td className='h6'> 
                        
                    </td>
                   
                </tr>
                  
                <tr className='mt2'>
                    <td className='h6' onClick={()=>setShow(true)}>
                        Pasivos
                    </td>
                    <td className='h6'>
                        Bajo esta categoría se encuentran los pasivos que tiene la empresa                   
                        </td>
                    <td className='h6'> 
                        
                    </td>
                   
                </tr>
                  
                <tr className='mt2'>
                    <td className='h6' onClick={()=>setShow(true)}>
                        Patrimonio
                    </td>
                    <td className='h6'>
                        Bajo esta categoría se encuentran los patrimonio que tiene la empresa                   
                        </td>
                    <td className='h6'> 
                        
                    </td>
                   
                </tr>
                  
                  
                  
                </tbody>
              </Table>
              </Card.Body>
          </Card>
    </div>
  )
}
