import React from 'react'
import Card from 'react-bootstrap/Card';
import { ButtonCustom } from '../../Atoms/ButtonCustom';
import { CheckExample } from '../../Atoms/FormCheck';
import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';
export const NuevoModeloActivo = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Modelo activos nuevo</h3>
        </header>
        <Card className='mx-auto' style={{width:'95%', border:'unset'}}>
            <Card.Body>
                <FormCustom
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black"
                            }
                        }
                        title='Nombre del modelo del activo'
                        classCustom='col-md-6  align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                />
                <section className='container-lg d-flex'> 
                    <div style={{width:'50%'}}>
                    <h3 className='ListaClientes text-body mt-4' style={{fontSize:'25px'}}>
                        Contabilidad
                    </h3> 
                        <FormSelection
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                }
                            }
                            title='Cuenta de activo fijo'
                            classCustom='col-md-12 d-flex align-items-baseline '
                            classInput='nuevaTrasferencia__input'
                            type='text'
                            holder='07/06/2022'
                        >
                            <option value="">Joseph</option>
                        </FormSelection>
                        <FormSelection
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                }
                            }
                            title='Cuenta despreciada'
                            classCustom='col-md-12 d-flex align-items-baseline '
                            classInput='nuevaTrasferencia__input'
                            type='text'
                            holder='07/06/2022'
                        >
                            <option value="">Joseph</option>
                        </FormSelection>
                        <FormSelection
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                }
                            }
                            title='Cuenta de gastos'
                            classCustom='col-md-12 d-flex align-items-baseline '
                            classInput='nuevaTrasferencia__input'
                            type='text'
                            holder='07/06/2022'
                        >
                            <option value="">Joseph</option>
                        </FormSelection>
                        <FormSelection
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                }
                            }
                            title='Diario'
                            classCustom='col-md-12 d-flex align-items-baseline '
                            classInput='nuevaTrasferencia__input'
                            type='text'
                            holder='07/06/2022'
                        >
                            <option value="">Joseph</option>
                        </FormSelection>
                    </div>
                    <div className='px-2' style={{width:'50%'}}>
                        <h3 className='ListaClientes text-body mt-4' style={{fontSize:'25px'}}>
                            Metodo de depreciacion
                        </h3> 
                        <FormSelection
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                }
                            }
                            title='Metodo'
                            classCustom='col-md-12 d-flex align-items-baseline '
                            classInput='nuevaTrasferencia__input'
                            type='text'
                            holder='07/06/2022'
                        >
                            <option value="">Joseph</option>
                        </FormSelection>
                        <div className='row'>
                            <FormSelection
                                styles={
                                    {
                                        border:'none',
                                        borderBottom:"1px solid black"
                                    }
                                }
                                title='Duracion'
                                classCustom='col-md-6 d-flex align-items-baseline '
                                classInput='nuevaTrasferencia__input'
                                type='number'
                                holder='07/06/2022'
                            >
                                <option value=""></option>
                            </FormSelection>
                            <FormSelection
                                styles={
                                    {
                                        border:'none',
                                        borderBottom:"1px solid black"
                                    }
                                }
                                title=''
                                classCustom='col-md-4 d-flex align-items-baseline '
                                classInput='nuevaTrasferencia__input'
                                type='number'
                                holder='07/06/2022'
                            >
                                <option value="">Dias</option>
                            </FormSelection>
                            <CheckExample 
                                title='Tiempo de distribucion'
                            />

                        </div>
                    </div>

                </section>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-end align-items-center'>
                <ButtonCustom   
                    styles={{
                        background: 'white',
                        color: '#101928',
                        
                    }}
                    classe='mt-3 mx-4'
                    title='Guardar'
                />
                <ButtonCustom   
                    styles={{
                        background: '#101928',
                        color: '#f6c84c',
                        
                    }}
                    classe='mt-3'
                    title='Guardar'
                />
            </Card.Footer>
        </Card>
    </div>
  )
}
