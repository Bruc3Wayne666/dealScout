import React, {FC} from 'react';
import cls from './WelcomeSection.module.scss'
import {useTranslation} from "react-i18next";
import {motion} from 'framer-motion'
import {textAnimation} from "../../../global/animations/mainPage";


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
                    <motion.h1
                        custom={1}
                        variants={textAnimation}
                        initial={'hidden'}
                        viewport={{once: true}}
                        whileInView={'visible'}
                    >
                        {t('Welcome to DealScout')}, <br/>
                        {t('your partner in e-commerce success')}.
                    </motion.h1>
                </div>
                <div className={cls.sectionContentBtn}>
                    <motion.button
                        custom={2}
                        variants={textAnimation}
                        initial={'hidden'}
                        viewport={{once: true}}
                        whileInView={'visible'}
                        onClick={handleScroll}
                    >
                        <span>{t('Choose Plan')}</span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
