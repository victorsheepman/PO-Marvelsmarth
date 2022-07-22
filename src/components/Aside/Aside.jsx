import React from 'react'
import { NavLink } from "react-router-dom";

export const Aside = ({setShow}) => {
  return (
    <aside className='aside'>
        <div className='aside__header'>
            <h3>Ventas</h3>
        </div>  
        <NavLink className='aside__link' to='/FacturaAbierta' onClick={()=>setShow(false)}>
            <h4>Facturas Abiertas</h4>
        </NavLink>
        <NavLink className='aside__link ' to='/ventasrapido' onClick={()=>setShow(false)}>
            <h4>Resumen de ventas rapido</h4>
        </NavLink>
        <NavLink className='aside__link' to='/citas' onClick={()=>setShow(false)}>
            <h4>Citas</h4>
        </NavLink>
        <NavLink className='aside__link' to='/HistorialVentas' onClick={()=>setShow(false)}>
            <h4>Historial Ventas</h4>
        </NavLink>

    </aside>
  )
}
