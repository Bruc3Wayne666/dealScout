import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login, register} from "./userActions";
import {IUser} from "../../../models/User";
import {loadLanguages} from "i18next";


interface IUserState extends IUser {
    isLoading: boolean
}

const initialState: IUserState = {
    isLoading: false,
    error: false,
    message: '',
    user_session: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [register.pending.type]: (state) => {
            state.isLoading = true
            state.error = false
        },
        [register.fulfilled.type]: (state, {payload}: PayloadAction<IUser>) => {
            state.isLoading = false
            state.error = false
            state.message = payload.message
            state.user_session = payload.user_session
        },
        [login.pending.type]: (state) => {
            state.isLoading = true
            state.error = false
        },
        [login.fulfilled.type]: (state, {payload}: PayloadAction<IUser>) => {
            state.isLoading = false
            state.error = false
            state.message = payload.message
            state.user_session = payload.user_session
        },
    }
})

export default userSlice.reducer
