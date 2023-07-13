import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// const initialState: IAuthState = {
//     isLoading: false,
//     error: false,
//     message: '',
//     user_session: ''
// }


const initialState = {
    show: false
}

export const modalSlice = createSlice({
        name: 'modal',
        initialState,
        reducers: {
            setShow: (state) => {
                state.show = !state.show
            }
        }
    }
)

export const modalActions = modalSlice.actions
export default modalSlice.reducer
