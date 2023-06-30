import React, {useContext, useEffect, useState} from 'react';
import cls from './Deals.module.scss';
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {getDeals} from "../../../../store/reducers/deal/dealActions";
import {Plan, Time} from "../../../../api/deal";
import DealCard from "./DealCard/DealCard";
import {ThemeContext, ThemeContextType} from "../../../../providers/ThemeProvider";
import {deal} from "../../../../temp";

const Deals = () => {
    const dispatch = useAppDispatch()
    const {isLoading, deals} = useAppSelector(state => state.dealSlice)
    const {currentOption} = useAppSelector(state => state.sidebarSlice)
    const {theme} = useContext(ThemeContext) as ThemeContextType
    //make redux later
    const [view, setView] = useState('flex')

    useEffect(() => {
        if (currentOption === 'My Deals') {
            dispatch(getDeals({
                user_session: localStorage.getItem('user_session') || '',
                time: Time.TODAY,
                plan: Plan.ALL
            }))
        }
    }, [dispatch])

    return (
        <div className={cls.deals}>
            <div className={cls.options}>
                <h2>Вид</h2>
                <button onClick={() => setView(view === 'grid' ? 'flex' : 'grid')}>
                    {view}
                </button>
            </div>
            <div className={`${cls.items} ${cls[view]}`}>
                {
                    isLoading
                        ? <img src={require('../../../../assets/images/svg/loading.svg').default} alt="Loading..."/>
                        // : deals.map(deal => {
                        : [1,1,1,1,1,1,1,1,1].map(() => {
                            console.log(deal)
                            return <>
                                <DealCard item={deal} theme={theme}/>
                            </>
                        })
                }
            </div>
        </div>
    );
};

export default Deals;
