import { configureStore } from "@reduxjs/toolkit";
import webSlice from "./webSlice";

const store = configureStore({
    reducer: {
        webSlice: webSlice,
    },
});

export default store;
