import React, {useEffect} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from 'react-router-dom'
import { JsxElement } from 'typescript';


type PostitemProps = {
  flag: boolean
   post: any
}
export default function PostItem({ flag, post}: PostitemProps) {
  const params = useParams();

  const handleDelete = async () => {
    
    try {
      const { data } = await axios.delete(
        `/api/posts/${params.id}`
      );
     // setPost(data);
   
    } catch (error) {
      console.log(error);
    }
    
  }

  console.log("postitem", post);

  return (
    <>
     <div >{flag && <Link to={`post/${post?._id}`}>redactare</Link>}</div>
    <div >{flag ? <button   onClick={handleDelete}> x </button>: <h2></h2>}</div>
    
    <div  >

                   <img
                        src={post?.image}
                        alt="post image"
                        style={{width:"100%"}}
                      //  width="888px"
                    />
                
    </div>
    
    <div className="w3-container">
        <h3><b> {post?.title}</b></h3>
      <h5>  <span className="w3-opacity">April 7, 2014</span></h5>
      <p>{post?.text}</p>
      <div className="w3-row">
    
        <div className="w3-col m8 s12">
          <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
        </div>
    
        <div className="w3-col m4 w3-hide-small">
          <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span className="w3-tag">0</span></span></p>
        </div>
    
        </div>
        </div>
        </>
  )
}
