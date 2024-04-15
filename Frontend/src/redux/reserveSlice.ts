import { createSlice } from "@reduxjs/toolkit";

type Treserve = {

  userId?: number,
  nameUser?: string ,
  fechaEntrega?: string,
  fechaRetiro?: string,
  horaEntrega?: string,
  horaRetiro?: string,
  lugarRetiro?: string,
  lugarEntrega?: string,
  carId?:number

};
interface reserve {

  dataReserve: Treserve
} 

const estadoInicial: reserve = {
  dataReserve: {
    userId: undefined,
    nameUser: undefined,
    fechaEntrega: undefined,
    fechaRetiro: undefined,
    lugarEntrega: undefined,
    lugarRetiro: undefined,
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
