import React,{useState} from 'react'
import Modal from 'react-modal';
import "./Modal.css";


export default function FormModal({children, closeModal, modalIsOpen}) {
    return (
      <>
      <Modal
     
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <div>
         <button onClick={closeModal}>x</button></div>
      <h2>Hello - I am a modal!</h2>
      {children}
      
    </Modal>
         </>
      
  
      
    )
  }
  
