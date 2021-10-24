import "./App.css"
import PostList from "./components/PostList/PostList";
import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Input/Input";
import { useState} from "react";

function App() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
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
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost])
        setTitle('')
        setBody('')

    }


  return (
    <div className="App">
        <form>
            <Input type="text" placeholder="Add tile" value={title} onChange={e=> setTitle(e.target.value)}/>
            <Input type="text" placeholder="post content" value={body} onChange={e=> setBody(e.target.value)}/>
            <Button onClick={addNewPost} >Create post</Button>
        </form>
        <PostList title={'Post list title'} posts={posts}/>
    </div>
  );
}

export default App;
