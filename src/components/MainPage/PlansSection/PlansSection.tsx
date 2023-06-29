import React, {FC, LegacyRef} from 'react';
import cls from './PlansSection.module.scss'
import Plan from "../Plan/Plan";


interface PlansSectionProps {
    // ref: LegacyRef<HTMLDivElement>
    ref: LegacyRef<HTMLDivElement>
}

const PlansSection: FC<PlansSectionProps> = ({ref}) => {
    return (
        <section ref={ref} className={cls.section}>
            <div className={cls.sectionHeader}>
                <h2>Available Plans</h2>
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
