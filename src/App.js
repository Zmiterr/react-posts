import "./App.css"
import PostList from "./components/PostList/PostList";
import {useMemo, useState} from "react";
import FormPost from "./components/FormPost/FormPost";
import SelectList from "./components/UI/SelectList/SelectList";
import Input from "./components/UI/Input/Input";

function App() {
    const [posts, setPosts] = useState(
        [
            { id: 1, title: 'qPost 1',  body: 'gdfsgsdfgdsfg'},
            { id: 2, title: 'Post 2',  body: 'jkghjgjg'},
            { id: 3, title: 'Post 3' ,  body: 'fdsfsadf' },
            { id: 4, title: 'Post 4',  body: 'lorem3 fdssd' },
        ]
    )

    const [selectedSort, setSelectedSort] = useState('')
    const [searchValue, setSearchValue] = useState('')

    const createPost = (post) => {
        setPosts([...posts, post])
    }

    const removePost = (postID) => {
        setPosts(posts.filter(p=>p.id !== postID))
    }

    const sortPost = (sort) => {
        setSelectedSort(sort);
        setPosts(sortedPosts)
    }

    const sortedPosts = useMemo(()=> {
        console.log('q')
        return selectedSort
            ?[...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
            :[...posts]
    }, [posts, selectedSort])

  return (
    <div className="App">
        <FormPost createPost={createPost} />
        <hr />
        <Input placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        <SelectList
            value={selectedSort}
            onChange={sortPost}
            defaultValue='Сортировка по'
            options={[
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'}
            ]}/>
        {sortedPosts.length
            ? <PostList title={'Post list title'} posts={sortedPosts} removePost={removePost}/>
            :<h2>Посты не найдены</h2>
        }
    </div>
  );
}

export default App;
