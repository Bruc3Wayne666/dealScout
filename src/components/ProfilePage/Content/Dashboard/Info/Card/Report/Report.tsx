import React, {useContext} from 'react';
import cls from './Report.module.scss';
import {ThemeContext, ThemeContextType} from "../../../../../../../providers/ThemeProvider";
import {useActions} from "../../../../../../../hooks/useActions";
import {useTranslation} from "react-i18next";

const Report = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {downloadDeals} = useActions()
    const {t} = useTranslation('profile')

    return (
        <div className={`${cls.report} ${cls[theme]}`}>
            <div className={cls.top}>
                <h3>{t('all_deals')}</h3>
                {/*<span>/ report</span>*/}
            </div>
            <div className={`${cls.bottom} ${cls[theme]}`}>
                <button
                    onClick={() => downloadDeals(localStorage.getItem('user_session') || '')}
                >{t('download')}</button>
                <div className={`${cls.icon} ${cls[theme]}`}/>
            </div>
        </div>
    );
};

export default Report;
