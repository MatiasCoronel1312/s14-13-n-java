import { configureStore } from "@reduxjs/toolkit";
import allCarsReducer from "./carsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
            allCars: allCarsReducer,
    },
});
export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSeletor:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;