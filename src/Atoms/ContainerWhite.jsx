import React from 'react'

export const ContainerWhite = () => {
  return (
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
          />
      </InputGroup> 
  )
}
