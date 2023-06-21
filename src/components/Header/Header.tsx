import {useState, useEffect} from 'react';
//import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AuthState } from '@/Types/Auth';
import { RootState } from '@/redux/store';
//import { useLocation,  } from "react-router-dom";


function Header() {
  const [path, setPath] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth)


  useEffect(() => {
    setPath(false)
    if (`${location.pathname}` === "/" ) {
      setPath(true);
    } else {
      setPath(false);
    }
  },[location.pathname])


  return (
    <header className='header'>
      <div className='logo'>
      <Link to={`${ user?.role === 1  ? "dashboard" : "login"}`}>Admin</Link>
      </div>
      <div className='logo'>
             {path ?  <Link to='/createpost'>Create Post</Link>  :<Link to='/'>Home</Link> }  
      <ul>
          <li>
            {/* <button className='btn' >
            <FaSignOutAlt /> Logout
            </button>*/}
          </li>
        
          <>
            <li>
              <Link to='/login'>
                {/*<FaSignInAlt />*/} Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
               {/* <FaUser />*/} Register
              </Link>
            </li>
          </>
        
      </ul>
      </div>
    </header>
  )
}
//path={`/dashboard/${ auth.user.role === 1 ? "admin" : "user"`}
export default Header

/*
import React,{useState, useEffect} from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation,  } from "react-router-dom";
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const [path, setPath] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const location = useLocation();
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  useEffect(() => {
    setPath(false)
    if (`${location.pathname}` === "/" ) {
      setPath(true);
    } else {
      setPath(false);
    }
  },[location.pathname])
console.log(location.pathname);

  return (
    <header className='header'>
      <div className='logo'>
        <Link to={`${ user?.role === 1  ? "dashboard" : "login"}`}>Admin</Link>
      </div>
      <div className='logo'>
      {path ?  <Link to='/createpost'>Create Post</Link>  :<Link to='/'>Home</Link> }
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

*/