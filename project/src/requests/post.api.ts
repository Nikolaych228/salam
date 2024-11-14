import axios from "axios"

export const postApi = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/posts")
}