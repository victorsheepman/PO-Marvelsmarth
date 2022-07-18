import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';

export const Factura = ({name='Helena Huelbes', hours='9:00am - 9:30am', price='12.000'}) => {
    const [click, setClick] = useState(0);
  return (
    <Card className='mt-3' style={{
        borderLeft:'4px solid blue'
    }} onClick={()=>setClick(1)} >
        <Card.Body className='d-flex'>
            <section className='factura__date'>
                <p className='label-title'>{hours}</p>
                <span className='caption'>Monday</span>
               
            </section>
            <div className='factura__line'></div>
            <section className='factura__items'>
                <p className='label-title'>{name}</p>
                <ul>
                    <li className='caption--sm'>
                        30 min con Genesis - Pedicure, Normal
                    </li>
                    <li className='caption--sm'>
                        30 min con Genesis - Pedicure, Normal
                    </li>
                    <li className='caption--sm'>
                        30 min con Genesis - Pedicure, Normal
                    </li>
                    <li className='caption--sm'>
                        30 min con Genesis - Pedicure, Normal
                    </li>
                </ul>
                
            </section>
            <section className='factura__price'>
                <p className='label-title'>{price} DOP</p>
            </section>
        </Card.Body>
    </Card>
  )
}
