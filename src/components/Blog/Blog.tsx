import React, { useState } from 'react';
import {  ThunkDispatch} from "@reduxjs/toolkit";
import PostItem from '../PostItem/PostItem';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../components/Spinner'
import { Posts, PostsState } from '@/Types/Post';
import {  IRootState, IUser } from '@/Types/Auth';
import { addToCart, getPosts, reset } from '../../redux/features/Post/PostSlice'
import { API_URL } from '@/api/config';
import axios, { AxiosResponse } from 'axios'
import { tokenToString } from 'typescript';

type BlogProps = {
  flag: boolean
  //Component: React.ComponentType<ProfileProps>
}

export default function Blog({flag}: BlogProps) {
  const navigate = useNavigate()
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();



const { user } = useSelector<IRootState, IUser>((state) => state.auth)

  const { posts, isLoading, isError, message } = useSelector<PostsState, Posts> ( (state) => state.posts)
  
  //console.log("posts",posts);

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }
   
   
    dispatch(addToCart)

    return () => {
      dispatch(reset)
    }
  }, [user,  navigate, isError, message,  dispatch, posts])

  if (isLoading) {
   return <Spinner />
  }

  if (!posts) {
    return <Spinner />
   }
 

  return (
  <div  >

    {posts.length > 0 ? (
          <div className="w3-card-4 w3-margin w3-white">
            {posts.map((post: any) => 
            
            (
              <PostItem  flag = {flag} 
              key={post._id}
              post={post} 
              />
            ))}
          </div>
        ) : (
          <h3>You have not set any posts</h3>
        )}
    </div>
    
   
  )
}
