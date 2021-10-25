import React from 'react';
import PostItem from "../PostItem/PostItem";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PostList = ({title, posts, removePost, errorMessage}) => {
    if(!posts.length&&!errorMessage){
        return <h2>Посты не найдены</h2>
    }
    if(errorMessage){
        return <h2>{errorMessage}</h2>
    }

    return (
        <div>
            <h2>{title}</h2>
            <TransitionGroup>
                {posts.map((post, index)=>
                    <CSSTransition
                        key={post.id}
                        timeout={300}
                        classNames="post"
                    >
                        <PostItem number={index+1} post={post} removePost={removePost}/>
                    </CSSTransition>

                )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;
