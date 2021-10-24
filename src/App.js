import "./App.css"
import PostList from "./components/PostList/PostList";
import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Input/Input";

function App() {

  return (
    <div className="App">
        <form>
            <Input type="text" placeholder="Add tile"/>
            <Input type="text" placeholder="post content"/>
            <Button>Create post</Button>
        </form>
        <PostList title={'Post list title'}/>
    </div>
  );
}

export default App;
