import React from 'react'
import { ButtonCustom } from '../../Atoms/ButtonCustom'
import { ButtonSetup } from '../../Atoms/ButtonSetup'
import { SetUp } from '../SetUp/SetUp'
import { CheckExample } from '../../Atoms/FormCheck';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
export const PresupuestoEmpty = () => {
  return (
    <div className='reposicion'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Presupuesto
            </h3>
        </header>
        <SetUp >
            <ButtonCustom    
                title='CREAR'
                styles={{
                    width:'170px',
                    background:'#f6c94c',
                    color: 'black',
                    marginLeft:'3%'
                }}
            />
            <ButtonSetup />
            <ButtonSetup 
                styles={{width:'350px'}}
                title='Agrupado por'
                bootstrap='d-flex align-item-center justify-content-center'
            />
            <ButtonSetup 
                title='Favoritos'
            />
        </SetUp>
        <Card className='mt-4 mx-auto' style={{width:'95%', border:'unset'}}>
              <Card.Body>
                  
              <Table striped hover>
                <thead >
                  <tr>
                    <th>
                        <CheckExample />
                    </th>
                    <th>
                        Numero
                    </th>
                    <th>
                        Fecha de creacion
                    </th>
                    <th>
                       Cliente
                    </th>
                    <th>
                        Comercial
                    </th>
                    <th>
                        Actividad Reciente
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    <td>
                        <CheckExample />
                    </td>
                    <td>
                        REF 0001
                    </td>
                    <td className='h6'>
                        13/11/2022
                    </td>
                    <td className='h6'> 
                        Thomas passot
                    </td>
                    <td className='h6'>
                       Henry Campell
                    </td>
                    <td className='h6'>
                        Viverra nam
                    </td>
                  </tr>  
                </tbody>
              </Table>
              </Card.Body>
          </Card> 
        
    </div>
  )
}
