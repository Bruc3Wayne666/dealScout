import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DealShow} from "../../../models/Deal";
import {addFavorite, getAmount, getDeals, removeFavorite} from "./dealActions";


interface AmountsPayload {
    today: number
    all: number
}

interface IDealsState {
    isLoading: boolean
    error: boolean
    deals: DealShow[]
    amounts: {
        today: number
        all: number
    }
}

const initialState: IDealsState = {
    isLoading: false,
    error: false,
    deals: [],
    amounts: {
        today: 0,
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
        [getDeals.fulfilled.type]: (state, {payload}: PayloadAction<IDealsState>) => {
            state.deals = payload.deals
            state.isLoading = false
        },
        [getAmount.fulfilled.type]: (state, {payload}: PayloadAction<AmountsPayload>) => {
            state.amounts.today = payload.today
            state.amounts.all = payload.all
        },
        [addFavorite.fulfilled.type]: (state, {payload}: PayloadAction<number>) => {
            const index = state.deals.findIndex(item => item.id === payload)
            state.deals[index] = {...state.deals[index], favorite: true}
        },
        [removeFavorite.fulfilled.type]: (state, {payload}: PayloadAction<number>) => {
            const index = state.deals.findIndex(item => item.id === payload)
            state.deals[index] = {...state.deals[index], favorite: false}
        }
    }
})

export default dealSlice.reducer
