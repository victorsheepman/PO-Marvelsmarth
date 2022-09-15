import React from 'react'

export const ButtonLink = ({src, dir='Icons', styles}) => (
    <a className='buttonLink'  >
       <img src={`../assets/${dir}/${src}`} alt="" style={styles}/>
    </a>
)

 