import React from 'react';

const PostItem = ({post, number}) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{post.title}</strong>
                    <div>{number}. {post.body}</div>
                </div>
                <div className="post__buttons">
                    <button>DELETE</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
