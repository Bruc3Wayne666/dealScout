import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login, register, restorePassword} from "./userActions";
import {IUser} from "../../../models/User";


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
    reducers: {
        setUser: (state, {payload}: PayloadAction<string>) => {
            state.user_session = payload
        },
        logout: (state) => {
            state.error = false
            state.user_session = ''
            state.message = ''
        }
    },
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
        [restorePassword.pending.type]: (state) => {
            state.isLoading = true
            state.error = false
        },
        [restorePassword.fulfilled.type]: (state, {payload}: PayloadAction<IUser>) => {
            state.isLoading = false
            state.error = false
            state.message = payload.message
            state.user_session = payload.user_session
        }
    }
})

export const {setUser, logout} = userSlice.actions
export default userSlice.reducer
