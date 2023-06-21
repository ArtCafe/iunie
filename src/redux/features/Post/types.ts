

  export type Post = {
    id: number;
    title: string;
    text: string;
    image: string;
   
 }
 
  export type PostsState = {
    post: Post[]
  // list: Post[];
   addCase?: any;
    user?: any
   message: any;
   isLoading: boolean;
   isError: string | boolean | null;
   isSuccess: boolean,
   posts:  Post[]
 }