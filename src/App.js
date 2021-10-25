import "./App.css"
import PostList from "./components/PostList/PostList";
import {useEffect, useState} from "react";
import FormPost from "./components/FormPost/FormPost";
import PostFilter from "./components/PostFilter/PostFilter";
import Modal from "./components/UI/Modal/Modal";
import Button from "./components/UI/Button/Button";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState(
        [
            { id: 0, title: '',  body: ''}
        ]
    )

    async function fetchPosts(){
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(posts.data)
    }
    useEffect(()=>{
        fetchPosts()
    }, [])
    const [isModalActive, setIsModalActive] = useState(false)

    const [filter, setFilter] = useState({sort:'', searchString: ''})

    const createPost = (post) => {
        setPosts([...posts, post])
        setIsModalActive(false)
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
        <PostList title={'Post list title'} posts={sortedAndFilteredPosts} removePost={removePost}/>
    </div>
  );
}

export default App;
