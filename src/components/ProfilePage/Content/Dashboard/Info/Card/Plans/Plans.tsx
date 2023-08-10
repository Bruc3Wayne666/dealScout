import React, {FC, useEffect, useState} from 'react';
import cls from "./Plans.module.scss";
import {useTranslation} from "react-i18next";
import {Plan} from "../../../../../../../models/Plan";
import {useAppSelector} from "../../../../../../../hooks/redux";
import {useActions} from "../../../../../../../hooks/useActions";


const PlanTitles = [
    '...',
    'Starter',
    'Advanced',
    'Pro'
]

const Plans = () => {
    const {t} = useTranslation('profile')
    const {isLoading, plans} = useAppSelector(state => state.dashboardSlice)

    return (
        <div className={cls.plans}>

            <div className={cls.header}>
                <h2>
                    {t('active_plans')}
                </h2>
            </div>

            <div className={cls.info}>
                {
                    plans.length !== 0
                        ? plans.concat(plans).concat(plans).concat(plans).concat(plans).map(plan => (
                            <div className={`${cls.plan} ${cls[PlanTitles[plan.plan_id].toLowerCase()]}`}>
                                <span>
                                {PlanTitles[plan.plan_id]}
                            </span>
                                until
                                <span>
                                {plan.end_time}
                            </span>
                            </div>
                        ))
                        : <p>No plans</p>
                }

            </div>
        </div>
    );
};

export default Plans;
