import "./App.css"
import PostList from "./components/PostList/PostList";
import {useEffect, useState} from "react";
import FormPost from "./components/FormPost/FormPost";
import PostFilter from "./components/PostFilter/PostFilter";
import Modal from "./components/UI/Modal/Modal";
import Button from "./components/UI/Button/Button";
import {usePosts} from "./hooks/usePosts";
import PostService from "./components/API/PostService";
import Loader from "react-loader-spinner";


function App() {
    const [posts, setPosts] = useState(
        [
            { id: 0, title: '',  body: ''}
        ]
    )

    const [isPostLoading, setIsPostLoading] = useState(false)

    async function fetchPosts(){
        setIsPostLoading(true)
        const posts = await PostService.getAllPosts()
        setPosts(posts)
        setIsPostLoading(false)
    }
    useEffect(()=>{
        fetchPosts()
    }, [])
    const [isModalActive, setIsModalActive] = useState(false)

    const [filter, setFilter] = useState({sort:'', searchString: ''})

    const createPost = (post) => {
        setPosts([...posts, post])
    }

    const removePost = (postID) => {
        setPosts(posts.filter(p=>p.id !== postID))
    }

    // const sortedPosts = useMemo(()=> {
    //     return filter.sort
    //         ?[...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    //         :[...posts]
    // }, [posts, filter.sort])
    //
    // const sortedAndFilteredPosts = useMemo(() => {
    //     return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.searchString))
    // }, [sortedPosts, filter.searchString])

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
            :<PostList title={'Post list title'} posts={sortedAndFilteredPosts} removePost={removePost}/>}
        </div>
    </div>
  );
}

export default App;
