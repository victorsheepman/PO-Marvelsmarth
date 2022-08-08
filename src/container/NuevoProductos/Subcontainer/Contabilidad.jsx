import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { ButtonCustom } from '../../../Atoms/ButtonCustom';
import { FormCustom } from '../../../Atoms/FormCustom';
import { FormSelection } from '../../../Atoms/FormSelection';

export const Contabilidad = () => {
  return (
    <Card  style={{width:'95%', marginTop:'30px'}}>
        <Card.Body className='ng-dark d-flex' style={{paddingLeft:'5%'}}>
            <section style={{width:'50%',height:'100%', }}>
                <h3 className='title-3'>Por cobrar</h3>
                <FormSelection 
                    styles={
                        {
                            border:'none',
                            borderBottom:"1px solid black"
                                    
                        }
                    }
                    title='Cuenta de ingreso '
                    classCustom='col-md-8  d-flex  align-items-baseline'
                    type='text'
                    holder=''
                >
                    <option>-</option>
                </FormSelection>
                <FormSelection 
                    styles={
                        {
                            border:'none',
                            borderBottom:"1px solid black"
                                    
                        }
                    }
                    title='     '
                    classCustom='col-md-8  d-flex  align-items-baseline'
                    type='text'
                    holder=''
                >
                    <option>-</option>
                </FormSelection>
                
            </section>
            <section style={{width:'50%',height:'100%', }}>
                <h3 className='title-3'>Por pagar</h3>
                <FormSelection 
                    styles={
                        {
                            border:'none',
                            borderBottom:"1px solid black"
                                    
                        }
                    }
                    title='Cuenta de gastos'
                    classCustom='col-md-8  d-flex  align-items-baseline'
                    type='text'
                    holder=''
                >
                    <option>-</option>
                </FormSelection>
                <FormSelection 
                    styles={
                        {
                            border:'none',
                            borderBottom:"1px solid black"
                                    
                        }
                    }
                    title='Cuenta diferencia de precio  '
                    classCustom='col-md-8  d-flex  align-items-baseline'
                    type='text'
                    holder=''
                >
                    <option>-</option>
                </FormSelection>
              
            </section>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-end bg-white'>
              
              <ButtonCustom 
                 title='Cancelar'
                 classe='mx-2'
                 styles={
                   {
                     width:'100px',
                     background:'white',
                     color:'#101928'

                   }
                 }
                 handle={()=>setModal(false)}
               />

               <ButtonCustom 
                 title='Guardar'
                 styles={
                   {
                     width:'150px',
                     color:'#f6c84c',
                     background:'#101928'

                   }
                 }
               />
           </Card.Footer>
    </Card>
  )
}
