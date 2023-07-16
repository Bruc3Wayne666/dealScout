import React, {FC, LegacyRef} from 'react';
import cls from './PlansSection.module.scss'
import Plan from "../Plan/Plan";
import {useTranslation} from "react-i18next";
import {planAnimation, planBottomAnimation, textAnimation} from "../../../global/animations/mainPage";
import { motion } from 'framer-motion';
import {plans} from "../../../global/temp/plans";


interface PlansSectionProps {
    // ref: LegacyRef<HTMLDivElement>
    sectionRef: LegacyRef<HTMLDivElement>
}

const PlansSection: FC<PlansSectionProps> = ({sectionRef}) => {
    const {t} = useTranslation('main')

    return (
        <section ref={sectionRef} className={cls.section}>
            <div className={cls.sectionHeader}>
                <motion.h2
                    custom={1}
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{amount: 0.2, once: true}}
                    variants={textAnimation}
                >
                    {t('Available Plans')}
                </motion.h2>
            </div>
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
            <motion.div
                custom={4}
                initial={'hidden'}
                whileInView={'visible'}
                viewport={{amount: 0.2, once: true}}
                variants={planBottomAnimation}
                className={cls.sectionBottom}
            >
                <img src={require('../../../assets/images/svg/wave.svg').default} alt="..."/>
            </motion.div>
        </section>
    );
};

export default PlansSection;
