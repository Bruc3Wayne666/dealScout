import React, {useContext, useEffect, useState} from 'react';
import cls from "./Filter.module.scss";
import {ThemeContext, ThemeContextType} from "../../../../../providers/ThemeProvider";
import {useAppSelector} from "../../../../../hooks/redux";
import {useActions} from "../../../../../hooks/useActions";
import {Time} from "../../../../../api/deal";
import {useTranslation} from "react-i18next";


const Filter = () => {
    const {amounts} = useAppSelector(state => state.dealSlice)
    const {view, actual, sort} = useAppSelector(state => state.filterSlice)
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {setView, setActual, setPlan, getAmount} = useActions()
    const [searchShow, setSearchShow] = useState('')
    const {t} = useTranslation('profile')

    useEffect(() => {
        getAmount({session: localStorage.getItem('user_session') || '', plan_id: sort.plan})
    }, [])

    // const func = useCallback(debounce(async (val: string) => {
    //     setSearch(val)
    // }, 800), [])
    //
    // const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    //     setSearchShow(e.target.value)
    //     func(e.target.value)
    // }

    return (
        <div className={`${cls.options} ${cls[theme]}`}>
            <div className={cls.view}>
                <button
                    onClick={() => setView()}>
                    <img
                        src={require(`../../../../../assets/images/svg/${theme}/${view === 'flex' ? 'grid' : 'row'}.svg`)}
                        alt="View"
                    />
                </button>
            </div>

            <div className={cls.actual}>
                <div
                    onClick={() => setActual(Time.TODAY)}
                    className={`${cls.option} ${actual === 'today' ? cls.active : ''}`}
                >
                    <p>{t('today')} <span>{amounts.today}</span></p>
                </div>
                <div
                    onClick={() => setActual(Time.WEEK)}
                    className={`${cls.option} ${actual === 'week' ? cls.active : ''}`}
                >
                    <p>{t('week')} <span>{amounts.week}</span></p>
                </div>
                <div
                    onClick={() => setActual(Time.MONTH)}
                    className={`${cls.option} ${actual === 'month' ? cls.active : ''}`}
                >
                    <p>{t('month')} <span>{amounts.month}</span></p>
                </div>
                <div
                    onClick={() => setActual(Time.ALL)}
                    className={`${cls.option} ${actual === 'all' ? cls.active : ''}`}
                >
                    <p>{t('all')} <span>{amounts.all}</span></p>
                </div>
            </div>
            {/*<div className={cls.search}>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        placeholder='Search'*/}
            {/*        onChange={handleSearch}*/}
            {/*        value={searchShow}*/}
            {/*    />*/}
            {/*</div>*/}
            <div className={cls.sort}>
                <select
                    onChange={e => setPlan(e.target.value)}
                >
                    <option value={0}>
                        {t('all')}
                    </option>
                    <option value={1}>
                        Starter
                    </option>
                    <option value={2}>
                        Advanced
                    </option>
                    <option value={3}>
                        PRO
                    </option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
