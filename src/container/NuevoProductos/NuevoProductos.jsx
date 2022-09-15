import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { CheckExample } from '../../Atoms/FormCheck';
import { FormCustom } from '../../Atoms/FormCustom';
import { FormSelection } from '../../Atoms/FormSelection';
import { Atributos } from './Subcontainer/Atribustos';
import { Compra } from './Subcontainer/Compra';
import { Contabilidad } from './Subcontainer/Contabilidad';
import { InformacionGeneral } from './Subcontainer/InformacionGeneral';
import { Inventario } from './Subcontainer/Inventario';
import { Ventas } from './Subcontainer/Ventas';

export const NuevoProductos = () => {
    const [first, setfirst] = useState(0)
    
  return (
    <div className='nuevoProductos'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Productos / Nuevo</h3>
        </header>
        <Card className='nuevoProductos__card' style={{backgroundColor:'#f6c94c'}}>
            <Card.Body className='d-flex'>
                <div className='container ' style={{width:'80%'}}>
                    <FormCustom 
                        styles={
                            {
                                border:'none',
                                borderBottom:"1px solid black",
                                backgroundColor:'#f6c84c',
                                
                            }
                        }
                        title='Nombre del producto'
                        classCustom='col-md-6 d-flex align-items-baseline'
                        classInput='nuevaTrasferencia__input'
                        type='text'
                        holder=' '
                    />
                    <div className='conteiner mt-3 d-flex align-items-center'>
                        <CheckExample 
                            title='Puede ser vendido'
                        />
                        
                        <CheckExample 
                            title='Puedo ser comprado'
                        />
                    </div>
                    <nav className='nuevoProductos__nav '>
                        <ul>
                            <li className={first == 1 ? 'nuevoProductos__item--white' : 'nuevoProductos__item'} onClick={()=>setfirst(1)}>
                                Informacion general
                            </li>
                            <li className={first == 2 ? 'nuevoProductos__item--white' : 'nuevoProductos__item'} onClick={()=>setfirst(2)}>
                                Atributos y variantes
                            </li>
                            <li className={first == 4 ? 'nuevoProductos__item--white' : 'nuevoProductos__item'} onClick={()=>setfirst(4)}>
                                Ventas
                            </li>
                            <li className={first == 3 ? 'nuevoProductos__item--white' : 'nuevoProductos__item'} onClick={()=>setfirst(3)}>
                                Compra
                            </li>
                            <li className={first == 5 ? 'nuevoProductos__item--white' : 'nuevoProductos__item'} onClick={()=>setfirst(5)}>
                                Inventario
                            </li>
                            <li className={first == 6 ? 'nuevoProductos__item--white' : 'nuevoProductos__item'} onClick={()=>setfirst(6)}>
                                Contabilidad
                            </li>
                        </ul>

                    </nav>
                </div>
                <figure className='producto__image'>
                    <img src="../../assets/images/imagen.png" alt="" srcset="" />
                </figure>
               
            </Card.Body>
        </Card>
        {
           (first == 1) && <InformacionGeneral />
          
        }
        {
            (first == 2) && <Atributos /> 
        }
        {
            (first == 4) && <Ventas /> 
        }
        {
            (first == 3) && <Compra /> 
        }
        {
            (first == 5) && <Inventario /> 
        }
        {
            (first == 6) ? <Contabilidad /> : <p>puta</p>
            
        }
        
    </div>
  )
}
