import React from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
export const FechaUpdate = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Define una fecha para actualizar nuevos cambios en el manejo de tu contabilidad
            </h3>
        </header>
        <p className='caption-sm' style={{color:'#f6c84c', marginLeft:'5%'}}>
         Configura el funcionamiento de las opciones contables para tu empresa, haciendo click en el parametro que desees editar.
        </p>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
            <Card.Body>
                  
              <Table striped hover>
              <thead >
                  <tr className='justify-content-between'>
                    <th>
                      Parametro
                    </th>
                    <th>
                      Valor
                    </th>
                    <th>
                      Fecha de modificacion
                    </th>                    
                </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    <td className='h6' >
                        Fecha de inicio para usar cuentas contables asignadas a impuestos y retencion
                    </td>
                    <td className='h6'>
                      
                    </td>
                    <td className='h6'> 
                        2022/06/07 - 10:31AM   2022/06/25 - 11:4
                    </td>         
                </tr>
                </tbody>
              </Table>
              </Card.Body>
          </Card> 
    </div>
  )
}
