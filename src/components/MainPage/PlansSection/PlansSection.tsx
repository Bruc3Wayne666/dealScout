import React, {FC, LegacyRef} from 'react';
import cls from './PlansSection.module.scss'
import Plan from "../Plan/Plan";
import {useTranslation} from "react-i18next";
import {planAnimation, planBottomAnimation, textAnimation} from "../../../global/animations/mainPage";
import { motion } from 'framer-motion';


interface PlansSectionProps {
    // ref: LegacyRef<HTMLDivElement>
    ref: LegacyRef<HTMLDivElement>
}

const PlansSection: FC<PlansSectionProps> = ({ref}) => {
    const {t} = useTranslation('main')

    return (
        <section ref={ref} className={cls.section}>
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
                <Plan
                    custom={1}
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{amount: 0.3, once: true}}
                    variants={planAnimation}
                    plan={'start'}
                    price={24.99}
                />
                <Plan
                    custom={2}
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{amount: 0.3, once: true}}
                    variants={planAnimation}
                    plan={'advanced'}
                    price={34.99}
                />
                <Plan
                    custom={3}
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{amount: 0.3, once: true}}
                    variants={planAnimation}
                    plan={'pro'}
                    price={49.99}
                />
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
