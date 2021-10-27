import About from "../pages/About";
import PostDetails from "../pages/PostDetails";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

export const routes = [
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostDetails, exact: true},
    {path: '/about', component: About, exact: false},
    {path: '/error', component: Error, exact: false},
]
