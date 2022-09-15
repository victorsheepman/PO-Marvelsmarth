import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import { ButtonSetup } from '../../../Atoms/ButtonSetup'
import { SetUp } from '../../../container/SetUp/SetUp'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../../Atoms/FormCheck';
import { Udm } from '../../../Atoms/Udm';
export const CategoriasUdm = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Categoría de las unidades de medida</h3>
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
                        Categoría de unidades  de medida
                    </th>
                    <th>
                        UdM
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                <tr className='mt2'>
                    <td>
                        <CheckExample />
                    </td>
                    <td className='h6' onClick={()=>setShow(true)}>
                        Unidad
                    </td>
                    
                      <td className='h6' >
                      <div className='container d-flex'>
                            <Udm  />
                            <Udm title='Docenas' background='white' bootstrap='mx-2' />
                        </div>
                        
                    </td>
                </tr>
                <tr className='mt2'>
                    <td>
                        <CheckExample />
                    </td>
                    <td className='h6' onClick={()=>setShow(true)}>
                        Peso
                    </td>
                    
                    <td className='h6 ' >
                        <div className='container d-flex'>

                            <Udm title='g' background='white' />
                            <Udm title='oz' background='white' bootstrap='mx-2' />
                            <Udm title='lb' background='white' bootstrap='mx-2' />
                            <Udm title='kg'  bootstrap='mx-2' />
                            <Udm title='l' background='white' bootstrap='mx-2' />
                        </div>


                        
                    </td>
                </tr>
                <tr className='mt2'>
                    <td>
                        <CheckExample />
                    </td>
                    <td className='h6' onClick={()=>setShow(true)}>
                        Hora de trabajo
                    </td>
                    
                    <td className='h6 ' >
                        <div className='container d-flex'>

                            <Udm title='Horas' background='white' />
                            <Udm title='Dias'  bootstrap='mx-2' />

                        </div>
                    </td>
                </tr>
                <tr className='mt2'>
                    <td>
                        <CheckExample />
                    </td>
                    <td className='h6' onClick={()=>setShow(true)}>
                        Longitud / Distancia
                    </td>
                    
                    <td className='h6 ' >
                        <div className='container d-flex'>

                            <Udm title='mm' background='white' />
                            <Udm title='cm' background='white' bootstrap='mx-2' />
                            <Udm title='en' background='white' bootstrap='mx-2' />
                            <Udm title='ft' background='white' bootstrap='mx-2' />
                            <Udm title='yd' background='white' bootstrap='mx-2' />
                            <Udm title='m'  bootstrap='mx-2' />
                            <Udm title='km' background='white' bootstrap='mx-2' />
                            <Udm title='mi' background='white' bootstrap='mx-2' />

                        </div>
                    </td>
                </tr>
                
                  
                </tbody>
              </Table>
              </Card.Body>
          </Card> 
    </div>
  )
}
