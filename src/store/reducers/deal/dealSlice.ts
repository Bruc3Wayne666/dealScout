import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DealShow} from "../../../models/Deal";
import {addFavorite, getAmount, getDeals, getFavoriteDeals, getHistory, removeFavorite} from "./dealActions";


interface AmountsPayload {
    today: number
    week: number
    month: number
    all: number
}

interface IDealsPayload {
    deals: DealShow[]
}

interface IFavoriteDealsPayload {
    result: DealShow[]
}


interface IDealsHistoryPayload {
    plans: {
        plan_id: number,
        buy_time: string,
        end_time: string,
        price: string
    }[]
}

interface IDealsState {
    isLoading: boolean
    error: boolean
    deals: DealShow[]
    history: {
        plan_id: number,
        buy_time: string,
        end_time: string,
        price: string
    }[]
    amounts: AmountsPayload
}

const initialState: IDealsState = {
    isLoading: false,
    error: false,
    deals: [],
    history: [],
    amounts: {
        today: 0,
        week: 0,
        month: 0,
        all: 0
    }
}

export const dealSlice = createSlice({
    name: 'deal',
    initialState,
    reducers: {},
    extraReducers: {
        [getDeals.pending.type]: (state) => {
            state.error = false
            state.isLoading = true
        },
        [getDeals.fulfilled.type]: (state, {payload}: PayloadAction<IDealsPayload>) => {
            state.deals = payload.deals
            state.isLoading = false
        },
        [getAmount.fulfilled.type]: (state, {payload}: PayloadAction<AmountsPayload>) => {
            state.amounts.today = payload.today
            state.amounts.week = payload.week
            state.amounts.month = payload.month
            state.amounts.all = payload.all
        },
        [addFavorite.fulfilled.type]: (state, {payload}: PayloadAction<number>) => {
            const index = state.deals.findIndex(item => item.id === payload)
            state.deals[index] = {...state.deals[index], favorite: true}
        },
        [removeFavorite.fulfilled.type]: (state, {payload}: PayloadAction<number>) => {
            const index = state.deals.findIndex(item => item.id === payload)
            state.deals[index] = {...state.deals[index], favorite: false}
        },
        [getFavoriteDeals.pending.type]: (state) => {
            state.error = false
            state.isLoading = true
        },
        [getFavoriteDeals.fulfilled.type]: (state, {payload}: PayloadAction<IFavoriteDealsPayload>) => {
            state.deals = payload.result
            state.isLoading = false
        },
        [getHistory.pending.type]: (state) => {
            state.error = false
            state.isLoading = true
        },
        [getHistory.fulfilled.type]: (state, {payload}: PayloadAction<IDealsHistoryPayload>) => {
            state.isLoading = false
            state.history = payload.plans
        }
    }
})

export default dealSlice.reducer
