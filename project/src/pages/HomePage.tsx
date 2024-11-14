import axios from "axios"
import { useEffect, useState } from "react"


const HomePage = () => {
    const [users, setUsers] = useState<{id:number, name: string, email: string, phone: string}[] | null>(null)
     
    useEffect(() => {
        async function foo() {
            try {
                const res = await axios.get<{id:number, name: string, email: string, phone: string}[]>('https://jsonplaceholder.typicode.com/users')
                const sec_arr = []
                for (let user of res.data) {
                    sec_arr.push({id: user.id, name: user.name, email: user.email, phone: user.phone})
                }
                setUsers(sec_arr)
            }
            catch(e){
                console.log(e)
            }
        }
        foo()
    }, [])
    
    return (
        <div className="flex mt-8 justify-around overflow-x-hidden flex-wrap">
                {
                    !users ? null : 
                    users.map(user => 
                        <div className="flex h-96 mt-8 border-2 border-black flex-col justify-around">
                            <div className="flex justify-center text-nowrap w-96">
                                
                                {
                                    user.name
                                }
                                
                            
                            </div>
                            
                            <div className="flex justify-center text-nowrap w-96 ">
                                {
                                    user.email
                                }
                            </div>
                            <div className="flex justify-center text-nowrap w-96 ">
                                {
                                    user.phone
                                }
                            </div>

                        </div>
                    )   
                }

            
           
        </div>
    )

}



export default HomePage

