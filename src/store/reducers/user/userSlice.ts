import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    changeMailing,
    changeUserLogin, changeUserPhoto,
    login,
    register, requestResetPasswordPin,
    resetUserPassword
} from "./userActions";
import {IUser} from "../../../models/User";
import {
    ChangeLoginPayload,
    ChangeMailingPayload,
    RequestPinPayload,
    ResetPasswordPayload
} from "../../../api/user";


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
            state.message = ''
            state.isLoading = true
            state.error = false
        },
        [register.fulfilled.type]: (state, {payload}: PayloadAction<string>) => {
            state.isLoading = false
            state.error = false
            state.user_session = payload
        },
        [login.pending.type]: (state) => {
            state.message = ''
            state.isLoading = true
            state.error = false
        },
        [login.fulfilled.type]: (state, {payload}: PayloadAction<string>) => {
            state.isLoading = false
            state.error = false
            state.user_session = payload
        },
        [resetUserPassword.pending.type]: (state) => {
            state.message = ''
            state.isLoading = true
            state.error = false
        },
        [resetUserPassword.fulfilled.type]: (state, {payload}: PayloadAction<ResetPasswordPayload>) => {
            state.isLoading = false
            state.error = false
            state.user_session = payload.user_session
            state.message = payload.info
        },
        [changeUserLogin.pending.type]: (state) => {
            state.message = ''
            state.isLoading = true
            state.error = false
        },
        [changeUserLogin.fulfilled.type]: (state, {payload}: PayloadAction<string>) => {
            state.isLoading = false
            state.error = false
            state.message = payload
        },
        [changeMailing.pending.type]: (state) => {
            state.message = ''
            state.isLoading = true
            state.error = false
        },
        [changeMailing.fulfilled.type]: (state, {payload}: PayloadAction<string>) => {
            state.isLoading = false
            state.error = false
            state.message = payload
        },
        [changeUserPhoto.pending.type]: (state) => {
            state.message = ''
            state.isLoading = true
            state.error = false
        },
        [changeUserPhoto.fulfilled.type]: (state, {payload}: PayloadAction<string>) => {
            state.isLoading = false
            state.error = false
            state.message = payload
        },
        [requestResetPasswordPin.pending.type]: (state) => {
            state.isLoading = true
            state.error = false
        },
        [requestResetPasswordPin.fulfilled.type]: (state, {payload}: PayloadAction<RequestPinPayload>) => {
            state.isLoading = false
            state.error = false
        }
    }
})

export const userActions = userSlice.actions
export default userSlice.reducer
