import React, {useContext} from 'react';
import {AuthContext} from "../AuthContext";
import {Route, Switch, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../pages/routes";

const AppRouter = () => {
    const {user} = useContext(AuthContext)
    return (
        user ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/'/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />

                )}
                <Redirect to='/login'/>
            </Switch>

    );
};

export default AppRouter;