import React from 'react'
import { ButtonCustom } from '../../../../Atoms/ButtonCustom'
import { ButtonSetup } from '../../../../Atoms/ButtonSetup'
import { SetUp } from '../../../../container/SetUp/SetUp'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../../../Atoms/FormCheck';
export const Almacenes = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Almacenes</h3>
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
        <Card className='mt-4 mx-auto' style={{width:'95%', border:'unset'}}>
              <Card.Body>
                  
              <Table striped hover>
                <thead >
                  <tr>
                    <th>
                        <CheckExample />
                    </th>
                    <th>
                        Nombre del almacen
                    </th>
                    <th>
                        Ubicacion de stock
                    </th>
                    <th>
                        Direccon
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    <td>
                        <CheckExample />
                    </td>
                    <td className='h6'>
                      demo-productions
                    </td>
                    <td className='h6'> 
                        Wh/Stock
                    </td>
                    <td className='h6'>
                        demo-productions
                    </td>
                  </tr>
                </tbody>
              </Table>
              </Card.Body>
          </Card> 
    </div>
  )
}
