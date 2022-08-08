import React from 'react'
import Card from 'react-bootstrap/Card';
import { Config } from '../../Atoms/Config';
export const Configuracion = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Configuracion</h3>
        </header>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
            <Card.Body className='d-flex justify-content-between'>
                <div className='col-md-2'>
                    <h4 className='title-3'>Empresa</h4>
                    <h2>MarvelSmarth</h2>
                </div>
                <div className='col-md-2'>
                    <h4 className='title-3'>Identificacion</h4>
                    <h2>---</h2>
                </div>
                <div className='col-md-2'>
                    <h4 className='title-3'>Logo</h4>
                    <img src="../assets/images/logo.png" alt="" width={200} />
                </div>
                <div className='col-md-2'>
                    <h4 className='title-3'>Version de la web</h4>
                    <h2>Republica Dominicana</h2>
                </div>
                <div className='col-md-2'>
                    <h4 className='title-3'>Plan Anual</h4>
                    <div className='demo'>
                        <p>DEMO</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
        <div className='container-lg d-flex mt-3 justify-content-between'>
            <Config 
            
                footer={[
                   'Empresa',
                   'Usuarios',
                   'Centro de costos',
                   'Multimoneda',
                   'Sucursales',
                   'Fecha de cierre'     
                ]}
            
            />
            <Config 
                title='Facturación'
                body='Configura información que se mostrará en tus facturas.'
                footer={[
                    'Terminos de pago',
                    'Numeracion',
                    'Datos generales',
                    'Vendedores',
                    'Facturacion',
                 ]}
            
            />
            <Config 
                title='Plantillas de impresión'
                body='Administra las plantillas de impresión de tus documentos.'
                footer={[
                    'Plantillas'
                ]}
            />
            <Config 
                title='Impuestos'
                body='Define aquí los tipos de impuestos y retenciones que aplicas a tus facturas'
                footer={[
                    'Impuestos',
                    'Retenciones',
                    'Configuracion de reportes',
                    'Fiscales',
                    'Condiguracion avanzada',
                ]}
            />

        </div>
        <div className='container-lg d-flex mt-3 justify-content-between'>
            <Config 
            
                footer={[
                   'Empresa',
                   'Usuarios',
                   'Centro de costos',
                   'Multimoneda',
                   'Sucursales',
                   'Fecha de cierre'     
                ]}
            
            />
            <Config 
                title='Facturación'
                body='Configura información que se mostrará en tus facturas.'
                footer={[
                    'Terminos de pago',
                    'Numeracion',
                    'Datos generales',
                    'Vendedores',
                    'Facturacion',
                 ]}
            
            />
            <Config 
                title='Plantillas de impresión'
                body='Administra las plantillas de impresión de tus documentos.'
                footer={[
                    'Plantillas'
                ]}
            />
            <Config 
                title='Impuestos'
                body='Define aquí los tipos de impuestos y retenciones que aplicas a tus facturas'
                footer={[
                    'Impuestos',
                    'Retenciones',
                    'Configuracion de reportes',
                    'Fiscales',
                    'Condiguracion avanzada',
                ]}
            />

        </div>
    </div>
  )
}
