import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import AuthRequire from "./hoc/AuthRequire";
import {useActions} from "./hooks/useActions";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const {setSession, logout} = useActions()

    useEffect(() => {
        if (localStorage.getItem('isLogin')) {
            setSession(localStorage.getItem('user_session') || '')
        } else {
            logout()
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
                <Route path={'*'} element={<Navigate to={'/'}/>}/>\
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;
