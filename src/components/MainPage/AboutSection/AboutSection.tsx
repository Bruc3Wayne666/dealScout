import React from 'react';
import cls from './AboutSection.module.scss'
import SectionLine from "./SectionLine";
import {useTranslation} from "react-i18next";
import {aboutAnimation, sectionLineAnimation, textAnimation} from "../../../global/animations/mainPage";
import { motion } from 'framer-motion';

const AboutSection = () => {
    const {t} = useTranslation('main')
    return (
        <section className={cls.section}>
            <SectionLine
                custom={-1}
                initial={'hidden'}
                whileInView={'visible'}
                viewport={{amount: 0.5, once: true}}
                variants={sectionLineAnimation}
                type={'start'}
            />
            <div className={cls.sectionContent}>
                <div className={cls.sectionContentTitle}>
                    <motion.h1
                        custom={1}
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{amount: 0.2, once: true}}
                        variants={textAnimation}
                    >
                        {t('About Us')}
                    </motion.h1>
                </div>
                <motion.div
                    custom={2}
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{amount: 0.1, once: true}}
                    variants={aboutAnimation}
                    className={cls.sectionContentDesc}
                >
                    <p>{t('Welcome to DealScout, your partner in e-commerce success. Our team of expert analysts dive deep')}
                        {t('into extensive product databases from platforms like Amazon, Walmart, and more. Through rigorous')}
                        {t('analysis and advanced algorithms, we identify and provide you with the most profitable deals')}
                        {t('daily.')}
                        <br/>
                        <br/>
                        {t("At DealScout, we're more than a service - we're your strategic ally in maximizing profits and")}
                        {t('staying ahead of the competition. Trust in our insights to guide you to smarter pricing and')}
                        {t('better selling. Choose DealScout, where data drives profit.')} </p>
                </motion.div>
            </div>
            <SectionLine
                custom={1}
                initial={'hidden'}
                whileInView={'visible'}
                viewport={{amount: 0.5, once: true}}
                variants={sectionLineAnimation}
                type={'end'}
            />
        </section>
    );
};

export default AboutSection;
