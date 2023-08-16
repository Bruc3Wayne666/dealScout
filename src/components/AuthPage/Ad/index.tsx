import React from 'react';
import cls from './Ad.module.scss'
import {textAnimation} from "../../../global/animations/mainPage";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const Ad = () => {
    const {t} = useTranslation('main')
    return (
        <div className={cls.ad}>
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
    );
};

export default Ad;
