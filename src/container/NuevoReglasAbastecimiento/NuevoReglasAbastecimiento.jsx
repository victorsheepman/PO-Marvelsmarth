import React from 'react'
import Card from 'react-bootstrap/Card';
export const NuevoReglasAbastecimiento = () => {
  return (
    <div className='historialServicios'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>
                Reglas de abastecimiento / Nuevo
            </h3>
        </header>
        <Card className='mx-auto' style={{width:'90%'}} >
            <Card.Body>
                <div className='container row'>
                    <FormSelection 
                            styles={
                                {
                                    border:'none',
                                    borderBottom:"1px solid black"
                                    
                                }
                            }
                            title='Producto'
                            classCustom='col-md-6 d-flex  align-items-baseline'
                            type='text'
                            holder=''
                    >
                        <option> </option>
                    </FormSelection>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                //backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Cantidad minima'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='number'
                        holder='0.00'
                      />

                </div>
            </Card.Body>
        
        </Card>
 
    </div> 
)
    
}
