import React from 'react';
import cls from './Header.module.scss'
import {AuthBtn, ProfileBtn} from "../AuthBtn/AuthBtn";

const Header = () => {
    return (
        <header className={cls.header}>
            <div className={cls.headerSection}>
                <img src={require('../../../assets/images/logo/logo_light.png')} alt="DealScout"/>
            </div>
            <div className={cls.headerSection}>
                <AuthBtn/>
                <ProfileBtn/>
            </div>
        </header>
    );
};

export default Header;
