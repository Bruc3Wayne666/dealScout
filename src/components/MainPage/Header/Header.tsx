import React from 'react';
import cls from './Header.module.scss'
import {AuthBtn, ProfileBtn} from "../AuthBtn/AuthBtn";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {logout} from "../../../store/reducers/user/userSlice";

const Header = () => {
    const dispatch = useAppDispatch()
    const {user_session} = useAppSelector(state => state.userSlice)

    const handleLogout = () => {
        dispatch(logout())
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
