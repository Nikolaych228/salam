import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import { postApi } from '../requests/post.api'
import { TPost } from './type'


const PostsPage = () => {
const [posts, setPosts] = useState <TPost[]>([])
const [loading, setLoading] = useState (false)
useEffect (() => {
    async function getPosts (){
        try{
            setLoading (true)
            const res = await postApi ()
            setPosts (res.data)
        }
        catch(e){
            setLoading (false)
            console.log(e)
        }
        finally {
            setLoading (true)
        }
    }
    getPosts()
},[]) 
  
    return (
            <div className='w-full flex items-center flex-col mt-10'>
                {
                    loading ?
                    <div>
                            <div className="flex border border-blue-300 shadow rounded-md p-5 mb-10 max-w-xl w-full mx-auto">
                            <div className="animate-pulse flex space-x-4">
                                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                                <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-700 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-5 gap-28">
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                    </div>
                                        <div className="h-2 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                            </div>
                            </div>
                            <div className="flex border border-blue-300 shadow rounded-md p-5 mb-10 max-w-xl w-full mx-auto">
                            <div className="animate-pulse flex space-x-4">
                                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                                <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-700 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-5 gap-28">
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                    </div>
                                        <div className="h-2 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                            </div>
                            </div>
                            <div className="flex border border-blue-300 shadow rounded-md p-5 mb-10 max-w-xl w-full mx-auto">
                            <div className="animate-pulse flex space-x-4">
                                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                                <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-700 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-5 gap-28">
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                    </div>
                                        <div className="h-2 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                            </div>
                            </div>
                        </div> 
                    : 
                        posts.map(post => 
                            <Post post={post}/> 
                        )
                }        
            </div>          
  )
}

export default PostsPage