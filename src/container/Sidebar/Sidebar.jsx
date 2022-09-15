import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ButtonLink } from '../../components/ButtonLink/ButtonLink'
import { Aside } from '../../components/Aside/Aside'

export const Sidebar = props => {
  const [show, setShow] = useState(false)
  return (
    <aside className='sidebar'>
        <ButtonLink src={'01-inicio.svg'} />
        <ButtonLink src={'02-calendario.svg'} />
        <div className='buttonLink' onClick={()=>setShow(!show)} >
          <img src={`../assets/Icons/03-eti.svg`} alt="" />
        </div>
        <ButtonLink src={'04-person.svg'} />
        <ButtonLink src={'05.svg'} />
        <ButtonLink src={'06.svg'} />
        <ButtonLink src={'07.svg'} />
        <ButtonLink src={'08.svg'} />
        <ButtonLink src={'09.svg'} />
        <ButtonLink src={'09.svg'} />
        <ButtonLink 
          dir='images' 
          src={'dinero.png'}
          styles={{
            width:'50%'
          }}
        />
        {
         show &&  <Aside setShow={setShow} />
        }
        
    </aside>
  )
}
