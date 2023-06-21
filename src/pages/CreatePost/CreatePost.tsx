import React, { useState, useRef, useEffect, FormEvent, Dispatch } from 'react'
import { validCreateBlog, shallowEqual } from '../../utils/Valid'
import PostForm from '../../components/PostForm/PostForm'
import { Posts, PostsState } from '@/Types/Post';
import { useSelector, useDispatch} from 'react-redux';
import {  AnyAction, ThunkDispatch} from "@reduxjs/toolkit";
import { IBlog, IUser } from '../../utils/TypeScript'
import { RootState } from '@/redux/store';
import { createPost, reset } from '../../redux/features/Post/PostSlice'
import { getPosts } from '@/redux/features/Post/PostSlice';
import NotFound from '../../pages/NotFound'

export default function CreatePost () {
  const initState = {
   // user: '',
    title: '',
    text: '',
   // description: '',
    image: '',
   // category: '',
   // createdAt: new Date().toISOString()
  }
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
  const { posts} = useSelector<PostsState, Posts> ( (state) => state.posts);
  const id = posts._id
  const [blog, setBlog] = useState<{title: string, text: string, image: string | File}>(initState);



const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  const { title, text, image } = blog;
console.log(blog);

  if (title && text && image) {
   dispatch(createPost(blog));
    setBlog(initState);
  }
}



 
 

  return (
    <div><PostForm blog={blog} setBlog={setBlog} handleSubmit={handleSubmit}/> </div>
  )
}
