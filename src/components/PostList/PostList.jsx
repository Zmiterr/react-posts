import React, {useState} from 'react';
import PostItem from "../PostItem/PostItem";

const PostList = ({title}) => {
    const [posts, setPosts] = useState(
        [
            { id: 1, title: 'Post 1',  body: 'gdfsgsdfgdsfg'},
            { id: 2, title: 'Post 2',  body: 'jkghjgjg'},
            { id: 3, title: 'Post 3' ,  body: 'fdsfsadf' },
            { id: 100, title: 'Post 4',  body: 'lorem3 fdssd' },
        ]
    )

    return (
        <div>
            <h2>{title}</h2>
            {posts.map(post=> <PostItem key={post.id} post={post}/>)}
        </div>
    );
};

export default PostList;
