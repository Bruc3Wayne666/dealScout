import React from 'react';
import cls from './Info.module.scss';
import Card from "./Card/Card";
import ChartContent from "./Card/Chart/Chart";
import Report from "./Card/Report/Report";
import Income from "./Card/Income/Income";
import Deals from "./Card/Deals/Deals";
import Plans from "./Card/Plans/Plans";
import Link from "./Card/Link/Link";

const content = {
    'chart': <ChartContent/>,
    'report': <Report/>,
    'income': <Income/>,
    'deals': <Deals/>,
    'link': <Link/>,
    'plans': <Plans/>
}

const Info = () => {
    return (
        <div className={cls.info}>
            {
                Object.keys(content).map(item => (
                    <Card content={item}>
                        {content[item as keyof typeof content]}
                    </Card>
                ))
            }
        </div>
    );
};

export default Info;
