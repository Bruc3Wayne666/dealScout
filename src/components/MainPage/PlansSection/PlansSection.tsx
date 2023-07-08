import React, {FC, LegacyRef} from 'react';
import cls from './PlansSection.module.scss'
import Plan from "../Plan/Plan";
import {useTranslation} from "react-i18next";
import {planAnimation, planBottomAnimation, textAnimation} from "../../../global/animations/mainPage";
import { motion } from 'framer-motion';


const plans = [
    {plan: 'start', price: 24.99,
        // description: ['For $24.99, gain access to 5 daily profitable deals and start boosting your sales.', 'Designed for first-time sellers or those who want to try the service.^For $24.99, you get access to 5 profitable trades a day to help you start increasing your profits.']
    },
    {plan: 'advanced', price: 34.99,
        // description: ['$34.99 for 7 unique daily deals. Fewer people per group for more personalized service.', 'Perfect for sellers who want to accelerate their growth.^For $34.99 you get access to 7 profitable deals per day and a guarantee of fewer people in your group, allowing you to get a more personalized service.']
    },
    {plan: 'pro', price: 49.99,
        // description: ['At $49.99, enjoy 10 exclusive deals daily and the most individualized experience.', 'This plan is for serious sellers looking to maximize profits.^For $49.99, you get access to 10 exclusive deals per day and a guarantee of the least number of people in your group, providing the most personalized experience.']
    },
]

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
