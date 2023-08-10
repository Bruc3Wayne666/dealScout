import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Plan, Time} from "../../../api/deal";


interface IFilterState {
    view: string
    actual: Time
    // search: string
    sort: {
        plan: number
    }
}

const initialState: IFilterState = {
    view: 'flex',
    actual: Time.TODAY,
    // search: '',
    sort: {
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
            setActual: (state, {payload}: PayloadAction<Time>) => {
                state.actual = payload
            },
            // setSearch: (state, {payload}: PayloadAction<string>) => {
            //     state.search = payload
            // },
            setPlan: (state, {payload}: PayloadAction<string>) => {
                state.sort.plan = Number(payload)
            }
        }
    }
)

export const filterActions = filterSlice.actions
export default filterSlice.reducer
