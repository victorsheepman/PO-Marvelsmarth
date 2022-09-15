import React from 'react'

import Card from 'react-bootstrap/Card';
import { Switch } from '../../../Atoms/Switch';
export const PagoLinea = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header flex-column align-items-start' style={{marginTop:'30px'}}>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Pago en linea</h3>
                   
        </header> 
        <p className='body-sm mt-3'>Configura y activa los metodos de pago; tus clientes podran hacer uso de estos para pagar sus facturas</p>
        <div className='container mx-auto d-flex justify-content-between' style={{width:'95%', backgroundColor:'#f6c94c', marginTop:'50px', padding:'2%'}}>
            <Card>
                <Card.Body>
                    <Switch 
                        label='Inactivo'
                    />
                    <figure class="img-thumbnail" style={{
                        width: '250px',
                        height: '200px',
                    }}>
                        <img src="../../assets/images/visa.jpg" alt="" srcset="" style={{width:'100%', height:'100%'}}/>
                    </figure>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-center align-items-center' style={{color:'#f6c94c',backgroundColor:'#101928' }}>
                    Visanet
                </Card.Footer>
            </Card>
            
        </div>
    </div>
  )
}
