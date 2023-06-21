import { useState, useEffect, ChangeEvent, FormEvent} from 'react'
//import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  ThunkDispatch} from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
import { login, reset } from '../../redux/features/Auth/AuthSlice'
//import Spinner from '../../components/Spinner'
import { LoginState}  from '../../Types/Auth';
import { RootState } from '@/redux/store';


export interface IUser {
  user: string []| number []| null;
  isLoading: boolean;
  isError?: string;
  isSuccess: boolean;
  message?: string;
}    

export interface IRootState {
  auth: IUser;
}



function Login(): JSX.Element {
  
  const initialState = {
    email: '',
    password: '',
  }
    const [formData, setFormData] = useState<LoginState>(initialState);

    console.log(FormData);
    

  
 
  const { email, password } = formData;

  const navigate = useNavigate()
 
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset)
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e:  ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e:  FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return (
        <h2>... spiner</h2>
    )
  }

  return (
    <>
      <section className='heading'>
        <h1>
         {/*<FaSignInAlt /> */}  Login
        </h1>
        <p>Login and start setting goals</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
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
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login