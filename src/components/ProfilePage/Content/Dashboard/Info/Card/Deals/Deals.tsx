import React from 'react';
import cls from './Deals.module.scss';
import {useActions} from "../../../../../../../hooks/useActions";
import {useTranslation} from "react-i18next";

const Deals = () => {
    const {setCurrent} = useActions()
    const {t} = useTranslation('profile')

    return (
        <div className={cls.deals}>
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
