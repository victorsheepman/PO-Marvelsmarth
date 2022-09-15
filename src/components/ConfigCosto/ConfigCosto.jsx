import React from 'react'
import Form from 'react-bootstrap/Form';
export const ConfigCosto = ({title='Factura'}) => {
  return (
    <div className='row  align-items-center mt-3' style={{width:'100%'}}>
      <div className='col-md-3'>
      <span className='label-title' style={{
        display: 'block',
        marginRight:'12px'
      }}>

     
        {title}
      </span> 
      </div>
      <div className='col-md-6'>
        <Form.Select 
          aria-label="Default select example"
          style={{
            width: '100%'
          }}
        >
          <option>Sin asignar</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className='col-md-3'>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label=""
        style={{marginLeft:'6px'}}
      />
      </div>
    </div>
  )
}
