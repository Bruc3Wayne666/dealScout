import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    login,
    register,
    requestResetPasswordPin,
    resetUserPassword
} from "./authActions";
import {IAuth} from "../../../models/Auth";
import {
    RequestPinPayload,
    ResetPasswordPayload
} from "../../../api/auth";
import {getUserInfo} from "../user/userActions";


interface IAuthState extends IAuth {
    isLoading: boolean
}

const initialState: IAuthState = {
    isLoading: false,
    error: false,
    message: '',
    user_session: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSession: (state, {payload}: PayloadAction<string>) => {
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
        [register.rejected.type]: (state) => {
            state.isLoading = false
            state.error = false
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
        [login.rejected.type]: (state) => {
            state.isLoading = false
            state.error = false
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
        [resetUserPassword.rejected.type]: (state) => {
            state.isLoading = false
            state.error = false
            state.message = ''
        },
        [requestResetPasswordPin.pending.type]: (state) => {
            state.isLoading = true
            state.error = false
        },
        [requestResetPasswordPin.fulfilled.type]: (state, {payload}: PayloadAction<RequestPinPayload>) => {
            state.isLoading = false
            state.error = false
        },
        [requestResetPasswordPin.rejected.type]: (state, {payload}: PayloadAction<RequestPinPayload>) => {
            state.isLoading = false
            state.error = false
        },
        [getUserInfo.rejected.type]: (state) => {
            state.error = false
            state.user_session = ''
            state.message = ''
        },
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer
