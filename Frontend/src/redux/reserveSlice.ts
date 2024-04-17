import { createSlice } from "@reduxjs/toolkit";

type Treserve = {

  userId?: number,
  nameUser?: string ,
  lugarRetiro?: string,
  lugarEntrega?: string,
  fechaRetiro?: string,
  fechaEntrega?: string,
  horaEntrega?: string,
  horaRetiro?: string,
  carId?: string,



};
interface reserve {

  dataReserve: Treserve
} 

const estadoInicial: reserve = {
  dataReserve: {
    userId: undefined,
    nameUser: undefined,
    lugarEntrega: undefined,
    lugarRetiro: undefined,
    fechaEntrega: undefined,
    fechaRetiro: undefined,
    horaEntrega: undefined,
    horaRetiro: undefined,
    carId: undefined,

  },
};

const reserveSlice = createSlice({
  name: "dataReserve",
  initialState: estadoInicial,
  reducers: {
    postReserve: (state, actions) => {
      state.dataReserve = { ...state.dataReserve, ...actions.payload };
    },
  },
});

export const { postReserve } = reserveSlice.actions;
export default reserveSlice.reducer;
