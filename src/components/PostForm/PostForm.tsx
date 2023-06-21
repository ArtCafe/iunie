import { useState, useCallback, FormEvent, ChangeEvent} from 'react'


import { useParams, useNavigate } from 'react-router-dom'

import {  IBlog, InputChange } from '../../utils/TypeScript'

interface IProps {
  blog: IBlog,
  setBlog: (blog: IBlog) => void
  handleSubmit:   any
}

const PostForm: React.FC<IProps>= ({blog, setBlog, handleSubmit}) => {



const handleChangeInput = (e: InputChange) => {
  const { value, name } = e.target
  setBlog({...blog, [name]:value})
}

const handleChangeThumbnail = (e: InputChange) => {
  const target = e.target as HTMLInputElement
  const files = target.files
  if(files){
    const file = files[0]
    setBlog({...blog, image: file})
  }
}


return (
    <>
   <section className='form'>

      <form  onSubmit={(e) => e.preventDefault()} >
        <div className='form-group'>
          
          <label htmlFor='text'>Post</label>
          <input type="file" 
        accept="image/*" onChange={handleChangeThumbnail} />

           <input
            type='text'
            name='title'
            id='title'
          //  value={title}
            onChange={handleChangeInput }
          />
           <label htmlFor='text'>Text</label>
           <textarea
            //type='text'
            name='text'
            id='text'
         //   value ={text}
            onChange={ handleChangeInput }
             />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'
          onClick={handleSubmit}
          >
            Add Post
          </button>
        </div>
      </form>
    </section>
    
    
    </>
  )
}

export default PostForm
