import React, {FC} from 'react';
import cls from "./Plans.module.scss";
import {Plan} from "../../../../../../models/Plan";
import {useTranslation} from "react-i18next";


const PlanTitles = [
    '...',
    'Starter',
    'Advanced',
    'Pro'
]

interface PlansProps {
    showPlans: boolean
    setShowPlans: (val: boolean) => void
    theme: string
    plans: Omit<Plan, 'end_time'>[]
}

const Plans: FC<PlansProps> = ({showPlans, setShowPlans, theme, plans}) => {
    const {t} = useTranslation('profile')
    return (
        <div className={`${cls.plans} ${!showPlans ? cls.hidden : ''} ${cls[theme]}`}>

            <div className={cls.header}>
                <h4>
                    {t('active_plans')}
                </h4>
                <span onClick={() => setShowPlans(false)}>
                        &times;
                    </span>
            </div>

            <div className={cls.info}>
                {
                    plans.length !== 0
                        ? plans.map((plan, index) => (
                            <div className={`${cls.plan} ${cls[PlanTitles[plan.plan_id].toLowerCase()]}`}>
                                {index}.
                                <span>
                                    {PlanTitles[plan.plan_id]}
                                </span>
                                {/*until*/}
                            {/*    <span>*/}
                            {/*    {plan.end_time}*/}
                            {/*</span>*/}
                            </div>
                        ))
                        : <p>{t('no_plans')}</p>
                }

            </div>

        </div>
    );
};

export default Plans;
