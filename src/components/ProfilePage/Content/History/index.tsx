import React, {useContext, useEffect} from 'react';
import cls from './History.module.scss'
import {ThemeContext, ThemeContextType} from "../../../../providers/ThemeProvider";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "../../../../hooks/redux";
import {useActions} from "../../../../hooks/useActions";
import Deal from "./Deal";
import CardSkeleton from "./Skeleton";
import Empty from "../Empty";


const PlanTitles = [
    '...',
    'Starter',
    'Advanced',
    'Pro'
]

const History = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {isLoading, history} = useAppSelector(state => state.dealSlice)
    const {getHistory} = useActions()
    const {t} = useTranslation('profile')

    useEffect(() => {
        getHistory(localStorage.getItem('user_session') || '')
    }, [])

    return (
        <div className={`${cls.history} ${cls[theme]}`}>
            <div className={cls.header}>
                <h1>{t('Activity History')}</h1>
            </div>

            {
                !isLoading && history.length === 0 && <Empty/>
            }

            {
                <div className={cls.deals}>
                    {
                        isLoading
                        ? Array(7).fill(0).map((_, index) => <CardSkeleton
                                theme={theme}
                                key={index}
                            />)
                        : history.map((deal, index) => <Deal
                            theme={theme}
                            deal={{...deal, title: PlanTitles[deal.plan_id]}}
                            index={index}
                            key={index}
                        />)
                    }
                </div>
            }
        </div>
    );
};

export default History;
