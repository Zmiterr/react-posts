import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../../context";



const AppRouter = () => {
    const {isAuthorised} = useContext(AuthContext)
    return (
        isAuthorised?
        <Switch>
            {privateRoutes.map(route =>
                <Route exact={route.exact} path={route.path} component={route.component} key={route.path}/>
            )}
            <Redirect to={'/Posts'} />
        </Switch>
       :<Switch>
                {publicRoutes.map(route =>
                    <Route exact={route.exact} path={route.path} component={route.component}  key={route.path}/>
                )}
                <Redirect to={'/login'} />
       </Switch>
    );
};

export default AppRouter;
