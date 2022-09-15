import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { Box } from '../../../Atoms/Box';
export const ListaEspera = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header d-flex justify-content-between px-3'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Lista espera</h3>
            <InputGroup style={{width:'30%'}}>
                <Form.Control
                    style={{borderRadius:'30px',}}
                    placeholder="Buscar..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </header>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
              <Card.Body>
                <Table striped hover>
                    <thead >
                    <tr>
                       
                        <th>
                            Cliente
                        </th>
                        <th>
                            Cant. De Servicios
                        </th>
                        <th>
                            Notas
                        </th>
                        <th>
                            Tiempo Citado
                        </th>
                        <th>
                            Tiempo de espera
                        </th>
                        <th>
                            Notificaciones
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                    </thead>
                    <tbody className='bg-white'>
                    <tr className='mt2'>
                        <td className='d-flex flex-column' style={{height:'100px'}}>
                           <p>Tani</p> 
                           <span>(855) 555-5550</span>
                            
                        </td>
                        <td className='h6' onClick={()=>setShow(true)}>
                            2
                        </td>
                        <td className='h6'>
                            
                        </td>
                        <td className='h6'> 
                            <p>3:38 PM</p>
                            <span className='text-danger'>(-5 min)</span>
                        </td>
                        <td className='h6'>
                            20 min
                        </td>
                        
                        <td>
                            <div className='d-flex'>
                                <Box 
                                        bootstrap='border border-primary rounded '
                                
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3a74cb" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                                        <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                    </svg>
                                </Box>
                                <Box 
                                        bootstrap='border rounded bg-primary mx-2'
                                
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                </Box>
                            </div>
                           
                        </td>
                       <td>
                            <div className='d-flex'>
                                
                                <Box 
                                    bootstrap='border rounded bg-success mx-2'
                            
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                    </svg>
                                </Box>
                                <Box 
                                    bootstrap='border rounded bg-danger mx-2'
                            
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                    </svg>
                                </Box>
                                
                                <Box 
                                    bootstrap='border rounded bg-primary mx-2'
                            
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                </Box>
                                <Box 
                                    bootstrap='border border-primary rounded  mx-2'
                                    
                            
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                </Box> 
                            </div>
                       </td>
                        
                    </tr>
                    <tr className='mt2'>
                        <td className='d-flex flex-column' style={{height:'100px'}}>
                           <p>Tani</p> 
                           <span>(855) 555-5550</span>
                            
                        </td>
                        <td className='h6' onClick={()=>setShow(true)}>
                            2
                        </td>
                        <td className='h6'>
                            
                        </td>
                        <td className='h6'> 
                            <p>3:38 PM</p>
                            <span className='text-danger'>(-5 min)</span>
                        </td>
                        <td className='h6'>
                            20 min
                        </td>
                        
                        <td>
                            <div className='d-flex'>
                                <Box 
                                        bootstrap='border border-primary rounded '
                                
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3a74cb" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                                        <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                    </svg>
                                </Box>
                                <Box 
                                        bootstrap='border rounded bg-primary mx-2'
                                
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                </Box>
                            </div>
                           
                        </td>
                       <td>
                            <div className='d-flex'>
                                
                                <Box 
                                    bootstrap='border rounded bg-success mx-2'
                            
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                    </svg>
                                </Box>
                                <Box 
                                    bootstrap='border rounded bg-danger mx-2'
                            
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                    </svg>
                                </Box>
                                
                                <Box 
                                    bootstrap='border rounded bg-primary mx-2'
                            
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                </Box>
                                <Box 
                                    bootstrap='border border-primary rounded  mx-2'
                                    
                            
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                </Box> 
                            </div>
                       </td>
                        
                    </tr>
                    
                    
                    </tbody>
                </Table>
              </Card.Body>
        </Card>
    </div>
  )
}
