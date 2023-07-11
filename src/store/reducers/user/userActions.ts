import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    IChangeLoginProps,
    IChangeMailingProps,
    IChangePhotoProps,
    ILoginArgs,
    IRegisterArgs,
    IRequestPinProps,
    IResetPasswordProps,
    UserAPI
} from "../../../api/user";


export const register = createAsyncThunk(
    'user/register',
    async (args: IRegisterArgs, {rejectWithValue}) => {
        try {
            const {session} = await UserAPI.register({...args})
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
    'user/login',
    async (args: ILoginArgs, {rejectWithValue}) => {
        try {
            const {session} = await UserAPI.login({...args})
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
    'user/requestResetPasswordPin',
    async (args: IRequestPinProps, {rejectWithValue}) => {
        try {
            const {pin} = await UserAPI.requestPin({...args})
            return pin
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)


export const resetUserPassword = createAsyncThunk(
    'user/restorePassword',
    async (args: IResetPasswordProps, {rejectWithValue}) => {
        try {
            const data = await UserAPI.resetPassword({...args})
            localStorage.setItem('user_session', data.user_session)
            localStorage.setItem('isLogin', 'true')
            window.location.href = '/profile'
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const changeUserLogin = createAsyncThunk(
    'user/changeLogin',
    async (args: IChangeLoginProps, {rejectWithValue}) => {
        try {
            const {message} = await UserAPI.changeLogin({...args})
            return message
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const changeMailing = createAsyncThunk(
    'user/changeMailing',
    async (args: IChangeMailingProps, {rejectWithValue}) => {
        try {
            const {message} = await UserAPI.changeMailing({...args})
            return message
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const changeUserPhoto = createAsyncThunk(
    'user/changePhoto',
    async (args: IChangePhotoProps, {rejectWithValue}) => {
        try {
            const {info} = await UserAPI.changePhoto({...args})
            return info
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
