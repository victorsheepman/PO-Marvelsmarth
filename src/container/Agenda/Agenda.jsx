import React from 'react'
import { BoxDate } from '../../Atoms/BoxDate'
import { repeat } from '../../utils/repeat'

export const Agenda = () => {
    let array = repeat(64);
    
  return (
    <div className='agenda'>
        <ul className='agenda__hour'>
            <li>
                8:00am
            </li>
        </ul>
        <div className='agenda__content'>
            {
               array.map((i)=>(
                    <BoxDate col={`grid-1`}/>
                ))
                
            }
                
        </div>
    </div>
  )
}