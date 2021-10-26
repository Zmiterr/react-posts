import "./App.css"
import {useEffect, useMemo, useState} from "react";
import Loader from "react-loader-spinner";
import PostList from "./components/PostList/PostList";
import FormPost from "./components/FormPost/FormPost";
import PostFilter from "./components/PostFilter/PostFilter";
import PostService from "./components/API/PostService";
import Modal from "./components/UI/Modal/Modal";
import Button from "./components/UI/Button/Button";
import {usePosts} from "./hooks/usePosts";
import {useFetch} from "./hooks/useFetch";
import {getPagesCount} from "./components/utils/pages";
import Pagination from "./components/UI/Pagination/Pagination";

function App() {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(5)
    const [pagesCount, setPagesCount] = useState(0)

    const [fetchPosts, errorMessage, isPostLoading] = useFetch(async ()=>{
        const posts= await PostService.getAllPosts(page, limit)
        setPosts(posts.data)
        const totalCount = posts.headers['x-total-count']
        setPagesCount(getPagesCount(totalCount, limit))
    })

    const pagesArray = useMemo(()=>{
        const pagesArray = []
        for(let i=1; i<=pagesCount; i++){
            pagesArray.push(i)
        }
        return pagesArray
    },[pagesCount])

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
        <Pagination pagesArray={pagesArray} page={page} setPage={setPage}/>
    </div>
  );
}

export default App;
