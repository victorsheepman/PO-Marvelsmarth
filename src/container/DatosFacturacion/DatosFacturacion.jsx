import React from 'react'
import { useState } from 'react'
import { ButtonCustom } from '../../Atoms/ButtonCustom'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
export const DatosFacturacion = () => {
    const [show, setShow] = useState(true)
  return (
    <div className={show ? 'datosFactura animate__animated animate__fadeIn' : 'datosFactura animate__animated animate__fadeIn'}>
    <section className='datosFactura__aside--white'>
       <svg className='ml-3' onClick={()=>setShow(false)} version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" width="41" height="41"><defs><image  width="41" height="41" id="img1" href="data:image/png;base64,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"/></defs><style></style><use  href="#img1" x="0" y="0"/></svg>
        <figure className='datosFactura__done'>
           
        </figure>
        <h3 className='title-3'>
           No pagada
        </h3>
        <ButtonCustom
            title='Pagar ahora'
            styles={
                {
                    width:'90%',
                    background:'#101928',
                    color:'white'

                }
               

            }
        />
        <ButtonCustom 
            title='Volver al calendario'
            styles={
                {
                    width:'90%',
                    color:'#101928',
                    background:'white',
                    border:'1px solid #101928'
                    

                }
               

            }
            classe='mt-2'
        />
        <ButtonCustom 
            title='Acciones'
            styles={
                {
                    width:'90%',
                    color:'#101928',
                    background:'white',
                    border:'1px solid #101928'
                    

                }
               

            }
            classe='mt-2'
        />
         <ButtonCustom 
            title='Datos de facturacion'
            styles={
                {
                    width:'90%',
                    color:'#101928',
                    background:'#e5f1ff',
                }
               

            }
            classe='mt-2'
        />
    </section>
    <section className='datosFactura__content--white'> 
    <p className='subtitle text-body'>Datos de facturación</p>
        <Card className='mx-auto'>
            <Card.Body className='d-flex flex-column align-items-center'>
                <p className='title-3 text-body'>Invoce #5</p>
                <span className='caption'>miercoles, 18 may. 2022</span>
                <span className='caption mt-1'>
                    Facturado a Karen popa
                </span>
                <Badge bg="success mt-2">Completado</Badge> 
                <div className='container'>
                    <p>Articulo</p>
                    <p>Corte basico + barba</p>
                    <span className='text-secondary'>With joseph Collado</span>
                </div>  
                <div className='container mt-4'>
                    <p className='label-title'>Subtotal</p>
                    <p className='label-title'>Total</p>
                    <p className='label-title'>Saldo</p>
                </div>
            </Card.Body>
            <Card.Footer className='bg-white'>
               
            </Card.Footer>
        </Card>
    </section>
</div>
  )
}
