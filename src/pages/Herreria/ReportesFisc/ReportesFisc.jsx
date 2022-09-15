import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';  

export const ReportesFisc = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between' style={{padding:'5%'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Retenciones</h3>
            <div className='d-flex align-items-baseline justify-content-around' style={{width:'30%'}} >
                <h4 className='letter' style={{marginLeft:'13px'}}>
                    Reporte a configurar
                </h4>
                <ButtonCustom  
                    styles={{
                        background: '#f6c94c',
                        color: '#101928',
                    }}
                    classe='mt-3'
                    title='Reporte 606'
                    //handle={handleOpen}        
                />
            </div>
        </header>
        <p className='caption-sm' style={{color:'#f6c84c', marginLeft:'5%'}}>
            Selecciona un reporte y configura sus categorias DGIL.
        </p>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
            <Card.Body>
                  
              <Table striped hover>
              <thead >
                  <tr>
                    <th>
                      Nombre
                    </th>
                    <th>
                      Categoria DGII
                    </th>
                    <th>
                      Tipo de compra
                    </th>                    
                </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    <td className='h6' onClick={()=>setShow(true)}>
                        Costo de venta y operacion
                    </td>
                    <td className='h6'>
                      
                    </td>
                    <td className='h6'> 
                        
                    </td>         
                </tr>
                <tr className='mt2'>
                    <td className='h6' onClick={()=>setShow(true)}>
                        Costo de venta y operacion
                    </td>
                    <td className='h6'>
                        Compra y gastos que hacen parte del costo de venta
                    </td>
                    <td className='h6'> 
                        Bienes
                    </td>         
                </tr>
               
                </tbody>
              </Table>
              </Card.Body>
          </Card> 
    </div>
  )
}
