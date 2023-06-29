import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    mode: "light",
};



const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        setMode: (state) => {
            if(state.mode === "light") {
                state.mode = "dark"
            }
            else if(state.mode === "dark") {
                state.mode = "light"
            }
        }
    }
});


export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;