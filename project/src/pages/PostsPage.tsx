import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import { post } from '../components/MockData'
import { TPost } from './type'
import axios from 'axios'

const PostsPage = () => {
const [posts, setPosts] = useState <TPost[]>([])
useEffect (() => {
    async function getPosts (){
        try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPosts (res.data)
        }
        catch(e){
            console.log(e)
        }
    }
    getPosts()
},[]) 
  
    return (
    <div className='w-full flex items-center flex-col'>
        {posts.map(post => 
           <Post post={post}/> 
        )}
        
    </div>
  )
}

export default PostsPage