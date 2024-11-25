import { useEffect, useState } from 'react'
import { getUsers } from '../requests/getUsers'
import { getCommets } from '../requests/commenst.api'

const Post = ({post}) => {
    const [user, setUser] = useState<{id:number, name: string, email: string, phone: string} | null> (null)
    const [comment, setComment] = useState (null)
    const [open, setOpen] = useState (false)

    useEffect(() => {
        async function foo() {
            try {
              const {data} = await getUsers(post)
                setUser({id: data.id, name: data.name, email: data.email, phone: data.phone})
              
              const ress = await getCommets(post.id)
              setComment (ress.data) 
              }
            catch(e){
                console.log(e)
            }
        }
        foo()
    }, [])  
    return (
    
    <article className="border-2 p-4 border-blue-200  rounded-xl flex max-w-xl flex-col items-start justify-between mb-10">      
      
      <div className="relative flex items-center gap-x-4">
        <div className="flex justify-center items-center h-10 w-10 rounded-full bg-blue-400">
          {
            !user ? null :
            user.name.toUpperCase()[0]
          }
        </div>
        <div className="text-sm/6">
          <p className="font-semibold text-gray-900">
            <a href="#">
              <span className="absolute inset-0"></span>
                {
                  !user ? null :
                  user.name
                }
            </a>
          </p>
          <p className="text-gray-600">
            {
              !user ? null :
              user.email
            }
          </p>
        </div>
      </div>
      
      <div className="group relative">
        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
          <a href="#">
            <span className="absolute inset-0"></span>
              {
                post.title
              }
          </a>
        </h3>
          <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
              {
                post.body
              }
          </p>
      </div>
              <div className='cursor-pointer p-2' onClick={() => {setOpen((open)=> !open)}}>
              <svg width={24} height={24} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 12C5.49988 14.613 6.95512 17.0085 9.2741 18.2127C11.5931 19.4169 14.3897 19.2292 16.527 17.726L19.5 18V12C19.5 8.13401 16.366 5 12.5 5C8.63401 5 5.5 8.13401 5.5 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.5 13.25C9.08579 13.25 8.75 13.5858 8.75 14C8.75 14.4142 9.08579 14.75 9.5 14.75V13.25ZM13.5 14.75C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25V14.75ZM9.5 10.25C9.08579 10.25 8.75 10.5858 8.75 11C8.75 11.4142 9.08579 11.75 9.5 11.75V10.25ZM15.5 11.75C15.9142 11.75 16.25 11.4142 16.25 11C16.25 10.5858 15.9142 10.25 15.5 10.25V11.75ZM9.5 14.75H13.5V13.25H9.5V14.75ZM9.5 11.75H15.5V10.25H9.5V11.75Z" fill="#000000"></path> </g></svg>
              </div>
              <div style={open ? null : {display: 'none'}}>
                  {
                  comment && comment.map((comment) =>
                      <div className='mt-6 border-2 border-blue-200 rounded-md p-1 w-full'>
                  <div className="flex text-sm/6 flex-col flex-start">        
                      <div className="font-semibold text-gray-900">
                        {
                          comment.name
                        }           
                      </div>
                      <div className="flex text-gray-600">
                        {
                          comment.email
                        }
                      </div>
                    </div>
                      <p className="text-sm/6 mt-2">
                        {
                          comment.body
                        }
                      </p>
                  </div>
                  )
                }
              </div>
              
              


            <div className="w-full mb-2 mt-6">
                <textarea
                        className="bg-gray-100 rounded border text-sm border-gray-400 leading-normal resize-none w-full h-10 py-2 px-3 placeholder-gray-400 focus:outline-none focus:bg-white"
                        name="body" placeholder="Comment" required></textarea>
            </div>

    <div className="w-full flex justify-end">
        <input type="submit" className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500" value='Post Comment'/>
    </div>
  </article>  
  )
}

export default Post