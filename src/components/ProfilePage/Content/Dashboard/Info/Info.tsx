import React from 'react';
import cls from './Info.module.scss';
import Card from "./Card/Card";
import ChartContent from "./Card/Chart/Chart";
import Report from "./Card/Report/Report";

const Info = () => {
    return (
        <div className={cls.info}>
            <Card>
                <ChartContent/>
            </Card>
            <Card>
                <Report/>
            </Card>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
};

export default Info;
