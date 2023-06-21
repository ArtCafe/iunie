import React, { useState, useEffect } from "react";
import PostItem from '../../components/PostItem/PostItem'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


export default function Post() {
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
 


  //initalp details
  useEffect(() => {
    if (params?.id)
     getProduct()
     
    
  }, [params?.id]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/posts/${params.id}`
      );
      setPost(data);
   
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div>
<PostItem post ={post}/>

    </div>
  )
}
