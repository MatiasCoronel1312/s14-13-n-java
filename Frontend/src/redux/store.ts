import { configureStore } from "@reduxjs/toolkit";
import allAgenciasReducer from "./agenciasSlice";
import dataReserveReducer from "./reserveSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
            allAgencias: allAgenciasReducer,
            dataReserve: dataReserveReducer,
    },
});
export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSeletor:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;