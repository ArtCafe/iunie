import React,{useState, useEffect} from 'react';
import { useLocation,  } from "react-router-dom";
import Modal from '../moreUseComponet/Moadal/Modal'
import PostForm from '../components/PostForm/PostForm';

import SecondBar from './SecondBar';
import Blog from '../components/Blog/Blog';


export default function Dashboard() {
  const location = useLocation();

  const [modalIsOpen, setIsOpen] = useState();
  
  const [flag, setFlag] = useState(false)


  

  useEffect(() => {
    setFlag(false)
    if (`${location.pathname}` === "/dashboard") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  },[location.pathname])



  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
 
  return (
    <>
    <div  className="w3-col l8 s12" >
   
  <header className="w3-row"> 
  <button className="w3-tag" onClick={openModal}>REDACTARE</button>
  
  <p>Post</p>
</header>
 <Blog flag={flag} ></Blog>
   <Modal closeModal={closeModal} modalIsOpen={modalIsOpen}><PostForm/></Modal>
</div>


   <div className="w3-col l4"> 

     <SecondBar  />
     
    
    </div>
    
    </>
  )
}





  
