import React from 'react'
import Card from 'react-bootstrap/Card';

export const InfoCliente = () => {
  return (
    <Card>
        <Card.Header>
            <div className='container row'>
                <h4 className='title-4 col-md-6'>Fotos del antes y el despues</h4>
                <h4 className='title-4 col-md-6'>Informacion del cliente</h4>
            </div>
        </Card.Header>
    </Card>
  )
}
