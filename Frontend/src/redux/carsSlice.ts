import { createSlice } from "@reduxjs/toolkit";
import { TCarro } from "../assets/carsInfo";

interface CarsState {
  cars: TCarro[];
}

const estadoInicial: CarsState = {
  cars: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState: estadoInicial,
  reducers: {
    postCars: (state, actions) => {
      state.cars = actions.payload;
    },
    clearCars: (state) => {
      state.cars = [];
    },
  },
});

export const { postCars, clearCars } = carsSlice.actions;
export default carsSlice.reducer;
