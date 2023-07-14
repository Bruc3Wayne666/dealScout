import React, {useContext} from 'react';
import cls from './Header.module.scss';
import {ThemeContext, ThemeContextType} from "../../../../../providers/ThemeProvider";

const Header = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    return (
        <div className={cls.header}>
            <h1>Statistics</h1>
            <div className={`${cls.buttons} ${cls[theme]}`}>
                <button>[PLAN]</button>
                <button/>
            </div>
        </div>
    );
};

export default Header;
