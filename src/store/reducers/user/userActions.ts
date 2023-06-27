import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILoginArgs, IRegisterArgs, IRestorePasswordProps, UserAPI} from "../../../api/user";


export const register = createAsyncThunk(
    'user/register',
    async ({email, password, username}: IRegisterArgs, {rejectWithValue}) => {
        try {
            return await UserAPI.register({email, password, username})
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)


export const login = createAsyncThunk(
    'user/login',
    async ({email, password}: ILoginArgs, {rejectWithValue}) => {
        try {
            return await UserAPI.login({email, password})
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)


export const restorePassword = createAsyncThunk(
    'user/restorePassword',
    async ({email, password, pin}: IRestorePasswordProps, {rejectWithValue}) => {
        try {
            return await UserAPI.changePassword({email, password, pin})
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
