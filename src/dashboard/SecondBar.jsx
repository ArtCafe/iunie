import React from 'react'
import { Link } from 'react-router-dom'

export default function SecondBar() {
  return (
    <>
<div className="w3-card w3-margin">

<div className="w3-container w3-padding">
  <h4>Administrarea Saitului</h4>
</div>

<ul className="w3-ul w3-hoverable w3-white">

  <li className="w3-padding-16">
    <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <Link to = "/users" className="w3-large">Users</Link><br/>
    <span>Informatie utilizatori</span>
  </li>

  <li className="w3-padding-16">
    <img src="https://www.w3schools.com/w3images/gondol.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <Link to="/redactarepost" className="w3-large">Post Redactare </Link><br/>
    <span>Praes tinci sed</span>
  </li> 

  <li className="w3-padding-16">
    <img src="https://www.w3schools.com/w3images/skies.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <Link to = "/profile" className="w3-large">Profil Redactare</Link><br/>
    <span>Ultricies congue</span>
  </li>   
  <li className="w3-padding-16 w3-hide-medium w3-hide-small">
    <img src="https://www.w3schools.com/w3images/woods.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <span className="w3-large">Mingsum</span><br/>
    <span>Lorem ipsum dipsum</span>
  </li>  
</ul>
</div>
<hr/> 
</>
  )
}

/* return (
<header className='headerSecond'>
      <div className='logo'>
        <Link to="/postcreate">Postare</Link>
      </div>
      <div className='logo'>
        <Link to='/profil'>Profil</Link>
      </div>

      <div className='logo'>
        <Link to='/sait'>sait</Link>
      </div>
            
    </header>
  ) */

    
  
