import React, {useContext, useEffect, useState} from 'react';
import cls from './Deals.module.scss';
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {getDeals} from "../../../../store/reducers/deal/dealActions";
import {Plan, Time} from "../../../../api/deal";
import DealCard from "./DealCard/DealCard";
import {ThemeContext, ThemeContextType} from "../../../../providers/ThemeProvider";
import {deal} from "../../../../temp";
import {capitalize} from "../../../../shared/utils";
import {useActions} from "../../../../hooks/useActions";


interface Options {
    view: string
    actual: string
    search: string
    sort: {
        sortBy: string
        category: string
        plan: string
    }
}

const initialOptions = {
    view: 'flex',
    actual: 'today',
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
    const {currentOption} = useAppSelector(state => state.sidebarSlice)
    const {theme} = useContext(ThemeContext) as ThemeContextType
    //make redux later
    const [options, setOptions] = useState<Options>(initialOptions)


    useEffect(() => {
        if (currentOption === 'My Deals') {
            getDeals({
                session: localStorage.getItem('user_session') || '',
                time: Time.TODAY,
                plan_id: Plan.ALL
            })
        }
    }, [])


    return (
        <div className={cls.deals}>
            <div className={`${cls.options} ${cls[theme]}`}>
                <div className={cls.view}>
                    <button onClick={() => setOptions(prev => ({...prev, view: prev.view === 'grid' ? 'flex' : 'grid'}))}>
                        <img
                            src={require(`../../../../assets/images/svg/${theme}/${options.view === 'flex' ? 'grid' : 'row'}.svg`)}
                            alt="View"
                        />
                    </button>
                </div>

                <div className={cls.actual}>
                    <div
                        onClick={() => setOptions(prev => ({...prev, actual: 'today'}))}
                        className={`${cls.option} ${options.actual === 'today' ? cls.active : ''}`}
                    >
                        <p>Today <span>{deals.length} (5)</span></p>
                    </div>
                    <div
                        onClick={() => setOptions(prev => ({...prev, actual: 'all'}))}
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
                    <select onChange={e => setOptions(prev => ({...prev, sort: {...prev.sort, category: e.target.value}}))}>
                        <option
                            value='all'
                        >
                            {options.sort.category === 'all' ? 'All categories' : capitalize(options.sort.category)}
                        </option>
                    </select>
                    <select onChange={e => setOptions(prev => ({...prev, sort: {...prev.sort, category: e.target.value}}))}>
                    <option value='all'>
                            Sort by {options.sort.sortBy}
                        </option>
                    </select>
                    <select onChange={e => setOptions(prev => ({...prev, sort: {...prev.sort, category: e.target.value}}))}>
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
                        // : deals.map(deal => {
                        : options.actual === 'today'
                        ? [1,1,1,1,1,1,1,1,1].map(() => {
                            console.log(deal)
                            return <>
                                <DealCard item={deal} theme={theme}/>
                            </>
                        })
                            : <h1>ALL DEALS (Придумать дизайн)</h1>
                }
            </div>
        </div>
    );
};

export default Deals;
