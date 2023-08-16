import React, {FC, LegacyRef} from 'react';
import cls from './PlansSection.module.scss'
import {planAnimation, planBottomAnimation} from "../../../../../global/animations/mainPage";
import { motion } from 'framer-motion';
import {plans} from "../../../../../global/temp/plans";
import Plan from "../../../../MainPage/Plan/Plan";


interface PlansSectionProps {
    // ref: LegacyRef<HTMLDivElement>
    sectionRef?: LegacyRef<HTMLDivElement>
}

const PlansSection: FC<PlansSectionProps> = ({sectionRef}) => {
    return (
        <section ref={sectionRef} className={cls.section}>
            <div className={cls.plans}>
                {
                    plans.map(({plan, price}, index) => <Plan
                        custom={++index}
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{amount: 0.3, once: true}}
                        variants={planAnimation}
                        plan={plan}
                        price={price}
                    />)
                }
            </div>
        </section>
    );
};

export default PlansSection;
