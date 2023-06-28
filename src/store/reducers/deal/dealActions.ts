import {createAsyncThunk} from "@reduxjs/toolkit";
import {DealAPI, IGetDeals} from "../../../api/deal";

export const getDeals = createAsyncThunk(
    'deal/getDeals',
    async (args: IGetDeals, {rejectWithValue}) => {
        try {
            return await DealAPI.getDeals({...args})
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
