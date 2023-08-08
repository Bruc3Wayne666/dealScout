import {createAsyncThunk} from "@reduxjs/toolkit";
import {IChangeLoginProps, IChangeMailingProps, IChangePhotoProps, IGetUserProps, UserAPI} from "../../../api/user";


export const getUserInfo = createAsyncThunk(
    'user/getUserInfo',
    async (args: IGetUserProps, {rejectWithValue}) => {
        try {
            return await UserAPI.getUser({...args})
        } catch (err) {
            localStorage.removeItem('isLogin')
            localStorage.removeItem('user_session')
            window.location.href = 'auth'
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
            return await UserAPI.changePhoto({...args})
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const changeUserLogin = createAsyncThunk(
    'user/changeLogin',
    async (args: IChangeLoginProps, {rejectWithValue}) => {
        try {
            return await UserAPI.changeLogin({...args})
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
