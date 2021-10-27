import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link className="navbar__link" to={'/'}>Posts</Link>
                <Link className="navbar__link" to={'/about'}>About</Link>
            </div>
        </div>
    );
};

export default Navbar;
