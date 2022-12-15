import React from 'react'

export const ClienteREcibo = () => {
  return (
    <div className='clienterecibo'>
        <div className='clienterecibo__header'>
            <figure>

            </figure>
            <h4 className='text-body'>Recibo servicios</h4>
            <span>03.10.2022 - 04:05:13 PM</span>

        </div>
        <div className='clienterecibo__body'>
            <ul>
                <li>
                    <p><strong>Id servicio:</strong>23d</p>
                </li>
                <li><p><strong>Colaborador:</strong>Wanda Caceres</p></li>
                <li><p><strong>Cliente:</strong>Pamela Reyes</p></li>
                <li><p><strong>Total en servicios RD$:</strong>850</p></li>
            </ul>
            <div className='container mt-3 d-flex justify-content-center align-items-center'>
                <h4 className='text-body'>Desglose de servicios</h4>

            </div>
            <ol>
                <li>Secado Directo</li>
                <li>Tratamiento de la cara</li>
            </ol>
        </div>

    </div>
  )
}
