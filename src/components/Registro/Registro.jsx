import React from 'react'

export const Registro = () => {
  return (
    <div className='registro mt-3'>
        <div className='registro__name'>
            <h3>Wanda Caceres</h3>
        </div>
        <div className='registro__client'>
            <strong>Cliente: Pamela Reyes</strong>
            <strong>Servicio:RD$ 850</strong>
        </div>
        <div className='registro__badge'>
            <button className='facturaAbierta__filterButton'>
               Visualizar
            </button>
            <button className='facturaAbierta__filterButton'>
               Factura
            </button>

        </div>
    </div>
  )
}
