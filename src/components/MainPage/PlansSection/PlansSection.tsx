import React, {FC, LegacyRef} from 'react';
import cls from './PlansSection.module.scss'
import Plan from "../Plan/Plan";
import {useTranslation} from "react-i18next";


interface PlansSectionProps {
    // ref: LegacyRef<HTMLDivElement>
    ref: LegacyRef<HTMLDivElement>
}

const PlansSection: FC<PlansSectionProps> = ({ref}) => {
    const {t} = useTranslation('main')

    return (
        <section ref={ref} className={cls.section}>
            <div className={cls.sectionHeader}>
                <h2>{t('Available Plans')}</h2>
            </div>
            <div className={cls.plans}>
                <Plan plan={'start'} price={24.99}/>
                <Plan plan={'advanced'} price={34.99}/>
                <Plan plan={'pro'} price={49.99}/>
            </div>
            <div className={cls.sectionBottom}>
                <img src={require('../../../assets/images/svg/wave.svg').default} alt="..."/>
            </div>
        </section>
    );
};

export default PlansSection;
