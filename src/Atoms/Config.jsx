import React from 'react'
import Card from 'react-bootstrap/Card';
export const Config = ({title='Empresa', footer=['Empresa'] ,body='Configura información de tu empresa y adapta MarvelSmarth a tu negocio'}) => {
  return (
    <Card style={{width:'300px', height:'425px'}}>
        <Card.Header>
            <h3 className='config-title'>{title}</h3>
        </Card.Header>
        <Card.Body>
            <p className='config-span'>{body}</p>
            <ul className='w-100'>
                {
                    footer.map(i =>(
                        <li style={{listStyle:'none'}}>
                            <p className='config-item'>{i}</p> 
                        </li>
                    ))
                }
                

            </ul>
        </Card.Body>
    </Card>
  )
}
