import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import { FormSelection } from '../../../Atoms/FormSelection'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
export const LibroDiario = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Transferencia</h3>
        </header>
        <p className='caption-sm' style={{color:'#f6c84c', marginLeft:'5%'}}>
            Consulta los asientos contables de tu empresa en el periodo de tiempo que elijas
        </p>
        <div className='container-lg row justify-content-between'>
            <ButtonCustom 
                title='este mes'
                styles={{
                    width:'170px',
                    background:'#f6c94c',
                    color: 'black',
                    marginLeft:'3%',
                    height:'30px'
                }}
                classe='col-md-3 d-flex align-items-center justify-content-center'
                
            />
            <FormSelection
                styles={
                    {
                        border:'none',
                        border:"1px solid black",
                        
                    }
                }
                title='Desde'
                classCustom='col-md-2 d-flex align-items-baseline '
                classInput='nuevaTrasferencia__input'
                type='number'
                holder='07/06/2022'
                colorLabel='#f6c94c'
            >
                <option value=""></option>
            </FormSelection>
            <FormSelection
                styles={
                    {
                        border:'none',
                        border:"1px solid black",
                        
                    }
                }
                title='Hasta'
                classCustom='col-md-2 d-flex align-items-baseline '
                classInput='nuevaTrasferencia__input'
                type='number'
                holder='07/06/2022'
                colorLabel='#f6c94c'
            >
                <option value=""></option>
            </FormSelection>
            <FormSelection
                styles={
                    {
                        border:'none',
                        border:"1px solid black",
                        
                    }
                }
                title='Tipo de registro'
                classCustom='col-md-2 d-flex align-items-center'
                classInput='nuevaTrasferencia__input'
                type='number'
                holder='07/06/2022'
                colorLabel='#f6c94c'
            >
                <option value=""></option>
            </FormSelection>
            <ButtonCustom 
                title='generar reporte'
                styles={{
                    width:'170px',
                    background:'#f6c94c',
                    color: 'black',
                    marginLeft:'3%',
                    height:'40px'
                }}
                classe='col-md-3 d-flex align-items-center justify-content-center'
                
            />

        </div>
        <Card className='mx-auto' style={{width:'90%', border:'unset', marginTop:'50px'}}>
              <Card.Body>
                  
              <Table striped hover>
                <thead >
                  <tr>
                   
                    <th>
                        Asiento
                    </th>
                    <th>
                        Fecha 
                    </th>
                    <th>
                        tercero 
                    </th>
                    <th>
                        Documento
                    </th>
                    <th>
                        Codigo
                    </th>
                    <th>
                        Cuenta contanble
                    </th>
                    <th>
                        Debito
                    </th> 
                    <th>
                        Credito
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
            <p className='body-md'>¡No tienes asientos contables en este periodo!</p> 
        </div>
    </div>
  )
}
