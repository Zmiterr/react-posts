import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import PostService from "../API/PostService";
import Loader from "react-loader-spinner";

const PostDetails = () => {
    const params = useParams();
    const [postDetails, setPostDetails] = useState({})
    const [commentsDetails, setCommentsDetails] = useState([])
    const [fetchPosts, errorMessage, isPostLoading] = useFetch(async ()=>{
        const posts= await PostService.getPostData(params.id)
        setPostDetails(posts.data)
    })

    const [fetchComments, errorMessageComments, isCommentsLoading] = useFetch(async ()=>{
        const comments= await PostService.getCommentsData(params.id)
        setCommentsDetails(comments.data)
    })

    useEffect(()=>{
        fetchPosts()
        // fetchComments()
    }, [])


    useEffect(()=>{
        fetchComments()
    }, [])

    return (
        <>
            <div>
                {isCommentsLoading
                    ?
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                    />
                    :<div>
                        <h2>{postDetails.title}</h2>
                        <p>{postDetails.body}</p>
                    </div>
                }
            </div>
            <div>
                {isPostLoading
                    ?
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                    />
                    :<div>
                        {commentsDetails.map(c=>
                            <div>
                                <h4>{c.email}</h4>
                                <p>{c.body}</p>
                            </div>
                            )}
                        <h2>{commentsDetails.email}</h2>
                        <p>{commentsDetails.body}</p>
                    </div>
                }
            </div>
        </>


    );
};

export default PostDetails;
