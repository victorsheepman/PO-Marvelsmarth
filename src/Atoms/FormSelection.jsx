import React from 'react'
import Form from 'react-bootstrap/Form';
export const FormSelection = ({title="Hora de inicio", children, classCustom="col-md-4", styles}) => {
  return (
    <Form.Group className={classCustom} controlId="formBasicEmail">
        <Form.Label className='label-title'>{title}</Form.Label>
        <Form.Select aria-label="Default select example" style={styles}>
            {children}
        </Form.Select>
    </Form.Group>
  )
}

