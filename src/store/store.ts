import {combineReducers, configureStore} from "@reduxjs/toolkit";
import sidebarSlice from "./reducers/sidebar/sidebarSlice";
import authSlice from "./reducers/auth/authSlice";
import dealSlice from "./reducers/deal/dealSlice";
import userSlice from "./reducers/user/userSlice";
import modalSlice from "./reducers/modal/modalSlice";
import filterSlice from "./reducers/filter/filterSlice";

const rootReducer = combineReducers({
    sidebarSlice,
    authSlice,
    userSlice,
    dealSlice,
    modalSlice,
    filterSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']
