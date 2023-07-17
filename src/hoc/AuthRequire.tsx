import React, {FC, useEffect} from 'react';
import {useLocation, Navigate} from "react-router";

const AuthRequire: FC<any> = ({children}) => {
    const location = useLocation()

    if (!localStorage.getItem('user_session')) {
        return <Navigate to='/auth' state={{from: location}}/>
    }

    return children
};

export default AuthRequire;
