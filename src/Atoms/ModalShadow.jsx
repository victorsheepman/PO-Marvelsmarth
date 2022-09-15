import React from 'react'
import Modal from 'react-bootstrap/Modal';  
export const ModalShadow = ({children, show, setShow, style}) => {
  return (
    <Modal style={style} show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
         
        </Modal.Header>
        {children}
    </Modal>
  )
}

