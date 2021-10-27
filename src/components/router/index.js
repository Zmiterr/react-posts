import About from "../pages/About";
import PostDetails from "../pages/PostDetails";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostDetails, exact: true},
    {path: '/about', component: About, exact: false},
    {path: '/error', component: Error, exact: false}
]

export const publicRoutes = [
    {path: '/about', component: About, exact: false},
    {path: '/error', component: Error, exact: false},
    {path: '/login', component: Login, exact: false},
]
