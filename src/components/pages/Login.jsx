import React, {useContext} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {AuthContext} from "../../context";

const Login = () => {
    const {setIsAuthorised} = useContext(AuthContext)

    const login = (e) => {
      e.preventDefault()
        setIsAuthorised(true)
        localStorage.setItem('isAuth', 'true')
    }
    return (
        <div>
            <form onSubmit={login}>
                <Input placeholder="Login" />
                <Input type="password" placeholder="Password" />
                <Button>Enter</Button>
            </form>
        </div>
    );
};

export default Login;
