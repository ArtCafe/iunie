import React,{useState, useEffect, SetStateAction} from 'react'
import { useLocation,  } from "react-router-dom";
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import Blog from '../../components/Blog/Blog'
//import Footer from '../../components/Footer/Footer'
import Headers from '../../components/Headers/Headers'
//import Popular_Posts from '../../components/Popular_Posts./Popular_Posts'
//import Tags from '../../components/Tags/Tags'
import {  useSelector} from 'react-redux'
import { IRootState, IUser } from '@/Types/Auth'
import {  UserHome } from '../../Types/Auth';



export default function Home() {
  const { user, isLoading,} = useSelector< IRootState, IUser>((state) => state.auth)
  const location = useLocation();
  const [flag, setFlag] = useState<boolean >(true)
const name: string = 'name'
const text: string = 'text'
  useEffect(() => {
    setFlag(false)
    if (`${location.pathname}` === "/") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  },[location.pathname])




  return (
  <>
   {isLoading ? <div> loadig</div> : <div> <Headers/>
  <div>
    
  <div className="w3-row">

   <div className="w3-col l8 s12">
   
   <Blog flag={flag}/>
   </div>

   <div className="w3-col l4">
   <ProfileCard   text={text} name={name} user={user}/>
   {/*<Popular_Posts/>
   <Tags/>*/}
   </div>
  
 </div>

</div>

{/*<Footer/>*/}</div> }


  </>
  )
}
