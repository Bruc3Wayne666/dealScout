import React, {ChangeEvent, FormEvent, useCallback, useContext, useEffect, useState} from 'react';
import cls from "./Filter.module.scss";
import {ThemeContext, ThemeContextType} from "../../../../../providers/ThemeProvider";
import {useAppSelector} from "../../../../../hooks/redux";
import {capitalize} from "../../../../../shared/utils";
import {Time} from "../../../../../api/deal";
import {useActions} from "../../../../../hooks/useActions";
import {debounce} from "lodash";


const Filter = () => {
    const {deals, amounts} = useAppSelector(state => state.dealSlice)
    const {view, actual, search, sort} = useAppSelector(state => state.filterSlice)
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {setView, setActual, setSearch, setTime, setPlan, getAmount} = useActions()
    const [searchShow, setSearchShow] = useState('')

    useEffect(() => {
        getAmount({session: localStorage.getItem('user_session') || '', plan_id: sort.plan})
    }, [])

    const func = useCallback(debounce(async (val: string) => {
        setSearch(val)
    }, 800), [])

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchShow(e.target.value)
        func(e.target.value)
    }

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
                    onClick={() => setActual()}
                    className={`${cls.option} ${actual === 'today' ? cls.active : ''}`}
                >
                    <p>Today <span>{amounts.today}</span></p>
                </div>
                <div
                    onClick={() => setActual()}
                    className={`${cls.option} ${actual === 'all' ? cls.active : ''}`}
                >
                    <p>All <span>{amounts.all}</span></p>
                </div>
            </div>
            <div className={cls.search}>
                <input
                    type="text"
                    placeholder='Search'
                    onChange={handleSearch}
                    value={searchShow}
                />
            </div>
            <div className={cls.sort}>
                <select
                    onChange={e => setTime(e.target.value as Time)}
                >
                    <option
                        value={Time.ALL}
                    >
                        All time
                    </option>
                    <option
                        value={Time.TODAY}
                    >
                        {capitalize(Time.TODAY)}
                    </option>
                    <option
                        value={Time.WEEK}
                    >
                        {capitalize(Time.WEEK)}
                    </option>
                    <option
                        value={Time.MONTH}
                    >
                        {capitalize(Time.MONTH)}
                    </option>
                </select>
                <select
                    onChange={e => setPlan(e.target.value)}
                >
                    <option value={0}>
                        All
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
