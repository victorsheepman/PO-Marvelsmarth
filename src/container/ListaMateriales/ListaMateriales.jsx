import React from 'react'
import { ButtonCustom } from '../../Atoms/ButtonCustom'
import { ButtonSetup } from '../../Atoms/ButtonSetup'
import { SetUp } from '../SetUp/SetUp'
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../Atoms/FormCheck';

export const ListaMateriales = () => {
  return (
    <div className='resumenInventario'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c', fontSize:'50px'}}>Lista de materiales</h3>
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
            <ButtonSetup

            />
            <ButtonSetup 
                styles={{width:'350px'}}
                title='Agrupado por'
            />
            <ButtonSetup 
                title='Favoritos'
            />

        </SetUp>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
              <Card.Body>
                  
              <Table striped hover>
                <thead >
                  <tr>
                    <th>
                        <CheckExample />
                    </th>
                    <th>
                        Producto
                    </th>
                    <th>
                        Referencia
                    </th>
                    <th>
                        Tipo de LdMs
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    <td>
                        <CheckExample />
                    </td>
                    <td className='h6'>
                        Volutpat blandit
                    </td>
                    <td className='h6'>
                        
                    </td>
                    <td className='h6'> 
                        Kit
                    </td>
                    
                  </tr>
                  <tr className='mt2'>
                    <td>
                        <CheckExample />
                    </td>
                    <td className='h6'>
                        Volutpat blandit
                    </td>
                    <td className='h6'>
                        
                    </td>
                    <td className='h6'> 
                        Kit
                    </td>
                    
                  </tr>
                  <tr className='mt2'>
                    <td>
                        <CheckExample />
                    </td>
                    <td className='h6'>
                        Volutpat blandit
                    </td>
                    <td className='h6'>
                        
                    </td>
                    <td className='h6'> 
                        Kit
                    </td>
                    
                  </tr>
                  <tr className='mt2'>
                    <td>
                        <CheckExample />
                    </td>
                    <td className='h6'>
                        Volutpat blandit
                    </td>
                    <td className='h6'>
                        
                    </td>
                    <td className='h6'> 
                        Kit
                    </td>
                    
                  </tr>
                  
                  
                </tbody>
              </Table>
              </Card.Body>
          </Card> 
    </div>
  )
}
