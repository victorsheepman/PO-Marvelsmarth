import React from 'react'
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../../Atoms/FormCheck';
export const AjustesFab = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Ajustes
            </h3>
        </header>
        <div className='container-lg row'>
              <h3 className='title-3'  style={{color:'#f6c84c'}}>Operaciones</h3>
              <Card>
                <Card.Body>
                  <div className='row'>
                    <div className=' row col-md-6'>
                        <CheckExample 
                            title=''
                            classCustom='col-md-2'
                        />
                        <div className='col-md-8'>
                        <h5 className='title-3'>
                            Ordenes de trabajo
                        </h5>
                        <p>Procese operaciones en centros de trabajo especificos</p>
                        </div>
                    </div>
                    <div className=' row col-md-6'>
                        <CheckExample 
                            title=''
                            classCustom='col-md-2'
                        />
                        <div className='col-md-8'>
                        <h5 className='title-3'>
                            subcontratacion
                        </h5>
                        <p>Subcontratar la produccion de algunos productos</p>
                        </div>
                    </div>
                    
                  </div>

                  <div className='row'>
                    <div className=' row col-md-6'>
                        <CheckExample 
                            title=''
                            classCustom='col-md-2'
                        />
                        <div className='col-md-8'>
                        <h5 className='title-3'>
                            Calidad
                        </h5>
                        <p>Agregar controles de calidad a tus ordenes de trabajo</p>
                        </div>
                    </div>
                    <div className=' row col-md-6'>
                        <CheckExample 
                            title=''
                            classCustom='col-md-2'
                        />
                        <div className='col-md-8'>
                            <h5 className='title-3'>
                                Desbloquear ordenes de fabricacion
                            </h5>
                            <p>
                                Permitir a los usuarios de fabricacion modificar la cantidades por consumir sin aprobacion previa
                            </p>
                        </div>
                    </div>
                    
                  </div>
                  <div className='row'>
                    <div className=' row col-md-6'>
                        <CheckExample 
                            title=''
                            classCustom='col-md-2'
                        />
                        <div className='col-md-8'>
                        <h5 className='title-3'>
                            Informe de asignacion para ordenes de fabricacion
                        </h5>
                        <p> Ver y asignar cantidades fabricadas </p>
                        </div>
                    </div>
                    <div className=' row col-md-6'>
                        <CheckExample 
                            title=''
                            classCustom='col-md-2'
                        />
                        <div className='col-md-8'>
                            <h5 className='title-3'>
                                
                                Subproductos
                            </h5>
                            <p>
                               Produccion de subproductos (A + B  C + D)
                            </p>
                        </div>
                    </div>
                    
                  </div>
                </Card.Body>
            </Card>
        </div>
        <div className='container-lg row'>
              <h3 className='title-3'  style={{color:'#f6c84c'}}>Planificacion</h3>
              <Card>
                <Card.Body>
                  <div className='row'>
                    <div className=' row col-md-6'>
                        <CheckExample 
                            title=''
                            classCustom='col-md-2'
                        />
                        <div className='col-md-8'>
                        <h5 className='title-3'>
                            Programa maestro de produccion
                        </h5>
                        <p>Planificar ordenes de fabricacion o pedidos de compra 
                            basadas  en previsiones 
                        </p>
                        </div>
                    </div>
                    <div className=' row col-md-6'>
                        <CheckExample 
                            title=''
                            classCustom='col-md-2'
                        />
                        <div className='col-md-8'>
                        <h5 className='title-3'>
                           Plazo de seguridad
                        </h5>
                        <p>
                            Planifique antes las ordenes de fabricacion y evite retrasos.
                        </p>
                        </div>
                    </div>
                    
                  </div>

                
                </Card.Body>
            </Card>
        </div>

    </div>
  )
}
