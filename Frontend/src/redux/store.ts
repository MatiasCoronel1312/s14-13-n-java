import { configureStore } from "@reduxjs/toolkit";
import allCarsReducer from "./allCarsSlice";

export const store = configureStore({
    reducer: {
        data: {
            allCars: allCarsReducer,
        },
    },
});
