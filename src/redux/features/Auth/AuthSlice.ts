import {  createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import authService from './Athservice'

//const user: User = [{}]
const user = JSON.parse(localStorage.getItem('user') || "{}")
type User = {
   id: number;
   name: string;
   password: string;
   email: string;
  
}

type AuthState = {
  list: User[];
  addCase?: any;
   user: any
  message: any;
  isLoading: boolean;
  isError: string | boolean | null;
  isSuccess: boolean,
}

/*
export interface AuthItem  extends User{
    user: User | null;
   } 
 
interface AuthState = {
    items: AuthItem[];
    addCase?: any;
    user: User | null
     message: any;
    isLoading: boolean;
    isError: boolean, 
   isSuccess: boolean,
}

*/

const initialState: AuthState = {
      user: user ? user : null,
      isError: null,
      isSuccess: false,
      isLoading: false,
      message: '',
      list: []
   
};



type UserData = {}

// Register user
export const register  = createAsyncThunk<User , object, { rejectValue: string, state: { auth: AuthState} }>(
    'auth/register',
    async ( user: UserData, {rejectWithValue}) => {
      
      const  response = await authService.register(user)
     
      if (!response.ok) {
        return rejectWithValue('Server Error!');
      }

      const data = await response.json();

      return data;
    }
      
    
  )   

 // login user
  export const login  = createAsyncThunk<User , object, { rejectValue: string }>(
      'auth/register',
      async ( user: UserData, {rejectWithValue}) => {
        
        const  response = await authService.login(user)
       
        if (!response.ok) {
          return rejectWithValue('Server Error!');
        }
  
        const data = await response.json();
  
        return data;
      }
        
      
    )   
  
export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      reset: (state: AuthState, action: PayloadAction<User>) => {
        state.list.push(action.payload);
      },
      extraReducers: (builder) => {
        builder
          .addCase(register.pending, (state: AuthState) => {
            state.isLoading = true
          })
          .addCase(register.fulfilled, (state: AuthState, action: PayloadAction<AuthState>) => {
            state.isLoading = false
            state.isSuccess = true
            state.list = action.payload.user
          })
          .addCase(register.rejected, (state: AuthState, action: PayloadAction<AuthState>) => {
            state.isLoading = false
            state.isError = true;
            state.message = action.payload
            state.user = null
          })
          //
          .addCase(login.pending, (state: AuthState) => {
            state.isLoading = true
          })
          .addCase(login.fulfilled, (state: AuthState, action: PayloadAction<AuthState>) => {
            state.isLoading = false
            state.isSuccess = true
            state.list = action.payload.user
          })
          .addCase(login.rejected, (state: AuthState, action: PayloadAction<AuthState>) => {
            state.isLoading = false
            state.isError = true;
            state.message = action.payload
            state.user = null
          })


        }}
  });
  
  export default AuthSlice.reducer;
  export const { reset } = AuthSlice.actions;
  