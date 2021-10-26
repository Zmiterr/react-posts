import "./App.css"
import React from 'react';
import Posts from "./components/pages/Posts";
import {BrowserRouter, Link, Route} from "react-router-dom";
import About from "./components/pages/About";

const App = () => {
    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="navbar__links">
                    <Link className="navbar__link" to={'/'}>Posts</Link>
                    <Link className="navbar__link" to={'/about'}>About</Link>
                </div>
            </div>
            <Route path={'/'} exact>
                <Posts  />
            </Route>
            <Route path={'/about'}>
                <About />
            </Route>

        </BrowserRouter>

    );
};

export default App;
