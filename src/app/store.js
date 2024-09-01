import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../features/dataSlice.js";
export const store = configureStore({
    reducer: dataSlice
})