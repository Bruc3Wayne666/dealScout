import React, {FC} from 'react';
import cls from './WelcomeSection.module.scss'
import {useTranslation} from "react-i18next";

interface WelcomeSectionProps {
    // ref: LegacyRef<HTMLDivElement>
    handleScroll: () => void
}

const WelcomeSection: FC<WelcomeSectionProps> = ({handleScroll}) => {
    const {t} = useTranslation('main')
    return (
        <section className={cls.section}>
            <div className={cls.sectionContent}>
                <div className={cls.sectionContentText}>
                    <h1>
                        {t('Welcome to DealScout')}, <br/>
                        {t('your partner in e-commerce success')}.
                    </h1>
                </div>
                <div className={cls.sectionContentBtn}>
                    <button onClick={handleScroll}>
                        <span>{t('Choose Plan')}</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
