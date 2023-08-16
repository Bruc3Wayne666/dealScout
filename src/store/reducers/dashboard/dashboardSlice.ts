import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {downloadDeals, getActivePlans, getPlans, getProfitDay} from "./dashboardActions";
import {Plan} from "../../../models/Plan";


interface IPlansPayload {
    plans: Plan[]
}

interface IActivePlansPayload {
    activePlans: Omit<Plan, 'end_time'>[]
}

interface IProfitDay {
    today: {
        profit: number
        date: string
    }
    yesterday: {
        profit: number
        date: string
    }
    tommorow: {
        date: string
    }
}

interface IDashboardState extends IPlansPayload, IActivePlansPayload{
    success: boolean
    isLoading: boolean
    profit: IProfitDay
}

const initialState: IDashboardState = {
    success: false,
    plans: [],
    activePlans: [],
    profit: {} as IProfitDay,
    isLoading: false
}

export const dashboardSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [downloadDeals.pending.type]: (state) => {
            state.success = false
        },
        [downloadDeals.fulfilled.type]: (state) => {
            state.success = true
        },
        [getPlans.pending.type]: (state) => {
            state.isLoading = true
        },
        [getPlans.fulfilled.type]: (state, {payload}: PayloadAction<IPlansPayload>) => {
            state.isLoading = false
            state.plans = payload.plans
        },
        [getActivePlans.pending.type]: (state) => {
            state.isLoading = true
        },
        [getActivePlans.fulfilled.type]: (state, {payload}: PayloadAction<IPlansPayload>) => {
            state.isLoading = false
            state.activePlans = payload.plans
        },
        [getProfitDay.pending.type]: (state) => {
            state.isLoading = true
        },
        [getProfitDay.fulfilled.type]: (state, {payload}: PayloadAction<IProfitDay>) => {
            state.isLoading = false
            state.profit = payload
        }
    }
})

export default dashboardSlice.reducer
