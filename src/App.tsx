import Home from './pages/Home/Home'
import Login from './pages/login/Login'
import Register from './pages/Register/Register'
//import Profile from './pages/Profile/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import { ToastContainer } from 'react-toastify'
import Header from './components/Header/Header'
import Createpost from './pages/CreatePost/CreatePost'



  //type PrivateProps = {
  //  isLoggedIn: boolean
  //  Component: React.ComponentType<ProfileProps>
 // }
  
export default function App(): JSX.Element {

  
  return (
    <>
  <Router>
   
    <div className="w3-content" >
    <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
             <Route path='/createpost' element={<Createpost />} />
            { /* <Route path='/profile' element={<ProfileM />} />
            <Route path='/dashboard/post/:id' element={<Post/>} />
           
            <Route path ='/dashboard' element={<Dashboard/>} />*/}
          </Routes>
        </div>
      </Router>
     
    </>
  )
}








