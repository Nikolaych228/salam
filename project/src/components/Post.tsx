import { useEffect, useState } from 'react'
import { getUsers } from '../requests/getUsers'

const Post = ({post}) => {
    const [user, setUser] = useState<{id:number, name: string, email: string, phone: string} | null> (null)

    useEffect(() => {
        async function foo() {
            try {
              const {data} = await getUsers(post)
                setUser({id: data.id, name: data.name, email: data.email, phone: data.phone})
            }
            catch(e){
                console.log(e)
            }
        }
        foo()
    }, [])  
    return (
    
    <article className="flex max-w-xl flex-col items-start justify-between mb-10">      
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
  </article>  
  )
}

export default Post