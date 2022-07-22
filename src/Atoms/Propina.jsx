import React from 'react'
import Card from 'react-bootstrap/Card';
export const Propina = ({children}) => {

    return (
    <Card 
        className='text-center'
        style={
            {  
                width: '300px',
                height: '120px',
            }
        }
        //onClick={()=>setNumber}
    >
        <Card.Body 
            className='d-flex flex-column  align-items-center justify-content-center' 
        >
            {children}
        </Card.Body>
    </Card>
  )
}
