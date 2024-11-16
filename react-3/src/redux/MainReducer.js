import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";



export const MainSlice = createSlice({
    name: "MAIN_SLICE",
    initialState: initialState,
    reducers: {
        plus: (state, action) => {
            state.count += 1
        },
        minus: (state, action) => {
            state.count -= 1
        },

        inpHandler: (state, action) => {
            //action.payload==== komponentden gonderdiyimiz parametre
            state.inpVal = action.payload.target.value

        },
        saveBtn: (state, action) => {
            if (state.inpVal === "") {
                alert("xanani doldur")
            } else {
                state.test = state.inpVal
                state.inpVal = ""
            }

        }
    }
})

export const Data = MainSlice.reducer;
export const { plus, minus, inpHandler, saveBtn } = MainSlice.actions;