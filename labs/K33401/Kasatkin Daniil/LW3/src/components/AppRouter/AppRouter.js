import React, {useContext} from 'react';
import {privateRoutes, publicRoutes} from "../../router/Routes";
import {Route, Routes} from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const AppRouter = () => {
    const {user} = useContext(AuthContext)
    return (
        user ?
            <Routes>
                {privateRoutes.map(({path, element}) =>
                    <Route path={path} element={element} key={path}/>
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(({path, element}) =>
                    <Route path={path} element={element} key={path}/>
                )}
            </Routes>
    )

};

export default AppRouter;
