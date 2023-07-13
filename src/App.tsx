import React, {useContext, useEffect} from 'react';
import {Route, Routes} from "react-router";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import AuthRequire from "./hoc/AuthRequire";
import {useActions} from "./hooks/useActions";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cls from './App.module.scss'
import {ThemeContext, ThemeContextType} from "./providers/ThemeProvider";
import PaypalCheckoutButton from "./components/PaypalCheckoutButton/PaypalCheckoutButton";
import Plan from "./pages/Plan/Plan";

function App() {
    const {setSession} = useActions()
    const {theme} = useContext(ThemeContext) as ThemeContextType

    useEffect(() => {
        if (localStorage.getItem('isLogin')) {
            setSession(localStorage.getItem('user_session') || '')
        }
    }, [])

    useEffect(() => {
        toast('Welcome', {
            className: `${cls.toast} ${cls[theme]}`
        })
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
                <Route path={'/plan/:id'} element={
                    <AuthRequire>
                        <Plan/>
                    </AuthRequire>
                }/>
                {/*<Route path={'/test'} element={<PaypalCheckoutButton/>}/>*/}
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;
