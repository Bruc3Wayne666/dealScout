import React from 'react';
import cls from './Purchase.module.scss'
import PlansSection from "./PlansSection/PlansSection";
import {useTranslation} from "react-i18next";

const Purchase = () => {
    const {t} = useTranslation('main')

    return (
        <div className={cls.purchase}>
            <h2>{t('Available Plans')}</h2>
            <PlansSection/>
        </div>
    );
};

export default Purchase;
