import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import {  ThunkDispatch} from "@reduxjs/toolkit";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { IRootState, IUser } from '@/Types/Auth'
import { register, reset } from '../../redux/features/Auth/AuthSlice'


//import Spinner from '../../components/Spinner'
/*
 export interface IUser {
      user: string | number | null;
      isLoading: boolean;
      isError?: string;
      isSuccess: boolean;
      message?: string;
      avatar?: string;
      name?: string;
    }    
    
    export interface IRootState {
      auth: IUser;
    }
*/
const initialState= {
    name: '',
    email: '',
    password: '',
    password2: ''
}
    function Register() {

const navigate = useNavigate()
  
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();

//const isLoading = false
const { user, isLoading, isError, isSuccess, message } = useSelector<IRootState, IUser>(
     (state) => state.auth
)



  const [formData, setFormData] = useState(initialState)

  const { name, email, password, password2 } = formData

  

  console.log(formData);
  

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset)
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData ={
        name, 
        email,
        password,
        
      }
 
      
      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <h2>spiner</h2>
  }
 
  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form  onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
             onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register