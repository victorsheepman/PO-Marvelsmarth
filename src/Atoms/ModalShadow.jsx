import React from 'react'
import Modal from 'react-bootstrap/Modal';  
export const ModalShadow = ({children, show, setShow}) => {
  return (
    <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
         
        </Modal.Header>
        {children}
    </Modal>
  )
}

