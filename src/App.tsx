import React, {useEffect, Suspense} from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import AuthRequire from "./hoc/AuthRequire";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {setUser} from "./store/reducers/user/userSlice";

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem('isLogin')) {
            dispatch(setUser(localStorage.getItem('user_session') || ''))
        }
    }, [])

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/auth'} element={<Auth/>}/>
                <Route path={'/profile'} element={
                    <AuthRequire>
                        <Profile/>
                    </AuthRequire>
                }/>
            </Routes>
        </div>
    );
}

export default App;
