import React, {useContext, useEffect} from 'react';
import cls from './Header.module.scss';
import {ThemeContext, ThemeContextType} from "../../../../../providers/ThemeProvider";
import {useAppSelector} from "../../../../../hooks/redux";
import {useActions} from "../../../../../hooks/useActions";

const Plans = [
    '...',
    'Starter',
    'Advanced',
    'Pro'
]

const Header = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {isLoading: isLoadingUser, mailing} = useAppSelector(state => state.userSlice)
    const {isLoading: isLoadingPlans, plans} = useAppSelector(state => state.dashboardSlice)
    const {changeMailing, getPlans} = useActions()

    useEffect(() => {
        getPlans(localStorage.getItem('user_session') || '')
    }, [])

    return (
        <div className={cls.header}>
            <h1>Statistics</h1>
            <div className={`${cls.buttons} ${cls[theme]}`}>
                <button>{isLoadingPlans ? '...' : Plans[plans[0]?.plan_id]}</button>
                <button
                    onClick={() => changeMailing({session: localStorage.getItem('user_session') as string})}
                    className={isLoadingUser ? cls.loading : mailing ? cls.on : cls.off}
                />
            </div>
        </div>
    );
};

export default Header;
