import axios from "axios";

export default class PostService {
    static async  getAllPosts() {
        try {
            const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return posts.data
        }
        catch (e){
            console.log(e)
        }

    }
}
