import React, { useState } from 'react'

export const Filter = () => {
    const [click, setClick] = useState(0)
  return (
    <nav className='filter'>
        <ul>
            <li className={click === 0 ? 'filter__li--underline' : 'filter__li'} onClick={()=>setClick(0)}>Por revisar</li>
            <li className={click === 1 ? 'filter__li--underline' : 'filter__li'} onClick={()=>setClick(1)}>Productos</li>
            <li className={click === 2 ? 'filter__li--underline' : 'filter__li'} onClick={()=>setClick(2)}>Servicios</li>
        </ul>
    </nav>
  )
}
