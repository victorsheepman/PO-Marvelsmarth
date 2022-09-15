import React from 'react'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'
import Form from 'react-bootstrap/Form';
export const Notas = () => {
  return (
    <div className='container'>
         <Form>
            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
        <div className='container d-flex justify-content-end align-items-center'>
            <ButtonCustom 
                styles={{
                    background: 'white',
                    color: 'black',
                }}
                title='Cancelar'
                    
                    
            />  
            <ButtonCustom 
                styles={{
                    background: 'black',
                    color: '#f6c94c',
                    marginLeft:'2%'
                }}
                title='Guardar'
                    
            />   

        </div>
    </div>
  )
}
