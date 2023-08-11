import React, {useEffect, useState} from 'react';
import cls from './Income.module.scss';
import {useActions} from "../../../../../../../hooks/useActions";
import {useAppSelector} from "../../../../../../../hooks/redux";
import {useTranslation} from "react-i18next";

const Income = () => {
    const {getProfitDay} = useActions()
    const {isLoading, profit} = useAppSelector(state => state.dashboardSlice)
    const [active, setActive] = useState('today')
    const {t} = useTranslation('profile')

    useEffect(() => {
        getProfitDay(localStorage.getItem('user_session') || '')
    }, [])

    return (
        <div className={cls.income}>
            <div className={cls.top}>
                <h3>
                    {t('average_income')}
                </h3>
                <button/>
            </div>
            <div className={cls.middle}>
                <div
                    onClick={() => setActive('yesterday')}
                    className={`${cls.day} ${active === 'yesterday' ? cls.active : ''}`}
                >
                    {
                        isLoading
                            ? <span>...</span>
                            : <>
                                <p>{profit.yesterday?.date.split(',')[1].slice(0, 4)}</p>
                                <span>{profit.yesterday?.date.split(',')[0].slice(0, 2)}</span>
                            </>
                    }
                </div>
                <div
                    onClick={() => setActive('today')}
                    className={`${cls.day} ${active === 'today' ? cls.active : ''}`}
                >
                    {
                        isLoading
                            ? <span>...</span>
                            : <>
                                <p>{profit.today?.date.split(',')[1].slice(0, 4)}</p>
                                <span>{profit.today?.date.split(',')[0].slice(0, 2)}</span>
                            </>
                    }
                </div>
                <div
                    onClick={() => setActive('tommorow')}
                    className={`${cls.day} ${active === 'tommorow' ? cls.active : ''}`}
                >
                    {
                        isLoading
                            ? <span>...</span>
                            : <>
                                <p>{profit.tommorow?.date.split(',')[1].slice(0, 4)}</p>
                                <span>{profit.tommorow?.date.split(',')[0].slice(0, 2)}</span>
                            </>
                    }
                </div>
            </div>
            <div className={cls.bottom}>
                <div className={cls.left}>
                    <span>
                        {
                            isLoading
                                ? '---'
                                : active === 'yesterday'
                                    ? profit.yesterday?.profit
                                    : active === 'today'
                                        ? profit.today?.profit
                                        : '---'
                        }%
                    </span>
                </div>
                {
                    active === 'today' &&
                    <div className={cls.right}>
                        <span>
                            {
                                profit.today?.profit < profit.yesterday?.profit
                                    ? `-${(profit.yesterday?.profit - profit.today?.profit).toFixed(2)}`
                                    : `+${(profit.today?.profit - profit.yesterday?.profit).toFixed(2)}`
                            }%
                        </span>
                        <p>{t('since_last_day')}</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Income;
