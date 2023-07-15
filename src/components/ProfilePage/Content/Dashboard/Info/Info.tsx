import React from 'react';
import cls from './Info.module.scss';
import Card from "./Card/Card";
import ChartContent from "./Card/Chart/Chart";
import Report from "./Card/Report/Report";
import Income from "./Card/Income/Income";
import Deals from "./Card/Deals/Deals";

const Info = () => {
    return (
        <div className={cls.info}>
            <Card
                // custom={1}
                // initial={'hidden'}
                // whileInView={'visible'}
                // variants={dashAnimation}
                // viewport={{once: true}}
            >
                <ChartContent/>
            </Card>
            <Card>
                <Report/>
            </Card>
            <Card>
                <Income/>
            </Card>
            <Card>
                <Deals/>
            </Card>
            <Card/>
            <Card/>
        </div>
    );
};

export default Info;
