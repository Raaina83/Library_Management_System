import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth";
// import api from "./api/api";

const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer
    },
    // middleware: (defaultMiddleware) => [...defaultMiddleware(), api.middleware]
})

export default store