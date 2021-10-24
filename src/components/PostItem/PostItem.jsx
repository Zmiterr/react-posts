import React from 'react';

const PostItem = ({post}) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{post.title}</strong>
                    <div>{post.id}. {post.body}</div>
                </div>
                <div className="post__buttons">
                    <button>DELETE</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
