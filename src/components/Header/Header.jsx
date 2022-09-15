import React from 'react';
import{ButtonLink} from '../ButtonLink/ButtonLink'
export const Header = () => {
  return (
    <header className='header fixed-top'>
        <figure>
            <img src="../assets/images/logo.png" alt="" />
        </figure>
        <div className='header__icon'>
          <ButtonLink 
            dir='images'
            src='megafono.png'
          />
          <ButtonLink 
            dir='images'
            src='buscar.png'
          />
           <ButtonLink 
            dir='images'
            src='campana.png'
          /> 
            
        </div>
        <figure className='header__figure'>

        </figure>
       
    </header>
  )
}

