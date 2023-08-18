import React, {FC} from 'react';
import cls from "./Option.module.scss";
import {useTranslation} from "react-i18next";

interface ReferalProps {
    theme: string
    code: string
}

const Referral: FC<ReferalProps> = ({theme, code}) => {
    const {t} = useTranslation('profile')

    return (
        <div
            onClick={() => {
                navigator.clipboard.writeText(`https://dealscout.site/auth?ref=${code}`)
                alert(`${t('copied')}`)
            }}
            className={`${cls.option} ${cls[theme]} ${cls.support}`}>
            {`https://dealscout.site/auth?ref=${code}`}
            <button className={cls.copy}><span>{t('copy')}</span></button>
        </div>
    );
};

export default Referral;
