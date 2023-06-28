import {combineReducers, configureStore} from "@reduxjs/toolkit";
import sidebarSlice from "./reducers/sidebar/sidebarSlice";
import userSlice from "./reducers/user/userSlice";
import dealSlice from "./reducers/deal/dealSlice";

const rootReducer = combineReducers({
    sidebarSlice,
    userSlice,
    dealSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']
