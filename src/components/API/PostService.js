import axios from "axios";

export default class PostService {
    static async  getAllPosts(page, limit) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts', {params: {
                _page: page,
                _limit: limit
            }})
    }

    static async  getPostData(postId) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    }

    static async  getCommentsData(postId) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    }
}


