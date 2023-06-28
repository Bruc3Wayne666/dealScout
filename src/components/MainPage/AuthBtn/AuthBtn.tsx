import React from 'react';
import cls from './Auth.module.scss'
import {Link} from "react-router-dom";

export const AuthBtn = () => {
    return (
        <Link to={'/auth'} className={cls.authBtn}>
            <div className={cls.authBtnSection}>
                <img src={require('../../../assets/images/svg/google.svg').default} alt="Sign In"/>
            </div>
            <div className={cls.authBtnSection}>
                <span>Sign In</span>
            </div>
        </Link>
    );
};


export const ProfileBtn = () => {
    return (
        <Link to={'/profile'} className={cls.authBtn}>
            <div className={cls.authBtnSection}>
                {/*<img src={require('../../../assets/images/svg/google.svg').default} alt="Sign In"/>*/}
            </div>
            <div className={cls.authBtnSection}>
                <span>Profile</span>
            </div>
        </Link>
    );
};

