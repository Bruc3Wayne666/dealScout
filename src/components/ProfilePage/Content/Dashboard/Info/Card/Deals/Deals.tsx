import React, {useContext} from 'react';
import cls from './Deals.module.scss';
import {useActions} from "../../../../../../../hooks/useActions";
import {useTranslation} from "react-i18next";
import {ThemeContext, ThemeContextType} from "../../../../../../../providers/ThemeProvider";

const Deals = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {setCurrent} = useActions()
    const {t} = useTranslation('profile')

    return (
        <div className={`${cls.deals} ${cls[theme]}`}>
            <div className={cls.top}>
                <h3>{t('today_deals')}</h3>
            </div>
            <div className={cls.bottom}>
                <button onClick={() => setCurrent('My Deals')}>{t('watch')}</button>
            </div>
        </div>
    );
};

export default Deals;
