import React, {FC} from 'react';
import cls from './Auth.module.scss'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";


interface AuthBtnProps {
    isLogged: boolean
    handleLogout: () => void
}

export const AuthBtn: FC<AuthBtnProps> = ({isLogged, handleLogout}) => {
    const {t} = useTranslation('main')
    return (
        <Link
            to={isLogged ? '' : '/auth'}
            className={cls.authBtn}
            onClick={() => {
                if (isLogged) return handleLogout()
            }}
        >
            {/*<div className={cls.authBtnSection}>*/}
            {/*    <img src={require('../../../assets/images/svg/google.svg').default} alt="Sign In"/>*/}
            {/*</div>*/}
            <div className={cls.authBtnSection}>
                <span>{isLogged ? 'Log Out' : t('Sign In')}</span>
            </div>
        </Link>
    );
};


export const ProfileBtn = () => {
    const {t} = useTranslation('main')
    return (
        <Link to={'/profile'} className={cls.authBtn}>
            <div className={cls.authBtnSection}>
                {/*<img src={require('../../../assets/images/svg/google.svg').default} alt="Sign In"/>*/}
            </div>
            <div className={cls.authBtnSection}>
                <span>{t('Profile')}</span>
            </div>
        </Link>
    );
};

