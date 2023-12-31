import React from 'react';
import cls from './Auth.module.css'
import {Link} from "react-router-dom";

const AuthBtn = () => {
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

export default AuthBtn;
