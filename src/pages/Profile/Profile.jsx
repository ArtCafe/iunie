import React from 'react'
import { useState, useEffect } from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import FormProfile from '../../components/FormProfile/FormProfile'
import { useDispatch , useSelector} from 'react-redux'
import { createProfile } from '../../features/auth/authSlice'


export default function Profile() {
  const { user, isLoading,} = useSelector((state) => state.auth)
  const [fileUpload, setFileUpload] = useState(false)
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  //const [id, setId] = useState('')

  
  const dispatch = useDispatch()
  


  useEffect(() => {
    //setText(user.text)
    if (text === '' ) {
      setText(user.text);
    } else {
      setText(text);
    }

    if (name === '' ) {
      setName(user.name);
    } else {
      setName(name);
    }
  },[user.text, text, user]);

const onSubmit = (e) => {
  
    //setText(user.text)
    
      setText("");
    
      setName("");
    
  

  try {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('text', text)
    formData.append('id', user._id)
   // formData.append('image', image)
    formData.append('avatar', fileUpload)
    
    
    
    
    /*
    const userData = {
      id: user._id,
      text: text,
      name: name,
      image: fileUpload
    }
*/
    dispatch(createProfile(formData))
  
    setText('')
    setName('')
    setFileUpload('')
   // clearFormHandler()
   // navigate('/posts')
} catch (error) {
    console.log(error)
}
}

 
  return (
   
    <> 
    <div>

  <div className="w3-row">
<div className="w3-col l8 s12">
<FormProfile
 fileUpload={fileUpload}
 setFileUpload={setFileUpload}
 setName ={setName }
 setText ={setText }
 name ={name}
 text ={text }
 onSubmit={onSubmit}

/>
</div>
<div className="w3-col l4">
  <div className="w3-card-4 w3-margin w3-white">
  {isLoading ? <div>...loading</div> : <div><ProfileCard fileUpload={fileUpload}
    name = {name}
    text ={text}
    user={user}
    /></div>}
   
    </div>
  </div>
 </div>

</div>


<div className="w3-col l4">

  <div className="w3-card w3-margin w3-margin-top">
 
  </div>
  

  <div className="w3-card w3-margin">
    
  </div>

  <div className="w3-card w3-margin">
   
    <div className="w3-container w3-white">
   
    </div>
  </div>
  

</div>

  </>
    
      
  )
}
