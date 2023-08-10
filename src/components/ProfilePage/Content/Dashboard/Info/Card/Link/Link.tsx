import React, {useContext} from 'react';
import cls from './Link.module.scss'
import {ThemeContext, ThemeContextType} from "../../../../../../../providers/ThemeProvider";

const Link = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    return (
        <a
            target='_blank'
            href='https://t.me/DealScoutAmazon'
            className={`${cls.link} ${cls[theme]}`}
        />
    );
};

export default Link;
