import React from 'react';
import PostItem from "../PostItem/PostItem";

const PostList = ({title, posts}) => {
    return (
        <div>
            <h2>{title}</h2>
            {posts.map((post, index)=> <PostItem key={post.id} number={index+1} post={post}/>)}
        </div>
    );
};

export default PostList;
