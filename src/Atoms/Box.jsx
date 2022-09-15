import React from 'react'

export const Box = ({style, bootstrap,children}) => {
  return (
    <div
        style={{
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            ...style
        }}
        className={bootstrap}
    >
        {children}
    </div>
  )
}
