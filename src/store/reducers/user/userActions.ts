import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILoginArgs, IRegisterArgs, IRestorePasswordProps, UserAPI} from "../../../api/user";


export const register = createAsyncThunk(
    'user/register',
    async ({email, password, username}: IRegisterArgs, {rejectWithValue}) => {
        try {
            const data = await UserAPI.register({email, password, username})
            localStorage.setItem('user_session', data.user_session)
            localStorage.setItem('isLogin', 'true')
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)


export const login = createAsyncThunk(
    'user/login',
    async ({email, password}: ILoginArgs, {rejectWithValue}) => {
        try {
            const data = await UserAPI.login({email, password})
            localStorage.setItem('user_session', data.user_session)
            localStorage.setItem('isLogin', 'true')
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)


export const restorePassword = createAsyncThunk(
    'user/restorePassword',
    async ({email, password, pin}: IRestorePasswordProps, {rejectWithValue}) => {
        try {
            const data = await UserAPI.changePassword({email, password, pin})
            localStorage.setItem('user_session', data.user_session)
            localStorage.setItem('isLogin', 'true')
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
