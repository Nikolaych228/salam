import axios from "axios"

export const getUsers = async (post) => {
    return await axios.get <{id:number, name: string, email: string, phone: string}> (`https://jsonplaceholder.typicode.com/users/${post.userId}`)
}