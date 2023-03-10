import { configureStore } from "@reduxjs/toolkit";

import LoginSlice from "../slice/LoginSlice";

export const store = configureStore({
    reducer:{
        login: LoginSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch