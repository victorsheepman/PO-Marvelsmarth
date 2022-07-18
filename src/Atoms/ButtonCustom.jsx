import React from 'react'
import Button from 'react-bootstrap/Button';

export const ButtonCustom = ({title, styles, handle, classe}) => {
 
    return (
        <Button className={classe} style={{
            width: styles.width,
            height:styles.height ? styles.height : '45px' ,
            backgroundColor: styles.background ,
            color: styles.color,
            marginTop: styles.margin
            
        }} onClick={handle}>
            {title}
        </Button>
    )
}

 