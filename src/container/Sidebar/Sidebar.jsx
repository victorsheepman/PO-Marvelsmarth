import React from 'react'
import PropTypes from 'prop-types'
import { ButtonLink } from '../../components/ButtonLink/ButtonLink'

export const Sidebar = props => {
  return (
    <aside className='sidebar'>
        <ButtonLink src={'01-inicio.svg'} />
        <ButtonLink src={'02-calendario.svg'} />
        <ButtonLink src={'03-eti.svg'} />
        <ButtonLink src={'04-person.svg'} />
        <ButtonLink src={'05.svg'} />
        <ButtonLink src={'06.svg'} />
        <ButtonLink src={'07.svg'} />
        <ButtonLink src={'08.svg'} />
        <ButtonLink src={'09.svg'} />
    </aside>
  )
}
