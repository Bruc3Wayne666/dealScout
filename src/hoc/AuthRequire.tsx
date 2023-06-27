import React, {FC} from 'react';
import {useLocation, Navigate} from "react-router";
import {useAppSelector} from "../hooks/redux";

const AuthRequire: FC<any> = ({children}) => {
    const location = useLocation()
    const { user_session } = useAppSelector(state => state.userSlice)


    if (!user_session) {
        return <Navigate to='/auth' state={{from: location}}/>
    }

    return children
};

export default AuthRequire;
