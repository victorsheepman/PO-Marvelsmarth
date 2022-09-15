    import React from 'react'

    import Badge from 'react-bootstrap/Badge';
    import Card from 'react-bootstrap/Card';
    export const Barra = ({title='Cambio de fecha',styles, isActive=false, body=''}) => {
    return (
        <Card className='mx-auto' style={{
            ...styles,
            width:'95%', 
            height:'80px'
            }}>
            <Card.Body className='d-flex align-items-center justify-content-between' style={{paddingLeft:'10%'}}>
                <div style={
                    {
                        width:'80%',
                        //background: 'red',
                        marginTop:'-18px'
                    }
                }>
                    <h3 className='title-3'>{title}</h3>
                    {
                        body ==''? 
                        <></>
                        :
                        <p className='capton-sm' style={{marginTop:'0%'}}>
                            {body}
                        </p>
                    }
                </div>
                
                
                {
                    isActive  ? <Badge 
                                bg="success"
                                    style={{
                                        height:'20px', 
                                        width:'80px', 
                                        //marginLeft:'12px', 
                                        backgroundColor:'#e0f8e8',
                                        marginTop:'-10px'
                                        
                                        //color:'#417347'
                                        
                                    }}
                                >
                                Activo
                    </Badge>
                    : <></>
                }
            </Card.Body>
        </Card>
    )
    }
