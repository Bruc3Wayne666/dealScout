import React, {FC} from 'react';
import cls from './PlanInfo.module.scss';
import {plans} from '../../../global/temp/plans'


const PlanInfo: FC<any> = ({plan}) => {

    return (
        <div className={cls.info}>
            <h1>Plan {plan}</h1>
            <p>
                {plans[0].description[0]}
            </p>
            <br/>
            <p>
                {plans[0].description[1].split('^')[0]}
                &nbsp;
                {plans[0].description[1].split('^')[1]}
            </p>
            <div className={cls.price}>
                <h2>${plans[0].price}</h2>
            </div>
        </div>
    );
};

export default PlanInfo;
