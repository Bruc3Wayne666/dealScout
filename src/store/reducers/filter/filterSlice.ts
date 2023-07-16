import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Plan, Time} from "../../../api/deal";


interface IFilterState {
    view: string
    actual: Time
    search: string
    sort: {
        time: Time
        plan: number
    }
}

const initialState: IFilterState = {
    view: 'flex',
    actual: Time.TODAY,
    search: '',
    sort: {
        time: Time.ALL,
        plan: 0
    }
}

export const filterSlice = createSlice({
        name: 'filter',
        initialState,
        reducers: {
            setView: (state) => {
                state.view = state.view === 'grid' ? 'flex' : 'grid'
            },
            setActual: (state) => {
                state.actual = state.actual === Time.ALL ? Time.TODAY : Time.ALL
            },
            setSearch: (state, {payload}: PayloadAction<string>) => {
                state.search = payload
            },
            setTime: (state, {payload}: PayloadAction<Time>) => {
                state.sort.time = payload
            },
            setPlan: (state, {payload}: PayloadAction<string>) => {
                state.sort.plan = Number(payload)
            }
        }
    }
)

export const filterActions = filterSlice.actions
export default filterSlice.reducer
