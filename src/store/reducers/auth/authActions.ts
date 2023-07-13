import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    ILoginArgs,
    IRegisterArgs,
    IRequestPinProps,
    IResetPasswordProps,
    AuthAPI
} from "../../../api/auth";


export const register = createAsyncThunk(
    'auth/register',
    async (args: IRegisterArgs, {rejectWithValue}) => {
        try {
            const {session} = await AuthAPI.register({...args})
            localStorage.setItem('user_session', session)
            localStorage.setItem('isLogin', 'true')
            window.location.href = '/profile'
            return session
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)


export const login = createAsyncThunk(
    'auth/login',
    async (args: ILoginArgs, {rejectWithValue}) => {
        try {
            const {session} = await AuthAPI.login({...args})
            localStorage.setItem('user_session', session)
            localStorage.setItem('isLogin', 'true')
            window.location.href = '/profile'
            return session
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const requestResetPasswordPin = createAsyncThunk(
    'auth/requestResetPasswordPin',
    async (args: IRequestPinProps, {rejectWithValue}) => {
        try {
            const {pin} = await AuthAPI.requestPin({...args})
            return pin
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)


export const resetUserPassword = createAsyncThunk(
    'auth/restorePassword',
    async (args: IResetPasswordProps, {rejectWithValue}) => {
        try {
            const data = await AuthAPI.resetPassword({...args})
            localStorage.setItem('user_session', data.user_session)
            localStorage.setItem('isLogin', 'true')
            window.location.href = '/profile'
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)


