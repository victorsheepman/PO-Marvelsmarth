import React from 'react'
import Card from 'react-bootstrap/Card';
import { CardFooter } from 'reactstrap';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { UserCalendar } from '../../components/UserCalendar/UserCalendar';
export const FacturaCliente = () => {
  return (
    <Card className='facturaCliente'>
        <Card.Header style={{height:'120px'}}>
            <UserCalendar
                user='Victor'
                letra='V'
                flex={true} 
            />
            <span className='facturaCliente__etiqueta'>
                NUEVO CLIENTE
            </span>
        </Card.Header>
        <Card.Body style={{position:'relative'}}>
            <div className='facturaCliente__space'>
                <p className='caption'>Articulo</p>
                <p className='caption'>Cantidad</p>
            </div>
            <div className='facturaCliente__space mt-3'>
                <p className='caption text-primary'>Tecnica</p>
                <p className='caption text-body'>1x 12.000 DOP</p>
            </div>
            <p className='caption' style={{textAlign:'left'}}>30min con Wanda Caceres</p>
            <p className='caption' style={{textAlign:'left'}}>Balayage</p>
            <div className='w-100  facturaCliente__bottom '>
                <div className='facturaCliente__space'>
                    <p className='caption text-body'>SubTotal</p>
                    <p className='caption text-body'>12.000 DOP</p>
                </div>
                <div className='facturaCliente__space'>
                    <p className='caption text-body'>Impuestos & Comisiones</p>
                    <p className='caption text-body'>0 DOP</p>
                </div>
                <div className='facturaCliente__space'>
                    <p className='caption text-body'>Total</p>
                    <p className='caption text-body'>12.000 DOP</p>
                </div>
            </div>
        </Card.Body>
        <CardFooter>
            <div className='facturaCliente__space'>
                <p className='caption text-body'>Pagar</p>
                <p className='caption text-body'>12.000 DOP</p>
            </div>
            <div className='facturaCliente__space row' style={{marginLeft:'5px'}}>

                <ButtonCustom 
                    classe='col-md-2'
                    styles={
                        {
                            background: '#101928',
                        }
                    }
                />

                    <ButtonCustom 
                        classe='col-md-6'
                       styles={
                        {
                           
                            background: '#101928',
                            color: 'white',
                        }
                       }
                       title='Guardar'
                    />
            </div>
        </CardFooter>

    </Card>
  )
}
