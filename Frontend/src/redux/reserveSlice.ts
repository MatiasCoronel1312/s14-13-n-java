import { createSlice } from "@reduxjs/toolkit";

type Treserve = {
  userId?: number;
  lugarRetiro?: string;
  idLugarRetiro?: number;
  lugarEntrega?: string;
  idLugarEntrega?: number;
  fechaRetiro?: string;
  fechaEntrega?: string;
  horaEntrega?: string;
  horaRetiro?: string;
  carId?: string;
  agenciaRetiro?: string;
  agenciaEntrega?: string;
};
interface reserve {
  dataReserve?: Treserve;
}

const estadoInicial: reserve = {
  dataReserve: {
    userId: undefined,
    agenciaEntrega: undefined,
    agenciaRetiro: undefined,
    idLugarEntrega: undefined,
    lugarEntrega: undefined,
    idLugarRetiro: undefined,
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
    resetReserve: (state) => {
      state.dataReserve = {
        ...state.dataReserve,
        ...estadoInicial.dataReserve,
      };
    },
  },
});

export const { postReserve, resetReserve } = reserveSlice.actions;
export default reserveSlice.reducer;
