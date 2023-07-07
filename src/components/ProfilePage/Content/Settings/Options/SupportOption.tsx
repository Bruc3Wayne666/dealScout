import React, {FC} from 'react';
import cls from './Option.module.scss'
import {useTranslation} from "react-i18next";

interface SupportOptionProps {
    theme: string
}

const SupportOption: FC<SupportOptionProps> = ({theme}) => {
    const {t} = useTranslation('profile')
    return (
        <div className={`${cls.option} ${cls[theme]} ${cls.support}`}>
            <span>
                <a href="mailto:dealscouthelp@gmail.com?subject=SweetWords&body=Please help me">
                    {t('support_option')}
                </a>
            </span>
        </div>
    );
};

export default SupportOption;
