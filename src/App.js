import "./App.css"
import PostList from "./components/PostList/PostList";
import { useState} from "react";
import FormPost from "./components/FormPost/FormPost";

function App() {
    const [posts, setPosts] = useState(
        [
            { id: 1, title: 'Post 1',  body: 'gdfsgsdfgdsfg'},
            { id: 2, title: 'Post 2',  body: 'jkghjgjg'},
            { id: 3, title: 'Post 3' ,  body: 'fdsfsadf' },
            { id: 4, title: 'Post 4',  body: 'lorem3 fdssd' },
        ]
    )
    const createPost = (post) => {
        setPosts([...posts, post])
    }

    const removePost = (postID) => {
        setPosts(posts.filter(p=>p.id !== postID))
    }

  return (
    <div className="App">
        <FormPost createPost={createPost} />
        <PostList title={'Post list title'} posts={posts} removePost={removePost}/>
    </div>
  );
}

export default App;
