import { createSlice } from "@reduxjs/toolkit";

type Treserve = {
  userId?: number;
  nameUser?: string;
  fechaEntrega?: string;
  fechaDevolucion?: string;
  horaEntrega?: string;
  horaDevolucion?: string;
  lugar?: string;
  carId?: number;

  horaRetiro?: string;

  fechaRetiro?: string;
};

interface reserve {
  dataReserve: Treserve;
}

const estadoInicial: reserve = {
  dataReserve: {
    userId: undefined,
    nameUser: undefined,
    fechaEntrega: undefined,
    fechaDevolucion: undefined,
    horaEntrega: undefined,
    horaDevolucion: undefined,
    lugar: undefined,
    carId: undefined,
    horaRetiro: undefined,
    fechaRetiro: undefined,
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
