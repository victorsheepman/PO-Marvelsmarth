import React from 'react'
import { ButtonCustom } from '../../../../Atoms/ButtonCustom'
import { ButtonSetup } from '../../../../Atoms/ButtonSetup'
import { SetUp } from '../../../../container/SetUp/SetUp'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { CheckExample } from '../../../../Atoms/FormCheck';
export const TiposOperaciones = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 
                className='ListaClientes' 
                style={{color:'#f6c84c',fontSize:'35px'}}
            >
                Tipos de operaciones
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
                        Tipo de operacion
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr className='mt2'>
                        <td>
                            <CheckExample />
                        </td>
                        <td className='h6'>
                            Recepcion de mercancia
                        </td>
                  </tr>
                  <tr className='mt2'>
                        <td>
                            <CheckExample />
                        </td>
                        <td className='h6'>
                            Transferencias internas
                        </td>
                  </tr>
                    <tr className='mt2'>
                        <td>
                            <CheckExample />
                        </td>
                        <td className='h6'>
                            Entregas de mercancia
                        </td>
                    </tr>
                    <tr className='mt2'>
                        <td>
                            <CheckExample />
                        </td>
                        <td className='h6'>
                            Devoluciones
                        </td>
                    </tr>
                    <tr className='mt2'>
                        <td>
                            <CheckExample />
                        </td>
                        <td className='h6'>
                            Ordenes de produccion
                        </td>
                    </tr>
                </tbody>
              </Table>
              </Card.Body>
          </Card> 

    </div>
  )
}
