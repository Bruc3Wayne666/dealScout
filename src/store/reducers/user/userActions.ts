import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILoginArgs, IRegisterArgs, IRestorePasswordProps, UserAPI} from "../../../api/user";


export const register = createAsyncThunk(
    'user/register',
    async (args: IRegisterArgs, {rejectWithValue}) => {
        try {
            const data = await UserAPI.register({...args})
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
    async (args: ILoginArgs, {rejectWithValue}) => {
        try {
            const data = await UserAPI.login({...args})
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
    async (args: IRestorePasswordProps, {rejectWithValue}) => {
        try {
            const data = await UserAPI.changePassword({...args})
            localStorage.setItem('user_session', data.user_session)
            localStorage.setItem('isLogin', 'true')
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
