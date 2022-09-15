import React from 'react'
import { ButtonSetup } from '../../../../Atoms/ButtonSetup'
import { CheckExample } from '../../../../Atoms/FormCheck'
import { SetUp } from '../../../../container/SetUp/SetUp'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
export const ReglasEstrateguia = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Reglas de estrategia de traslado</h3>
        </header>
        <SetUp >
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
                       Cuando llega el producto
                    </th>
                    <th>
                        Producto
                    </th>
                    <th>
                        Categoria de producto
                    </th>
                    <th>
                        Sub-ubicación
                    </th>
                    <th>
                        Nombre del recurso
                    </th>
                </tr>
                </thead>
                <tbody>
                    
                </tbody>
              </Table>
              </Card.Body>
          </Card> 
    </div>
  )
}
