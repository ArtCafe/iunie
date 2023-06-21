import React,{useState} from 'react'
import FormModal from '../../components/FormProfile/FormModal';
import "./ProfileModal.css";


export default function ProfileM() {
  
const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Container">
        <FormModal closeModal={closeModal} modalIsOpen={modalIsOpen}/>
      <button onClick={openModal}>Open Modal</button>
    
    </div>
  )
  
}