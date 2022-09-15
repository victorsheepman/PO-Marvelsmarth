import React from 'react'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
export const VentasRapido = () => {
  return (
    <div className='ventasrapido'>
        <section className='ventasrapido__header'>
            <p className='subtitle'>Resumen de ventas rápido</p>
            <p className='body-md'>Ve, filtra y exporta el movimiento de las transacciones y la caja por un dia determinado</p>
        </section>
        <div className='calendar__header'>
            <button className='calendar__button'>
                Todos
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            <button className='calendar__button--md'>
                HOY jueves 12 may, 2022
            </button>
            <div className='calendar__content'>
                <button className='calendar__button--sm'>
                    Exportar
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
                
            </div>
        </div>
        <section className='ventasrapido__body'>
            <Card style={{width:'48%'}}>
                <Card.Header className='bg-white'>
                    <h3 className='title-3 text-body'>
                        Resumen de las transacciones                                   
                    </h3>
                </Card.Header>
                <Card.Body>
                <Table striped>
                    <thead>
                        <tr>
                        <th>Tipo de articulo</th>
                        <th>Cont. de ventas</th>
                        <th>Cant. Reembolsada</th>
                        <th>Total Bruto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Services</td>
                            <td>1</td>
                            <td>0</td>
                            <td>3000,00 DOP</td>
                        </tr>
                        <tr>
                            <td>Products</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0,00 DOP</td>
                        </tr>
                        <tr>
                            <td>Shopping</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0,00 DOP</td>
                        </tr>
                        <tr>
                            <td>Vouchers</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0,00 DOP</td>
                        </tr>
                        <tr>
                            <td>Late cancellation fees</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0,00 DOP</td>
                        </tr>
                        
                    </tbody>
                </Table>
                </Card.Body>
            </Card>
            <Card style={{width:'48%'}}>
                <Card.Header className='bg-white'>
                    <h3 className='title-3 text-body'>
                        Resumen del Movimiento de la caja
                    </h3>
                </Card.Header>
                <Card.Body>
                <Table striped>
                    <thead >
                        <tr>
                            <th>Tipo de pago</th>
                            <th>Pago recibidos</th>
                            <th>Reembolsos pagados</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Coach</td>
                            <td>3000,00 DOP</td>
                            <td>0,00 DOP</td>
                            
                            
                        </tr>
                        <tr>
                            <td>Transferencias</td>
                            <td>0,00 DOP</td>
                            <td>0,00 DOP</td>
                            
                        </tr>
                        <tr>
                            <td>Tarjeta</td>
                            <td>0,00 DOP</td>
                            <td>0,00 DOP</td>
                            
                            
                        </tr>
                        <tr>
                            <td>Efectivo</td>
                            <td>0,00 DOP</td>
                            <td>0,00 DOP</td>  
                            
                            
                            
                        </tr>
                        <tr>
                            <td>Vouchers Redemtions</td>
                            <td>0,00 DOP</td>
                            <td>0,00 DOP</td>  
                            
                            
                           
                        </tr>
                        <tr>
                            <td className='label-title'>Payment Collected</td>  
                            <td className='label-title'>3000,00 DOP</td>
                            <td className='label-title'>0,00 DOP</td> 
                        </tr>
                        <tr>
                            <td className='label-title'>Of wich tips</td> 
                            <td className='label-title'>0,00 DOP</td>
                            <td className='label-title'>0,00 DOP</td>  
                        </tr>

                        
                    </tbody>
                </Table>
                </Card.Body>
            </Card>
        </section>  
    </div>
  )
}
