import "./App.css"
import PostList from "./components/PostList/PostList";
import { useState} from "react";
import FormPost from "./components/FormPost/FormPost";
import SelectList from "./components/UI/SelectList/SelectList";

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

    const createPost = (post) => {
        setPosts([...posts, post])
    }

    const removePost = (postID) => {
        setPosts(posts.filter(p=>p.id !== postID))
    }

    const sortPost = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))

      console.log(sort);
    }

  return (
    <div className="App">
        <FormPost createPost={createPost} />
        <hr />

        <SelectList
            value={selectedSort}
            onChange={sortPost}
            defaultValue='Сортировка по'
            options={[
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'}
            ]}/>
        {posts.length
            ? <PostList title={'Post list title'} posts={posts} removePost={removePost}/>
            :<h2>Посты не найдены</h2>
        }
    </div>
  );
}

export default App;
