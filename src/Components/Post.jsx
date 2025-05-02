import React from 'react';
import {useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const navigate=useNavigate()
    const handleShowPost=()=>{
        navigate(`${id}`)
    }

   
    const {id,title}=post
    return (
        <div className='border-4 border-[#FF0B55] p-12 rounded-2xl text-center flex flex-col gap-2 '>
           <h1 className="text-2xl font-black">{id}</h1>
           <p className='flex-grow'>Title : {title}</p>
           <button onClick={handleShowPost} className='btn bg-[#E83F25] text-white rounded-2xl '>show post</button>
           
        </div>
    );
};

export default Post;