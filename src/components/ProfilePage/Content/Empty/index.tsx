import React from 'react';
import cls from './Empty.module.scss'
import {useTranslation} from "react-i18next";

const Empty = () => {
    const {t} = useTranslation('profile')
    return (
        <div className={cls.empty}>
            <h2>{t('there_are_no_any_deals')}</h2>
        </div>
    );
};

export default Empty;
