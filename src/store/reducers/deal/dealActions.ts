import {createAsyncThunk} from "@reduxjs/toolkit";
import {AddDealProps, AddFavoriteProps, DealAPI, GetAmountProps, GetDealsProps, Time} from "../../../api/deal";

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

export const getAmount = createAsyncThunk(
    'deal/getAmount',
    async (args: Omit<GetAmountProps, 'time'>, {rejectWithValue}) => {
        try {
            const {len: today} = await DealAPI.getDealsAmount({...args, time: Time.TODAY})
            const {len: all} = await DealAPI.getDealsAmount({...args, time: Time.ALL})
            return {today, all}
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getFavoriteDeals = createAsyncThunk(
    'deal/getFavoriteDeals',
    async (session: string, {rejectWithValue}) => {
        try {
            return await DealAPI.getFavoriteDealsList(session)
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const addFavorite = createAsyncThunk(
    'deal/addFavorite',
    async (args: AddFavoriteProps, {rejectWithValue}) => {
        try {
            return await DealAPI.addFavoriteDeal({...args})
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const removeFavorite = createAsyncThunk(
    'deal/removeFavorite',
    async (args: AddFavoriteProps, {rejectWithValue}) => {
        try {
            return await DealAPI.removeFavoriteDeal({...args})
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
