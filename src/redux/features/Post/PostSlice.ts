import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import postService from './postService'
import axios from 'axios'
//import { PostsState } from './types'
import { AuthState } from '../Auth/Auth'
import { RootState } from '@/redux/store'

type Post = {
  id: number;
  title: string;
  text: string;
  image: string  | File;
 
}
type Posts = {
  
  post: any;
  user?: any
}

type PostState = {
 post: any;
 addCase?: any;
 
 message: any;
 isLoading: boolean;
 isError: string | boolean | null;
 isSuccess: boolean,
 posts: Posts[]
list: Post[]
}



const initialState: PostState = {
  list: [],
  
  post: [],
  posts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}
/*
export const createPostt = createAsyncThunk(
  'post/create',

  async (params, thunkAPI) => {
    
      try {
         const token = thunkAPI.getState().auth.user.token
          const { data } = await axios.post('/api/posts', params, token)
          return data
      } catch (error) {
          console.log(error)
      }
  },
)*/
// Create new goal
export const createPost = createAsyncThunk<PostState, object,  { rejectValue: string, state: { posts: PostState,  auth: AuthState}}>(
  'post/create',
  async (params,  thunkAPI) => {
  //  User , object, { rejectValue: string, state: { auth: AuthState} }
  try {
      const token: string | null = thunkAPI.getState().auth.user.token;
  
      return await postService.createPost(params, token)
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user goals
export const getPosts = createAsyncThunk<PostState, any,  { rejectValue: any, state: { posts: PostState,  auth: AuthState}}>(
  'posts/getAll',
  async (thunkAPI, {rejectWithValue}) => {
    
      const token: any = thunkAPI.getState().auth.user.token
      const response = await postService.getPosts(token)
      if (!response.ok) {
        return rejectWithValue('Server Error!');
      }

      const data = await response.json();

      return data;
    }
)
/*
// Delete user goal
export const deleteGoal = createAsyncThunk(
  'goals/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await goalService.deleteGoal(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
*/
export const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reset: () => initialState,
    addToCart: (state, action: PayloadAction<Post>) => {
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state: PostState) => {
        state.isLoading = true
      })
      .addCase(createPost.fulfilled, (state, action: PayloadAction<PostState>) => {
        state.isLoading = false
        state.isSuccess = true
       // state.list = action.payload.post
        state.post.push (action.payload.posts) 
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPosts.pending, (state: PostState) => {
        state.isLoading = true
      })
      .addCase(getPosts.fulfilled, (state:  PostState, action: PayloadAction<PostState>) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts.push (action.payload) 
        //state.posts = action.payload
      // state.list = action.payload.post
      })
      .addCase(getPosts.rejected, (state:  PostState, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
     /* .addCase(deleteGoal.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals = state.goals.filter(
          (goal) => goal._id !== action.payload.id
        )
      })
      .addCase(deleteGoal.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      */
  },
})

export const { reset } = PostsSlice.actions
export default PostsSlice.reducer
export const { addToCart } = PostsSlice.actions;