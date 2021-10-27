import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {setIsAuthorised} = useContext(AuthContext)
    return (
        <div className="navbar">
            <Button onClick={()=>{setIsAuthorised(false)}} >Выйти</Button>
            <div className="navbar__links">
                <Link className="navbar__link" to={'/'}>Posts</Link>
                <Link className="navbar__link" to={'/about'}>About</Link>
            </div>
        </div>
    );
};

export default Navbar;
