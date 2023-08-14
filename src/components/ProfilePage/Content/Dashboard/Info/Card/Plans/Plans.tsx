import React, {useContext} from 'react';
import cls from "./Plans.module.scss";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "../../../../../../../hooks/redux";
import {ThemeContext, ThemeContextType} from "../../../../../../../providers/ThemeProvider";


const PlanTitles = [
    '...',
    'Starter',
    'Advanced',
    'Pro'
]

const Plans = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {t} = useTranslation('profile')
    const {isLoading, plans} = useAppSelector(state => state.dashboardSlice)

    return (
        <div className={`${cls.plans} ${cls[theme]}`}>

            <div className={cls.header}>
                <h2>
                    {t('active_plans')}
                </h2>
            </div>

            <div className={cls.info}>
                {
                    plans.length !== 0
                        ? plans.map(plan => (
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
