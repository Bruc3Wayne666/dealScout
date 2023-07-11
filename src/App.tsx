import React, {useContext, useEffect} from 'react';
import {Route, Routes} from "react-router";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import AuthRequire from "./hoc/AuthRequire";
import PaypalCheckoutButton from "./components/PaypalCheckoutButton/PaypalCheckoutButton";
import {useActions} from "./hooks/useActions";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useAppSelector} from "./hooks/redux";
import cls from './App.module.scss'
import {ThemeContext, ThemeContextType} from "./providers/ThemeProvider";

function App() {
    const {setUser} = useActions()
    const {message} = useAppSelector(state => state.userSlice)
    const {theme} = useContext(ThemeContext) as ThemeContextType

    useEffect(() => {
        if (localStorage.getItem('isLogin')) {
            setUser(localStorage.getItem('user_session') || '')
        }
    }, [])

    useEffect(() => {
        if (message) toast(message, {
            className: `${cls.toast} ${cls[theme]}`
        })
    }, [message])

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
                {/*<Route path={'/test'} element={<PaypalCheckoutButton/>}/>*/}
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;
