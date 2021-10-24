import React from 'react';
import PostItem from "../PostItem/PostItem";

const PostList = ({title, posts, removePost}) => {
    if(!posts.length){
        return <h2>Посты не найдены</h2>
    }

    return (
        <div>
            <h2>{title}</h2>
            {posts.map((post, index)=> <PostItem key={post.id} number={index+1} post={post} removePost={removePost}/>)}
        </div>
    );
};

export default PostList;
