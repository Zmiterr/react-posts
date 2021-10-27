import "./App.css"
import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/UI/AppRouter";
import {AuthContext} from "./context";

const App = () => {
    const [isAuthorised, setIsAuthorised] = useState(false);
    return (
        <AuthContext.Provider value={{
            isAuthorised,
            setIsAuthorised
        }}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>


    );
};

export default App;
