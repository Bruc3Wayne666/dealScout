import React, {useContext} from 'react';
import cls from './Header.module.scss';
import {ThemeContext, ThemeContextType} from "../../../../../providers/ThemeProvider";
import {useAppSelector} from "../../../../../hooks/redux";
import {useActions} from "../../../../../hooks/useActions";

const Header = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {isLoading, mailing} = useAppSelector(state => state.userSlice)
    const {changeMailing} = useActions()

    return (
        <div className={cls.header}>
            <h1>Statistics</h1>
            <div className={`${cls.buttons} ${cls[theme]}`}>
                <button>[PLAN]</button>
                <button
                    onClick={() => changeMailing({session: localStorage.getItem('user_session') as string})}
                    className={isLoading ? cls.loading : mailing ? cls.on : cls.off}
                />
            </div>
        </div>
    );
};

export default Header;
