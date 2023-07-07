import { createSlice } from "@reduxjs/toolkit";

// Stato iniziale per il tema
const initialState = {
    mode: "light", // Imposta il tema predefinito su "light"
};

// Slice per il tema
const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        setMode: (state) => {
            // Cambia il tema in base al tema corrente
            if (state.mode === "light") {
                state.mode = "dark"; // Se il tema corrente è "light", cambialo in "dark"
            } else if (state.mode === "dark") {
                state.mode = "light"; // Se il tema corrente è "dark", cambialo in "light"
            }
        },
    },
});

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;
