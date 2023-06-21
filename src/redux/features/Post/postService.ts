import { API_URL } from '@/api/config';
import axios from 'axios'


const API_Post = '/api/posts/'


// Create new goal
const createPost = async (formData: object, token: string | null, ) => {
  console.log("create post", formData);
  const config = {
    headers: {
      // Multer only parses "multipart/form-data" requests
      'Content-Type': 'aplication/json multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    data: formData,
  }

  const response = await axios.post( `${API_URL}${API_Post}`, formData, config)

  return response.data
}

// Get user goals
const getPosts = async (token: string | null) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(`${API_URL}${API_Post}`, config)

  return response.data
}
/*
// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + goalId, config)

  return response.data
}

*/

const postService = {
  createPost,
  getPosts,
 // deleteGoal,
}

export default postService
