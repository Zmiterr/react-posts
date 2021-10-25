import axios from "axios";

export default class PostService {
    static async  getAllPosts() {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return posts.data

    }
}
