import React from 'react'

import { ButtonSetup } from '../../../../Atoms/ButtonSetup'
import { Inventario } from '../../../../components/Inventario/Inventario'
import { SetUp } from '../../../../container/SetUp/SetUp'
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../../../Atoms/FormCheck';
import { FormCustom } from '../../../../Atoms/FormCustom';
import { FormSelection } from '../../../../Atoms/FormSelection';
import { ButtonCustom } from '../../../../Atoms/ButtonCustom';
export const Ajustes = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Ajustes
            </h3>
        </header>
        <div className='container-lg row'>
            <section className='col-md-6'>
              <h3 className='title-3'  style={{color:'#f6c84c'}}>Operaciones</h3>
              <Card>
                <Card.Body>
                  <div className='row'>
                    <CheckExample 
                      title=''
                      classCustom='col-md-2'
                    />
                    <div className='col-md-10'>
                      <h5 className='title-3'>
                        Avisos
                      </h5>
                      <p>Obtenga advertencia informativas o de bloqueo en las empresas</p>
                    </div>
                  </div>
                  <div className='row mt-5'>
                    <CheckExample 
                      title=''
                      classCustom='col-md-2'
                    />
                    <div className='col-md-10'>
                      <h5 className='title-3'>
                        Reportes de recepcion
                      </h5>
                      <p>Ver y asignar cantidades recibidas</p>
                    </div>
                  </div>
                  <div className='row mt-5'>
                   <div className='col-md-2'>

                   </div>
                    <div className='col-md-10'>
                      <h5 className='title-3'>
                        Dia y mes de inventario anual
                      </h5>
                      <p>Dia y mes en que el conteo de inventario anual debe ocurrir</p>
                      <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title=''
                        classCustom='col-md-10 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='date'
                        holder='0.00'
                      />
                     
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <h3 className='title-3 mt-4'  style={{color:'#f6c84c'}}>Productos</h3>
              <Card>
                <Card.Body>
                  <div className='row'>
                    <CheckExample 
                      title=''
                      classCustom='col-md-2'
                    />
                    <div className='col-md-10'>
                      <h5 className='title-3'>
                       Variantes
                      </h5>
                      <p>Establecer los atributos del producto (por ejemplo, color, tamano) para administrar las variantes</p>
                    </div>
                  </div>
                  <div className='row'>
                    <CheckExample 
                      title=''
                      classCustom='col-md-2'
                    />
                    <div className='col-md-10'>
                      <h5 className='title-3'>
                       Unidades de medida
                      </h5>
                      <p>
                        Vender y comprar productos en diferentes unidades de medida
                      </p>
                    </div>
                  </div>


                </Card.Body>
              </Card>
              <h3 className='title-3 mt-4'  style={{color:'#f6c84c'}}>Almacen</h3>
              <Card>
                <Card.Body>
                  <div className='row'>
                    <CheckExample 
                      title=''
                      classCustom='col-md-2'
                    />
                    <div className='col-md-10'>
                      <h5 className='title-3'>
                       Ubicacion de almacenamiento
                      </h5>
                      <p>
                        Permite controlar la ubicación del producto dentro de su almacé
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

            </section>
            <section className='col-md-6'>
              <h3 className='title-3'  style={{color:'#f6c84c'}}>
                Codigo de barra
              </h3>
               <Card>
                <Card.Body>
                  <div className='row'>
                    <CheckExample 
                      title=''
                      classCustom='col-md-2'
                    />
                    <div className='col-md-10'>
                      <h5 className='title-3'>
                        Lector de codigo de barras
                      </h5>
                      <p>
                        Proceso de operaciones mas rapido con codigo de barras
                      </p>
                      <FormSelection 
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                    
                                }
                            }
                            title='Nomenclatura de codigo de barras'
                            classCustom='col-md-10 d-flex  align-items-baseline'
                            type='text'
                            holder=''
                    >
                        <option>Nomenclatura por defecto</option>
                    </FormSelection>
                    </div>
                  </div>
                </Card.Body>
               </Card>
               <h3 className='title-3 mt-4'  style={{color:'#f6c84c'}}>Trazabilidad</h3>
              <Card>
                <Card.Body>
                  <div className='row'>
                    <CheckExample 
                      title=''
                      classCustom='col-md-2'
                    />
                    <div className='col-md-10'>
                      <h5 className='title-3'>
                        Mostrar lotes y numeros de serie en albaranes
                      </h5>
                      <p>Lotes y numeros de serie apareceran en el albaran.</p>
                    </div>
                  </div>
                  <div className='row'>
                    <CheckExample 
                      title=''
                      classCustom='col-md-2'
                    />
                    <div className='col-md-10'>
                      <h5 className='title-3'>
                        Fecha de caducidad 
                      </h5>
                      <p>Establecer fechas de caducidad en lotes y numero de serie. </p>
                    </div>
                  </div>  
                  <div className='row'>
                    <CheckExample 
                      title=''
                      classCustom='col-md-2'
                    />
                    <div className='col-md-10'>
                      <h5 className='title-3'>
                        Consigna 
                      </h5>
                      <p>Establecer propietario en productos almacenados</p>
                    </div>
                  </div>  
                </Card.Body>
              </Card>
              <h3 className='title-3 mt-4'  style={{color:'#f6c84c'}}>Programacion avanzada</h3>
              <Card>
                <Card.Body>
                  <div className='row'>
                    <CheckExample 
                      title=''
                      classCustom='col-md-2'
                    />
                    <div className='col-md-10'>
                      <h5 className='title-3'>
                        Plazo de seguridad para ventas
                      </h5>
                      <p>Programar las entregas antes de evitar retrasos</p>
                    </div>
                  </div>
                  <div className='row'>
                    <CheckExample 
                      title=''
                      classCustom='col-md-2'
                    />
                    <div className='col-md-10'>
                      <h5 className='title-3'>
                        Dias para la compra 
                      </h5>
                      <p>
                        Días que se necesitan para confirmar una orden de compra, define cuando se deberia de validar la orden de compra.
                      </p>
                    </div>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                marginLeft:'70px'
                                
                            }
                        }
                        title=''
                        classCustom='col-md-8 align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0.00'
                    />
                  </div>  
                  
                </Card.Body>
              </Card>
            </section>
            <div className='container d-flex mt-4 justify-content-end'>
                        <ButtonCustom 
                            styles={{
                                background: '#101928',
                                color: '#f6c94c',
                            }}
                            title='Cancelar'
                        />   
                        <ButtonCustom 
                            styles={{
                                background:'#f6c94c',
                                color:'#101928',
                                marginLeft:'4%'
                            }}
                            title='Guardar'
                        />  
                </div>
        </div>
    

    </div>
  )
}
