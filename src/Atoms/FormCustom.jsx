import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
export const FormCustom = ({classCustom="col-md-4",title='hola' , type="email", holder='name@example.com', styles, classInput }) => {
  return (
    <Form.Group className={classCustom} controlId="formBasicEmail">
        <Form.Label className='label-title'>{title}</Form.Label>
        <Form.Control type={type} placeholder={holder} style={styles} className={classInput} />
    </Form.Group>
  )
}

