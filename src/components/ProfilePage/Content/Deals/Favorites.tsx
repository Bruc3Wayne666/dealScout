import React, {useContext, useEffect, useState} from 'react';
import cls from './Deals.module.scss';
import {useAppSelector} from "../../../../hooks/redux";
import {ThemeContext, ThemeContextType} from "../../../../providers/ThemeProvider";
import {useActions} from "../../../../hooks/useActions";
import Filter from "./Filter/Filter";
import DealCard from "./DealCard/DealCard";
import {useTranslation} from "react-i18next";


const Deals = () => {
    const {getFavoriteDeals, addFavorite, removeFavorite} = useActions()
    const {isLoading, deals} = useAppSelector(state => state.dealSlice)
    const {view} = useAppSelector(state => state.filterSlice)
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {t} = useTranslation('profile')


    useEffect(() => {
        getFavoriteDeals(localStorage.getItem('user_session') || '')
    }, [])


    const handleAddFavorite = (deal_id: number, isFavorite: boolean) => {
        if (isFavorite) return removeFavorite({
            deal_id,
            session: localStorage.getItem('user_session') || ''
        })
        return addFavorite({
            deal_id,
            session: localStorage.getItem('user_session') || ''
        })
    }


    return (
        <div className={cls.deals}>

            <h1>{t('favorite_deals')}</h1>

            <div className={`${cls.items} ${cls[view]}`}>
                {
                    isLoading
                        ? <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src={require('../../../../assets/images/svg/loading.svg').default} alt="Loading..."/>
                        </div>
                        : deals.length !== 0
                            ? deals.map(deal => <DealCard
                                handleAdd={handleAddFavorite}
                                item={deal}
                                theme={theme}
                            />)
                            : <h2>There are no any deals yet</h2>
                }
            </div>
        </div>
    );
};

export default Deals;
