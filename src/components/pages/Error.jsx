import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div>
           <h2>404</h2>
           <Link to={'/'}>Go home</Link>

        </div>

    );
};

export default Error;
