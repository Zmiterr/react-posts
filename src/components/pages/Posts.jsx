import "./../../App.css"
import {useEffect, useState} from "react";
import PostService from "../API/PostService";
import {useFetch} from "../../hooks/useFetch";
import {getPagesCount} from "../utils/pages";
import {usePosts} from "../../hooks/usePosts";
import PostFilter from "../PostFilter/PostFilter";
import Button from "../UI/Button/Button";
import FormPost from "../FormPost/FormPost";
import Modal from "../UI/Modal/Modal";
import PostList from "../PostList/PostList";
import Pagination from "../UI/Pagination/Pagination";
import Loader from "react-loader-spinner";

function Posts() {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [pagesCount, setPagesCount] = useState(0)

    const [fetchPosts, errorMessage, isPostLoading] = useFetch(async ()=>{
        const response= await PostService.getAllPosts(page, limit)
        setPosts([ ...response.data])
        const totalCount = response.headers['x-total-count']
        setPagesCount(getPagesCount(totalCount, limit))
    })

    useEffect(()=>{
        fetchPosts()
    }, [page])
    const [isModalActive, setIsModalActive] = useState(false)

    const [filter, setFilter] = useState({sort:'', searchString: ''})

    const createPost = (post) => {
        setPosts([...posts, post])
    }

    const removePost = (postID) => {
        setPosts(posts.filter(p=>p.id !== postID))
    }

    const sortedAndFilteredPosts= usePosts(filter.sort, posts, filter.searchString, 'title');

    return (
        <div className="App">
            <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive}>
                <FormPost createPost={createPost} />
            </Modal>
            <Button onClick={()=>setIsModalActive(true)}>New post</Button>

            <hr />
            <PostFilter filter={filter} setFilter={setFilter}/>
            <div className="PostListContainer">

                {isPostLoading
                    ?
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                    />
                    :<PostList title={'Post list title'} posts={sortedAndFilteredPosts} removePost={removePost} errorMessage={errorMessage}/>
                }
            </div>
            <Pagination pagesCount={pagesCount} page={page} setPage={setPage}/>
        </div>
    );
}

export default Posts;
