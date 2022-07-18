import React from 'react'
import Form from 'react-bootstrap/Form';

export const Switch = ({label="Check this switch"}) => {
  return (
    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label={label}
      />
    </Form>
  );
}
