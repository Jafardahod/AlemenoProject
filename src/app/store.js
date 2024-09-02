import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../features/dataSlice.js";
import studentSlice from "../features/studentSlice.js";
export const store = configureStore({
    reducer: {
        data: dataSlice,
        students:  studentSlice,

    }
})