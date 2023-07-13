import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    changeMailing,
    changeUserLogin,
    changeUserPhoto, getUserInfo
} from "./userActions";
import {IUser} from "../../../models/User";
import {GetUserPayload} from "../../../api/user";


interface IUserState extends IUser {
    isLoading: boolean
}

const initialState: IUserState = {
    isLoading: false,
    login: '',
    my_code: '',
    referral_code: '',
    mailing: false,
    photo: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // removeUser: (state) => {
        //     state = initialState
        // }
    },
    extraReducers: {
        [getUserInfo.pending.type]: (state) => {
            state.isLoading = true
        },
        [getUserInfo.fulfilled.type]: (state, {payload}: PayloadAction<GetUserPayload>) => {
            state.isLoading = false
            state.login = payload.login
            state.my_code = payload.my_code
            state.referral_code = payload.referral_code
            state.mailing = payload.mailing
            state.photo = payload.photo
        },
        [changeUserLogin.pending.type]: (state) => {
            state.isLoading = true
        },
        [changeUserLogin.fulfilled.type]: (state, {payload}: PayloadAction<string>) => {
            state.isLoading = false
        },
        [changeMailing.pending.type]: (state) => {
            state.isLoading = true
        },
        [changeMailing.fulfilled.type]: (state, {payload}: PayloadAction<string>) => {
            state.isLoading = false
            state.mailing = !state.mailing
        },
        [changeUserPhoto.pending.type]: (state) => {
            state.isLoading = true
        },
        [changeUserPhoto.fulfilled.type]: (state, {payload}: PayloadAction<string>) => {
            state.isLoading = false
        }
    }
})

export const userActions = userSlice.actions
export default userSlice.reducer
