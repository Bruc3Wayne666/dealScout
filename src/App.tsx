import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import AuthRequire from "./hoc/AuthRequire";
import {useActions} from "./hooks/useActions";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "./components/MainPage/Modal/Modal";

function App() {
    const {setSession, logout} = useActions()

    useEffect(() => {
        if (localStorage.getItem('isLogin')) {
            setSession(localStorage.getItem('user_session') || '')
        } else {
            logout()
        }
    }, [])

    // console.log(process.env.REACT_APP_PAYPAL_CLIENT_ID)

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
            <Modal/>
        </div>
    );
}

export default App;
