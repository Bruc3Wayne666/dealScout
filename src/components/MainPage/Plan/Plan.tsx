import React, {FC, useState} from 'react';
import cls from './Plan.module.scss'
import {capitalize} from "../../../shared/utils";


interface PlanProps {
    plan: string
    price: number
    description?: string
}

const Plan: FC<PlanProps> = ({plan, price}) => {
    const [isShowInfo, setIsShowInfo] = useState(false)

    return (
        // <div className={cls.card} onMouseEnter={() => setIsShowInfo(true)} onMouseLeave={() => setIsShowInfo(false)}>
        <div
            onMouseLeave={() => setIsShowInfo(false)}
            className={`${cls.card} ${cls[plan]}`}
        >
            {
                isShowInfo
                    ? <>
                    <div className={`${cls.description}`}>
                       <span
                           onClick={() => setIsShowInfo(false)}
                       >&times;</span>
                        <h3>{capitalize(plan)} plan</h3>
                        <ul>
                            <li>999 users</li>
                            <li>999 deals</li>
                            <li>discounts</li>
                            <li>top</li>
                        </ul>
                    </div>
                    </>
                    : <>
                        {/*<div className={cls.card}>*/}
                            <div
                                onClick={() => setIsShowInfo(true)}
                                className={`${cls.plan} ${cls[plan]}`}
                            >
                                <img src={require(`../../../assets/images/svg/plan_${plan}.svg`)} alt={'Start'}/>
                            </div>
                            <div className={cls.info}>
                                <div className={cls.top}>
                                    <h3>{capitalize(plan)} Plan</h3>
                                    <span>${price}</span>
                                </div>
                                <div className={cls.bottom}>
                                    <span onClick={() => setIsShowInfo(true)}>More information</span>
                                    <button>
                                        Get
                                    </button>
                                </div>
                            </div>
                        {/*</div>*/}
                    </>
            }
        </div>
    );
};

export default Plan
