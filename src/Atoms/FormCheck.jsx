import React from 'react'
import Form from 'react-bootstrap/Form';

export function CheckExample({classCustom, title, holder}) {
  return (
    <Form.Group className={`d-flex align-items-center ${classCustom}`}>
      <Form.Control type="checkbox" placeholder={holder} style={{width:'30px', height:'30px'}} />
      <Form.Label className='label-title mt-2 mx-2'>{title}</Form.Label>
    </Form.Group>
  )
}