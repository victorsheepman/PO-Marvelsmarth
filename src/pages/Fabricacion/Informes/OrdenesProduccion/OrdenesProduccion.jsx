import React from 'react'
import { ButtonCustom } from '../../../../Atoms/ButtonCustom'

import Badge from 'react-bootstrap/Badge';
export const OrdenesProduccionInforme = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header justify-content-between px-4'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>órdenes de producción</h3>
            <ButtonCustom 
                title='Medidas'
                styles={{
                    width:'170px',
                    height:'47px',
                    background:'#f6c94c',
                    color: 'black',
                    marginLeft:'3%'
                }}
            />
        </header>
        <div className='container d-flex mt-4 align-items-center' style={{paddingLeft:'5%'}}>
           <img src="../../assets/images/yellow.png" alt="" srcset="" />
           <img src="../../assets/images/iconos.png" alt="" srcset="" className='mx-5'/>
           <Badge 
                //bg="warning"
                style={
                    {
                        height:'20px', 
                        width:'80px', 
                        marginLeft:'12px', 
                        backgroundColor:'#9ae5ef'
                    }
                }
                                
                >
                    Integer Vitae
            </Badge>
            <Badge 
                bg="warning"
                style={
                    {
                        height:'20px', 
                        width:'80px', 
                        marginLeft:'12px', 
                        backgroundColor:'#9ae5ef'
                    }
                }
                                
                >
                    Integer Vitae
            </Badge>
            <Badge 
                bg="success"
                style={
                    {
                        height:'20px', 
                        width:'80px', 
                        marginLeft:'12px', 
                        backgroundColor:'#9ae5ef'
                    }
                }
                                
                >
                    Integer Vitae
            </Badge>
            

        </div>
        <div className='grid mt-4'>
            <aside className='grid__sidebar'>
                <ul>
                    <li>300,00</li>
                    <li>250,00</li>
                    <li>200,00</li>
                    <li>150,00</li>
                    <li>100,00</li>
                    <li>50,00</li>
                    <li>0,00</li>
                </ul>

            </aside>
            <figure className='grid__main'>
                <img src="../../assets/images/barritas.png" alt="" />
            </figure>
            <footer className='grid__footer'>
                <p>Laoreet id</p>
                <p>Laoreet id</p>
                <p>Laoreet id</p>
                <p>Laoreet id</p>
                <p>Laoreet id</p>
                <p>Laoreet id</p>
                
            </footer>

        </div>

    </div>
  )
}
