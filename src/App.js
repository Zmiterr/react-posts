import "./App.css"
import React from 'react';
import Posts from "./components/pages/Posts";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import About from "./components/pages/About";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./components/pages/Error";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
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
            </Switch>
            <Redirect to={'/Error'} />


        </BrowserRouter>

    );
};

export default App;
