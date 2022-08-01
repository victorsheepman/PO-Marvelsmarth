import React from 'react'
import { ButtonCustom } from '../../Atoms/ButtonCustom'
import { ButtonSetup } from '../../Atoms/ButtonSetup'
import { SetUp } from '../SetUp/SetUp'

import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../Atoms/FormCheck';

export const Reposicion = () => {
  return (
    <div className='reposicion'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Reposicion</h3>
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
                        Producto
                    </th>
                    <th>
                        Ubicacion
                    </th>
                    <th>
                        A mano
                    </th>
                    <th>
                        Prevision
                    </th>
                    <th>
                        Ruta preferida
                    </th>
                    <th>
                        Cantidad minima
                    </th>
                    <th>
                        Cantidad maxima
                    </th>
                    <th>
                        Para ordenar
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    <td>
                        <CheckExample />
                    </td>
                    <td className='h6'>
                        Laoreet id
                    </td>
                    <td className='h6'> 
                        Interget vitae
                    </td>
                    <td className='h6'>
                        4,27
                    </td>
                    <td className='h6'>
                        99,63
                    </td>
                    <td className='h6'>
                        In massa
                    </td>
                      <td className='h6'>
                       32,22
                    </td>
                    <td className='h6'>
                        35,39
                    </td>
                    <td className='h6'>
                        25,58
                    </td>
                  </tr>
                  <tr className='mt2'>
                    <td>
                        <CheckExample />
                    </td>
                    <td className='h6'>
                        Laoreet id
                    </td>
                    <td className='h6'> 
                        Interget vitae
                    </td>
                    <td className='h6'>
                        4,27
                    </td>
                    <td className='h6'>
                        99,63
                    </td>
                    <td className='h6'>
                        In massa
                    </td>
                      <td className='h6'>
                       32,22
                    </td>
                    <td className='h6'>
                        35,39
                    </td>
                    <td className='h6'>
                        25,58
                    </td>
                  </tr>
                  <tr className='mt2'>
                    <td>
                        <CheckExample />
                    </td>
                    <td className='h6'>
                        Laoreet id
                    </td>
                    <td className='h6'> 
                        Interget vitae
                    </td>
                    <td className='h6'>
                        4,27
                    </td>
                    <td className='h6'>
                        99,63
                    </td>
                    <td className='h6'>
                        In massa
                    </td>
                      <td className='h6'>
                       32,22
                    </td>
                    <td className='h6'>
                        35,39
                    </td>
                    <td className='h6'>
                        25,58
                    </td>
                  </tr>
                </tbody>
              </Table>
              </Card.Body>
          </Card> 
        
    </div>
  )
}
