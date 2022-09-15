import React from 'react'
import { Barra } from '../../../Atoms/Barra'
import { ButtonCustom } from '../../../Atoms/ButtonCustom'

export const RazonCancelacion = () => {
  return (
    <div className='historialServicios ' style={{padding:'35px'}}>
        <header className='listaClientes__header d-flex align-items-center justify-content-between' >
            <h3 className='ListaClientes' style={{color:'#f6c84c',fontSize:'35px'}}>Razones de cancelacion</h3>
            <ButtonCustom
                title='Añadir nueva razón'
                styles={{
                    width:'170px',
                    background:'#f6c94c',
                    color: 'black',
                    marginLeft:'3%',
                    borderRadius:'5px'
                }}
            />
        </header>
        <Barra 
            styles={{
                marginTop:'3%'
            }
            }
        />
        <Barra 
            title='Cita duplicada'
            styles={{
                marginTop:'1%'
            }
            }
        />
        <Barra 
            title='Cita agendada por error'
            styles={{
                marginTop:'1%'
            }
            }
        />
         <Barra 
            title='Cliente no disponible'
            styles={{
                marginTop:'1%'
            }
            }
        />
        
    </div>
  )
}
