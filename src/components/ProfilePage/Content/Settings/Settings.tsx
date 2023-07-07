import React, {useContext} from 'react';
import cls from './Settings.module.scss'
import {ThemeContext, ThemeContextType} from "../../../../providers/ThemeProvider";
import {useTranslation} from "react-i18next";
import LangOption from "./Options/LangOption";
import MailingOption from "./Options/MailingOption";
import SupportOption from "./Options/SupportOption";
import {logout} from "../../../../store/reducers/user/userSlice";
import {useNavigate} from "react-router";
import {useAppDispatch} from "../../../../hooks/redux";
import Profile from "./Profile/Profile";

const Settings = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {t, i18n} = useTranslation('profile')
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleLanguage = (val: string) => {
        i18n.changeLanguage(val)
    }

    return (
        <div className={cls.settings}>
            <div className={cls.options}>
                {/*<div className={cls.rotate}>*/}
                <h1>{t('profile')}</h1>
                <Profile theme={theme}/>
                {/*</div>*/}

                <h2>{t('settings')}</h2>
                <LangOption
                    cb={handleLanguage}
                    theme={theme}
                    lang={i18n.language}
                />
                <MailingOption
                    cb={() => {}}
                    theme={theme}
                />

                <h2>{t('support')}</h2>
                <SupportOption theme={theme}/>
            </div>

            <button
                onClick={() => {
                    localStorage.removeItem('isLogin')
                    localStorage.removeItem('user_session')
                    dispatch(logout())
                    navigate('/auth')
                }}>{t('logout')}</button>
        </div>
    );
};

export default Settings;
