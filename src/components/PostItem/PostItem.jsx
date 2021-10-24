import React from 'react';
import Button from "../UI/Button/Button";

const PostItem = ({post, number, removePost}) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{post.title}</strong>
                    <div>{number}. {post.body}</div>
                </div>
                <div className="post__buttons">
                    <Button onClick={()=>removePost(post.id)}>DELETE</Button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
