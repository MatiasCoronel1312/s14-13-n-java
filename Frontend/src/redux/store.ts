import { configureStore } from "@reduxjs/toolkit";
import allCarsReducer from "./carsSlice";

export const store = configureStore({
    reducer: {
            allCars: allCarsReducer,
    },
});
