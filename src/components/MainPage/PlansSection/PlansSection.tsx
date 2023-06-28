import React from 'react';
import cls from './PlansSection.module.css'
import {PlanStart, PlanAdvanced, PlanPRO} from "../Plan/Plan";

const PlansSection = () => {
    return (
        <section className={cls.section}>
            <div className={cls.sectionHeader}>
                <h2>Available Plans</h2>
            </div>
            <div className={cls.plans}>
                <PlanStart/>
                <PlanAdvanced/>
                <PlanPRO/>
            </div>
            <div className={cls.sectionBottom}>
                <img src={require('../../../assets/images/svg/wave.svg').default} alt="..."/>
            </div>
        </section>
    );
};

export default PlansSection;
