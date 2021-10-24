import "./App.css"
import PostList from "./components/PostList/PostList";
import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Input/Input";
import { useState} from "react";

function App() {
    const [post, setPost] = useState({title: '', body: ''})
    const [posts, setPosts] = useState(
        [
            { id: 1, title: 'Post 1',  body: 'gdfsgsdfgdsfg'},
            { id: 2, title: 'Post 2',  body: 'jkghjgjg'},
            { id: 3, title: 'Post 3' ,  body: 'fdsfsadf' },
            { id: 4, title: 'Post 4',  body: 'lorem3 fdssd' },
        ]
    )


    const addNewPost = (e)=>{
        e.preventDefault();
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }


  return (
    <div className="App">
        <form>
            <Input type="text" placeholder="Add tile" value={post.title} onChange={e=> setPost({...post, title: e.target.value})}/>
            <Input type="text" placeholder="post content" value={post.body} onChange={e=> setPost({...post, body: e.target.value})}/>
            <Button onClick={addNewPost} >Create post</Button>
        </form>
        <PostList title={'Post list title'} posts={posts}/>
    </div>
  );
}

export default App;
