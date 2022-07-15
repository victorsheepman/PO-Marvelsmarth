import React from 'react'

export const ButtonLink = ({src, dir='Icons'}) => (
    <a className='buttonLink' >
       <img src={`../assets/${dir}/${src}`} alt="" />
    </a>
)

 