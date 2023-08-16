import React, {useEffect, useState} from 'react';
import cls from './Header.module.scss'
import {AuthBtn, ProfileBtn} from "../AuthBtn/AuthBtn";
import {useAppSelector} from "../../../hooks/redux";
import {useActions} from "../../../hooks/useActions";

const Header = () => {
    const {user_session} = useAppSelector(state => state.authSlice)
    // const {checkedSession} = useAppSelector(state => state.userSlice)
    const {logout, checkSession} = useActions()
    // const [isLoading, setIsLoading] = useState(false)

    const handleLogout = () => {
        logout()
    }


    useEffect(() => {
        // setIsLoading(true)
        if (localStorage.getItem('user_session')) checkSession(localStorage.getItem('user_session') as string)
        // setIsLoading(false)
    }, [])

    return (
        <header className={cls.header}>
            <div className={cls.headerSection}>
                <img src={require('../../../assets/images/logo/logo_light.png')} alt="DealScout"/>
            </div>
            <div className={cls.headerSection}>
                <AuthBtn
                    isLogged={Boolean(user_session)}
                    handleLogout={handleLogout}
                />
                {
                    localStorage.getItem('user_session')
                    && <ProfileBtn/>
                }
            </div>
        </header>
    );
};

export default Header;
