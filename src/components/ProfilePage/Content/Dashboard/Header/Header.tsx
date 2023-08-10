import React, {useContext, useEffect, useState} from 'react';
import cls from './Header.module.scss';
import {ThemeContext, ThemeContextType} from "../../../../../providers/ThemeProvider";
import {useAppSelector} from "../../../../../hooks/redux";
import {useActions} from "../../../../../hooks/useActions";
import Plans from "./Plans/Plans";
import {useTranslation} from "react-i18next";


const Header = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {isLoading: isLoadingUser, mailing} = useAppSelector(state => state.userSlice)
    const {isLoading: isLoadingPlans, plans} = useAppSelector(state => state.dashboardSlice)
    const {changeMailing, getPlans} = useActions()
    const [showPlans, setShowPlans] = useState(false)
    const {t} = useTranslation('profile')

    useEffect(() => {
        getPlans(localStorage.getItem('user_session') || '')
    }, [])


    return (
        <div className={cls.header}>
            <h1>{t('statistics')}</h1>
            <div className={`${cls.buttons} ${cls[theme]}`}>
                {/*<button>{isLoadingPlans ? '...' : Plans[plans[0]?.plan_id]}</button>*/}
                <button onClick={() => setShowPlans(true)}>{t('active_plans')}</button>
                <button
                    onClick={() => changeMailing({session: localStorage.getItem('user_session') as string})}
                    className={isLoadingUser ? cls.loading : mailing ? cls.on : cls.off}
                />
            </div>

            <Plans
                plans={plans}
                showPlans={showPlans}
                setShowPlans={setShowPlans}
                theme={theme}
            />
        </div>
    );
};

export default Header;
