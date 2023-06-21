export type Posts = {
    id: number;
    title: string;
    text: string;
    emage: string;
    posts?: any;
  isLoading: boolean;
 isError: string | boolean | null;
 message: any;
 }
 
  export type PostsState = {
    posts?: any 
   list: Posts[];
   addCase?: any;
    user?: any
   
   
  
   isSuccess: boolean,
   post:  any,
  
 }