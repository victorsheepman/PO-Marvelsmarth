import React from 'react'

export const Seccion = ({title,img, bootstrap, handle}) => {
  return (
    <div className={`section ${bootstrap}`} onClick={handle}>
        <figure className='section__img'>
            <img src={`../../assets/images/${img}.png`} alt="" />
        </figure>
        <p className='label-title'>
            {title}
        </p>
    </div>
  )
}
