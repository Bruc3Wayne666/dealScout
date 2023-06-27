import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../../../api";

interface ILoginArgs {
    email: string
    password: string
}

interface IRegisterArgs extends ILoginArgs {
    username: string
}

export const register = createAsyncThunk(
    'user/register',
    async ({email, password, username}: IRegisterArgs, {rejectWithValue}) => {
        try {
            const {data} = await instance.post('registration', {
                email,
                password
            })
            console.log(data)
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)


export const login = createAsyncThunk(
    'user/register',
    async ({email, password}: ILoginArgs, {rejectWithValue}) => {
        try {
            const {data} = await instance.post('login', {
                email,
                password
            })
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
