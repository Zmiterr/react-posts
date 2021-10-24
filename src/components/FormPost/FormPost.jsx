import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const FormPost = ({createPost}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e)=>{
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        createPost(newPost)
        setPost({title: '', body: ''})
    }
    return (
        <div>
            <form>
                <Input type="text" placeholder="Add tile" value={post.title} onChange={e=> setPost({...post, title: e.target.value})}/>
                <Input type="text" placeholder="post content" value={post.body} onChange={e=> setPost({...post, body: e.target.value})}/>
                <Button onClick={addNewPost} >Create post</Button>
            </form>
        </div>
    );
};

export default FormPost;
