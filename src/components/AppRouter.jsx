import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Error from "./pages/Error";

const AppRouter = () => {
    return (
        <Switch>
            <Route path={'/'} exact>
                <Posts  />
            </Route>
            <Route path={'/about'}>
                <About />
            </Route>
            <Route path={'/Error'}>
                <Error />
            </Route>
            <Redirect to={'/Error'} />
        </Switch>
    );
};

export default AppRouter;
