import React, {useContext, useEffect, useState} from 'react';
import cls from './Deals.module.scss';
import {useAppSelector} from "../../../../hooks/redux";
import {getDeals} from "../../../../store/reducers/deal/dealActions";
import {ThemeContext, ThemeContextType} from "../../../../providers/ThemeProvider";
import {useActions} from "../../../../hooks/useActions";
import Filter from "./Filter/Filter";
import {Plan} from "../../../../api/deal";
import DealCard from "./DealCard/DealCard";


const Deals = () => {
    const {getDeals} = useActions()
    const {isLoading, deals} = useAppSelector(state => state.dealSlice)
    const {actual, view, sort, search} = useAppSelector(state => state.filterSlice)
    const {theme} = useContext(ThemeContext) as ThemeContextType


    useEffect(() => {
        getDeals({
            session: localStorage.getItem('user_session') || '',
            time: sort.time,
            plan_id: sort.plan
        })
    }, [actual, search, sort.plan, sort.time])


    return (
        <div className={cls.deals}>

            <Filter />

            <div className={`${cls.items} ${cls[view]}`}>
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
