import axios from "axios"

export const getCommets = async (postId: number) => {
    return await axios.get (`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
}