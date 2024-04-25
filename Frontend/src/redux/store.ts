import { configureStore } from "@reduxjs/toolkit";
import allAgenciasReducer from "./agenciasSlice";
import dataReserveReducer from "./reserveSlice";
import carroReducer from "./carsSlice";
import coberturasReducer from "./coberturasSlice";
import userReducer from "./UserSlice";
import allDestinosReducer from "./destinationSlice";
import tokenReducer from "./tokenSlice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    allAgencias: allAgenciasReducer,
    dataReserve: dataReserveReducer,
    carro: carroReducer,
    coberturas: coberturasReducer,
    user: userReducer,
    allDestinos: allDestinosReducer,
    token: tokenReducer,
  },
});
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSeletor: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
