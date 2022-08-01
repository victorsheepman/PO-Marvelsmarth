import React from 'react'

export const Inventario = ({boostrap}) => {
  return (
    <div className={`${boostrap} inventario`}>
        <h5 className='inventario__name'>
            Transferencias internas
        </h5>
        <button className='inventario__button'>
            0 A PROCESAR
        </button>
    </div>
  )
}
