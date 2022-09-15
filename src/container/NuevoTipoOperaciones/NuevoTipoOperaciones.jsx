  import React from 'react'
  import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
  import { CheckExample } from '../../Atoms/FormCheck';
  import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';
  export const NuevoTipoOperaciones = () => {
    return (
      <div className='historialServicios'>
          <header className='listaClientes__header'>
              <h3 
                  className='ListaClientes' 
                  style={{color:'#f6c84c',fontSize:'35px'}}
              >
                  Tipos Operaciones / Nuevo
              </h3>
          </header>
          <Card className='mx-auto' style={{width:'90%'}}>
              <Card.Body>
                <div className='container row'>
                  <FormCustom 
                    styles={
                    {
                      border:'none',
                      borderBottom:"1px solid black",
                      //backgroundColor:'#f6c84c',
                                  
                    }
                    }
                    title='Tipo de operación'
                    classCustom='col-md-6 d-flex align-items-baseline'
                    classInput='nuevaTrasferencia__input'
                    type='text'
                    holder=''
                  />
                  <CheckExample 
                      title='Mostrar operaciones detalladas'
                      classCustom='col-md-6'
                    />
                </div>
                <div className='container row'>
                  <FormCustom 
                    styles={
                    {
                      border:'none',
                      borderBottom:"1px solid black",
                      //backgroundColor:'#f6c84c',
                                  
                    }
                    }
                    title='Código'
                    classCustom='col-md-6 d-flex align-items-baseline'
                    classInput='nuevaTrasferencia__input'
                    type='text'
                    holder=''
                  />
                   <div className='col-md-6 row'>
                      <p className='label-title col-md-6'>Método de reservacion:</p>
                      <div className='col-md-6'>
                        <CheckExample 
                          title='Tipo de operación'
                          
                        />  
                        <CheckExample 
                          title='Código'
                          
                        />  
                         <CheckExample 
                          title='Código de barras'
                          
                        />  
                      </div>

                    </div>
                 
                </div>
                <div className='container row'>
                <FormCustom 
                    styles={
                    {
                      border:'none',
                      borderBottom:"1px solid black",
                      //backgroundColor:'#f6c84c',
                                  
                    }
                    }
                    title='Código de barras '
                    classCustom='col-md-6 d-flex align-items-baseline'
                    classInput='nuevaTrasferencia__input'
                    type='text'
                    holder=''
                  />
                </div>
              </Card.Body>
              <Card.Body>
                <h3 className='title-3'>
                  Ubicaciones
                </h3>
                <FormSelection 
                  styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                    
                                }
                            }
                            title='Ubicacion de origen predeterminada'
                            classCustom='col-md-6 d-flex  align-items-baseline'
                            type='text'
                            holder=''
                    >
                  <option></option>
                </FormSelection>
                <FormSelection 
                  styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                    
                                }
                            }
                            title='Ubicacion destino predeterminada'
                            classCustom='col-md-6 d-flex  align-items-baseline'
                            type='text'
                            holder=''
                    >
                  <option></option>
                </FormSelection>
              </Card.Body>
              <Card.Footer className='d-flex justify-content-end align-items-center' style={{backgroundColor:'white'}}>
                <ButtonCustom  
                  styles={{
                    background: '#101928',
                    color: '#f6c94c',
                  }}
                  title='Guardar'
                />   
                <ButtonCustom 
                  styles={{
                    background:'white',
                    color:'#101928',
                    marginLeft:'4%'
                  }}
                  title='Guardar'
                />  
              </Card.Footer>
          </Card>
      </div>
    )
  }
