import React from 'react';
import cls from './Header.module.scss'
import {AuthBtn, ProfileBtn} from "../AuthBtn/AuthBtn";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {useActions} from "../../../hooks/useActions";

const Header = () => {
    const {user_session} = useAppSelector(state => state.userSlice)
    const {logout} = useActions()

    const handleLogout = () => {
        logout()
        localStorage.removeItem('user_session')
    }

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
                <ProfileBtn/>
            </div>
        </header>
    );
};

export default Header;
