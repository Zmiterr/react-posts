import "./App.css"
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/UI/AppRouter";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>

    );
};

export default App;
