import {createAsyncThunk} from "@reduxjs/toolkit";
import {AddDealProps, DealAPI, GetDealsProps} from "../../../api/deal";

export const getDeals = createAsyncThunk(
    'deal/getDeals',
    async (args: GetDealsProps, {rejectWithValue}) => {
        try {
            return await DealAPI.getDeals({...args})
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const addDeal = createAsyncThunk(
    'deal/addDeal',
    async (args: AddDealProps, {rejectWithValue}) => {
        try {
            return await DealAPI.addDeal({...args})
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
