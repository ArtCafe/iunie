import { RegisterState } from '@/Types/Auth';
import { API_URL } from '@/api/config';
import axios from 'axios';

const API_USER = '/api/users/'
//`${API_URL}/decks/${deckId}/cards`,
// Register user
const register = async (user: any) => {
  const response = await axios.post(`${API_URL}${API_USER}`, user)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (user: any) => {
  const response = await axios.post(API_URL + 'login', user)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}/*
const createProfil = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + 'update', userData, config)

  return response.data
}
*/
// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
 // createProfil
}

export default authService