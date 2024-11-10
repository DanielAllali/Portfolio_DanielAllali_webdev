import { createSlice } from "@reduxjs/toolkit";

const regularTheme = {
    type: "light",
    bgc: "#F0F2F5",
    weak: "#ffffff",
    strong: "#000000",
    highlight_weak: "#CE3903" /* #CE3903#C11A00 */,
    highlight_strong: "#C11A00",
};

const initialState = {
    theme: regularTheme,
};

const webSlice = createSlice({
    name: "webSlice",
    initialState,
    reducers: {
        setTheme: (state, newTheme) => {
            state.theme = newTheme.payload;
        },
    },
});

export const { setTheme } = webSlice.actions;

export default webSlice.reducer;
