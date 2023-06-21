

export type LoginState = {
    email: string,
    password: string
}


export type     RegisterState = {
    email: string,
    password: string
    name: string,
    password2?: string | undefined
  }
  export type     RegisterStateSelector= {
   isLoading: boolean,
    
  }

 export type User = {
    id: number;
    name: string;
    password: string;
    email: string;
  
 }
 export  type UserHome  = {
  avatar: string;
  text: string;
  id: number;
  name: string;
  password: string;
  email: string;
}
 export type AuthState = {
   auth: any
   list: User[];
   addCase?: any;
    user: any
   message: any;
   isLoading: boolean;
   isError: string | boolean | null;
   isSuccess: boolean,
 }
 

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