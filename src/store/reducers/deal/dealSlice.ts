import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DealShow} from "../../../models/Deal";
import {getDeals} from "./dealActions";


interface IDealsState {
    isLoading: boolean
    error: boolean
    deals: DealShow[]
    login: string
}

const initialState: IDealsState = {
    isLoading: false,
    error: false,
    deals: [],
    login: ''
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
            state.login = payload.login
            state.deals = payload.deals
            state.isLoading = false
        }
    }
})

export default dealSlice.reducer
