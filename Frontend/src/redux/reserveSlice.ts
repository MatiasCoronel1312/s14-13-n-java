import { createSlice } from "@reduxjs/toolkit";

type Treserve = {
<<<<<<< HEAD
=======

>>>>>>> a69aed6d3b8c1cc86ecf12d5de19465c549ed3be
  userId?: number,
  lugarRetiro?: string,
  lugarEntrega?: string,
  fechaRetiro?: string,
  fechaEntrega?: string,
  horaEntrega?: string,
  horaRetiro?: string,
  carId?: string,
<<<<<<< HEAD
=======

>>>>>>> a69aed6d3b8c1cc86ecf12d5de19465c549ed3be
};
interface reserve {
  dataReserve: Treserve;
}

const estadoInicial: reserve = {
  dataReserve: {
    userId: undefined,
<<<<<<< HEAD
    lugarEntrega: undefined,
    lugarRetiro: undefined,
=======

    lugarEntrega: undefined,
    lugarRetiro: undefined,

>>>>>>> a69aed6d3b8c1cc86ecf12d5de19465c549ed3be
    fechaEntrega: undefined,
    fechaRetiro: undefined,
    horaEntrega: undefined,
    horaRetiro: undefined,
<<<<<<< HEAD
    carId: undefined,
=======

    carId: undefined,

>>>>>>> a69aed6d3b8c1cc86ecf12d5de19465c549ed3be
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
