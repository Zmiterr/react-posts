import "./App.css"
import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/UI/AppRouter";
import {AuthContext} from "./context";

const App = () => {
    const [isAuthorised, setIsAuthorised] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
       if(localStorage.getItem('isAuth')){
           setIsAuthorised(true)
           setIsLoading(false)
       }
    }, [])
    return (
        <AuthContext.Provider value={{
            isAuthorised,
            setIsAuthorised,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>


    );
};

export default App;
