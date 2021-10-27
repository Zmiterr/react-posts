import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../../context";
import Loader from "react-loader-spinner";

const AppRouter = () => {
    const {isAuthorised, isLoading} = useContext(AuthContext)

    if (isLoading){
        return <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
    }

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
