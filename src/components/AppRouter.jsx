import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Error from "./pages/Error";
import PostDetails from "./pages/PostDetails";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/posts'} >
                <Posts  />
            </Route>
            <Route exact path={'/posts/:id'} >
                <PostDetails  />
            </Route>
            <Route path={'/about'}>
                <About />
            </Route>
            <Route path={'/Error'}>
                <Error />
            </Route>
            <Redirect to={'/Posts'} />
        </Switch>
    );
};

export default AppRouter;
