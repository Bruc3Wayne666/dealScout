import React from 'react';
import cls from './Info.module.scss';
import Card from "./Card/Card";
import ChartContent from "./Card/Chart/Chart";
import Report from "./Card/Report/Report";
import {dashAnimation} from "../../../../../global/animations/profilePage";

const Info = () => {
    return (
        <div className={cls.info}>
            <Card
                custom={1}
                initial={'hidden'}
                whileInView={'visible'}
                variants={dashAnimation}
                viewport={{once: true}}
            >
                <ChartContent/>
            </Card>
            <Card
                custom={2}
                initial={'hidden'}
                whileInView={'visible'}
                variants={dashAnimation}
                viewport={{once: true}}
            >
                <Report/>
            </Card>
            <Card
                custom={3}
                initial={'hidden'}
                whileInView={'visible'}
                variants={dashAnimation}
                viewport={{once: true}}
            />
            <Card
                custom={4}
                initial={'hidden'}
                whileInView={'visible'}
                variants={dashAnimation}
                viewport={{once: true}}
            />
            <Card
                custom={5}
                initial={'hidden'}
                whileInView={'visible'}
                variants={dashAnimation}
                viewport={{once: true}}
            />
            <Card
                custom={6}
                initial={'hidden'}
                whileInView={'visible'}
                variants={dashAnimation}
                viewport={{once: true}}
            />
        </div>
    );
};

export default Info;
