import React  from 'react'
import { ButtonSetup } from '../../Atoms/ButtonSetup'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export const SetUp = ({children, styles={borderRadius:'30px', width:'420px'}}) => {
  return (
        <div className='calendar__header mt-4'>
            <InputGroup style={styles}>
            <Form.Control
                style={{borderRadius:'30px',}}
                placeholder="Buscar..."
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
            </InputGroup>
            {children}
    </div>
  )
}
