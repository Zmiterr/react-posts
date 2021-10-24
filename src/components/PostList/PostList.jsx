import React from 'react';
import PostItem from "../PostItem/PostItem";

const PostList = ({title, posts, removePost}) => {
    return (
        <div>
            <h2>{title}</h2>
            {posts.map((post, index)=> <PostItem key={post.id} number={index+1} post={post} removePost={removePost}/>)}
        </div>
    );
};

export default PostList;
