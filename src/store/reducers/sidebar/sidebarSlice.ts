import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ISidebarState {
    currentOption: string
}

const initialState: ISidebarState = {
    currentOption: 'dashboard',
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setCurrent(state, action: PayloadAction<string>){
            state.currentOption = action.payload
        }
    }
})

export const {setCurrent} = sidebarSlice.actions
export default sidebarSlice.reducer
