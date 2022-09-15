import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import { FormSelection } from '../../../Atoms/FormSelection'
import Table from 'react-bootstrap/Table';
export const Contabilidad = () => {
  return (
    <div className='container-lg row' >
        <section className='col-md-6'>
            <h3 className='title-3'>Cuentas bancarias</h3>
            <Table striped hover>
                <thead >
                  <tr>
                    <th>
                        Banco
                    </th>
                    <th>
                        Numero de cuenta
                    </th>
                   
                  </tr>
                </thead>
                <tbody>
                    <tr className='mt2'>
                        
                    </tr>
                </tbody>
              </Table>
              <h3 className='label-title text-primary'>+ Agregar Linea</h3>
        </section>
        <section className='col-md-6'>
            <h3 className='title-3'>Asiento Contable</h3>
            <FormSelection 
                styles={
                    {
                        border:'none',
                        borderBottom:"1px solid black"
                                
                    }
                }
                title='Cuenta a cobrar'
                classCustom='col-md-12 d-flex align-items-baseline'
                type='text'
                holder=''
            >
                <option>11030201 Cuentas por cobrar a clientes</option>
            </FormSelection>
            <FormSelection 
                styles={
                    {
                        border:'none',
                        borderBottom:"1px solid black"
                                
                    }
                }
                title='Cuenta a pagar'
                classCustom='col-md-12 d-flex align-items-baseline'
                type='text'
                holder=''
            >
                <option>11030201 Cuentas por cobrar a clientes</option>
            </FormSelection>
        </section>
        <h4 className='label-title text-primary'>Ver detalles de cuenta nueva</h4>
        <div className='container d-flex justify-content-end align-items-center'>
            <ButtonCustom 
                styles={{
                    background: 'white',
                    color: 'black',
                }}
                title='Cancelar'
                    
                    
            />  
            <ButtonCustom 
                styles={{
                    background: 'black',
                    color: '#f6c94c',
                    marginLeft:'2%'
                }}
                title='Guardar'
                    
            />   

        </div>
    </div>
  )
}
