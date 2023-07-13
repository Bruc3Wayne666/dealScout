import React, {useContext, useEffect, useState} from 'react';
import cls from './Deals.module.scss';
import {useAppSelector} from "../../../../hooks/redux";
import {getDeals} from "../../../../store/reducers/deal/dealActions";
import {Plan, Time} from "../../../../api/deal";
import {ThemeContext, ThemeContextType} from "../../../../providers/ThemeProvider";
import {capitalize} from "../../../../shared/utils";
import {useActions} from "../../../../hooks/useActions";
import DealCard from "./DealCard/DealCard";


interface Options {
    view: string
    actual: Time
    search: string
    sort: {
        sortBy: string
        category: string
        plan: string
    }
}

const initialOptions = {
    view: 'flex',
    actual: Time.TODAY,
    search: '',
    sort: {
        sortBy: 'A-Z',
        category: 'all',
        plan: 'pro'
    }
}

const Deals = () => {
    const {getDeals} = useActions()
    const {isLoading, deals} = useAppSelector(state => state.dealSlice)
    const {theme} = useContext(ThemeContext) as ThemeContextType
    //make redux later
    const [options, setOptions] = useState<Options>(initialOptions)


    useEffect(() => {
        getDeals({
            session: localStorage.getItem('user_session') || '',
            time: options.actual,
            plan_id: Plan.ALL
        })
    }, [options.actual])


    return (
        <div className={cls.deals}>
            <div className={`${cls.options} ${cls[theme]}`}>
                <div className={cls.view}>
                    <button
                        onClick={() => setOptions(prev => ({...prev, view: prev.view === 'grid' ? 'flex' : 'grid'}))}>
                        <img
                            src={require(`../../../../assets/images/svg/${theme}/${options.view === 'flex' ? 'grid' : 'row'}.svg`)}
                            alt="View"
                        />
                    </button>
                </div>

                <div className={cls.actual}>
                    <div
                        onClick={() => setOptions(prev => ({...prev, actual: Time.TODAY}))}
                        className={`${cls.option} ${options.actual === 'today' ? cls.active : ''}`}
                    >
                        <p>Today <span>{deals.length}</span></p>
                    </div>
                    <div
                        onClick={() => setOptions(prev => ({...prev, actual: Time.ALL}))}
                        className={`${cls.option} ${options.actual === 'all' ? cls.active : ''}`}
                    >
                        <p>All <span>{deals.length}</span></p>
                    </div>
                </div>
                <div className={cls.search}>
                    <input
                        type="text"
                        placeholder='Search'
                        onChange={e => setOptions(prev => ({...prev, search: e.target.value}))}
                        value={options.search}
                    />
                </div>
                <div className={cls.sort}>
                    <select
                        onChange={e => setOptions(prev => ({...prev, sort: {...prev.sort, category: e.target.value}}))}>
                        <option
                            value='all'
                        >
                            {options.sort.category === 'all' ? 'All categories' : capitalize(options.sort.category)}
                        </option>
                    </select>
                    <select
                        onChange={e => setOptions(prev => ({...prev, sort: {...prev.sort, category: e.target.value}}))}>
                        <option value='all'>
                            Sort by {options.sort.sortBy}
                        </option>
                    </select>
                    <select
                        onChange={e => setOptions(prev => ({...prev, sort: {...prev.sort, category: e.target.value}}))}>
                        <option value='all'>
                            {capitalize(options.sort.plan)}
                        </option>
                    </select>
                </div>
            </div>

            <div className={`${cls.items} ${cls[options.view]}`}>
                {
                    isLoading
                        ? <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src={require('../../../../assets/images/svg/loading.svg').default} alt="Loading..."/>
                        </div>
                        : deals.length !== 0
                            ? deals.map(deal => <DealCard item={deal} theme={theme}/>)
                            : <h2>There is no any deals yet</h2>
                }
            </div>
        </div>
    );
};

export default Deals;
