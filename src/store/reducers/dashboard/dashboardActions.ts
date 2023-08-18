import {createAsyncThunk} from "@reduxjs/toolkit";
import {DashboardAPI} from "../../../api/dashboard";


export const getProcessedGoods = createAsyncThunk(
    'auth/getProcessedGoods',
    async (_, {rejectWithValue}) => {
        try {
            return await DashboardAPI.getMyProcessedGoods()
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const downloadDeals = createAsyncThunk(
    'auth/downloadAllDeals',
    async (args: string, {rejectWithValue}) => {
        try {
            await DashboardAPI.downloadAllDeals(args)
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getPlans = createAsyncThunk(
    'auth/getPlans',
    async (args: string, {rejectWithValue}) => {
        try {
            return await DashboardAPI.getMyPlans(args)
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getActivePlans = createAsyncThunk(
    'auth/getActivePlans',
    async (args: string, {rejectWithValue}) => {
        try {
            return await DashboardAPI.getMyActivePlans(args)
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getProfitDay = createAsyncThunk(
    'auth/getProfitDay',
    async (args: string, {rejectWithValue}) => {
        try {
            return await DashboardAPI.getProfitDay(args)
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

