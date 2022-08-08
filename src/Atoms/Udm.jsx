import React from 'react'

export const Udm = ({title='Unidad', background='#2d8497', bootstrap}) => {
  return (
    <span className={bootstrap} style={{
        width: 'auto',
        height: '30px' ,
        backgroundColor:background,
        color: background == '#2d8497' ? 'white' : "#8a8a8a",
        border: background == '#2d8497' ? 'none' : "1px solid #8a8a8a",
        borderRadius:'20px',
        padding: '2%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
        {title}
    </span>
  )
}
