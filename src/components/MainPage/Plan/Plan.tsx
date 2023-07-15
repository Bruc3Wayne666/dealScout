import React, {FC, forwardRef, useState} from 'react';
import cls from './Plan.module.scss'
import {capitalize} from "../../../shared/utils";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {useActions} from "../../../hooks/useActions";


interface PlanProps {
    plan: string
    price: number
}

const Plan: FC<PlanProps> = forwardRef(({plan, price}, ref: any) => {
    const [isShowInfo, setIsShowInfo] = useState(false)
    const {t} = useTranslation('main')
    const {setShow} = useActions()

    return (
        <div
            ref={ref}
            onMouseLeave={() => setIsShowInfo(false)}
            className={`${cls.card} ${cls[plan]}`}
        >
            {
                isShowInfo
                    ? <>
                        <div className={`${cls.description}`}>
                       <span
                           onClick={() => setIsShowInfo(false)}
                       >
                           &times;
                       </span>
                            <h3>{t(`${capitalize(plan)} Plan`)}</h3>
                            {t(plan).split('^').map(p => <p>{p}</p>)}
                        </div>
                    </>
                    : <>
                        {/*<div className={cls.card}>*/}
                        <div
                            onClick={() => setIsShowInfo(true)}
                            className={`${cls.plan} ${cls[plan]}`}
                        >
                            <img src={require(`../../../assets/images/svg/plan_${plan}.svg`)} alt={'Plan'}/>
                        </div>
                        <div className={cls.info}>
                            <div className={cls.top}>
                                <h3>{t(`${capitalize(plan)} Plan`)}</h3>
                                <span>${price}</span>
                                {/*<p>{description[0]}</p>*/}
                            </div>
                            <div className={cls.bottom}>
                                <span onClick={() => setIsShowInfo(true)}>{t('info')}</span>
                                <button
                                    // onClick={() => navigate(`plan/${plan}`)}
                                    onClick={() => setShow(plan)}
                                >
                                    {t('Get')}
                                </button>
                            </div>
                        </div>
                        {/*</div>*/}
                    </>
            }
        </div>
    );
})

export default motion(Plan)
