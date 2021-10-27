import React from 'react';
import Button from "../UI/Button/Button";
import {useHistory} from "react-router-dom";

const PostItem = ({post, number, removePost}) => {
    const router = useHistory();
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{post.title}</strong>
                    <div>{number}. {post.body}</div>
                </div>
                <div className="post__buttons">
                    <Button onClick={()=>removePost(post.id)}>DELETE</Button>
                    <Button onClick={()=>router.push(`/Posts/${post.id}`)}>Open</Button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
