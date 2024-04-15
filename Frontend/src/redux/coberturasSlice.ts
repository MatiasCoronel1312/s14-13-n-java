import { createSlice } from "@reduxjs/toolkit";

interface TTarifas {
  cargos: {
    metodoPago: {
      title: string;
      price: number;
    };
    seguridad: {
      title: string;
      price: number;
    };
  };
}

const estadoInicial: TTarifas = {
  cargos: {
    metodoPago: {
      title: "",
      price: 0,
    },
    seguridad: {
      title: "",
      price: 0,
    },
  },
};

const coberturasSlice = createSlice({
  name: "tarifas",
  initialState: estadoInicial,
  reducers: {
    postTarifaMetodoPago: (state, actions) => {
      state.cargos.metodoPago = {
        ...state.cargos.metodoPago,
        ...actions.payload,
      };
    },
    postTarifaSeguridad: (state, actions) => {
      state.cargos.seguridad = {
        ...state.cargos.seguridad,
        ...actions.payload,
      };
    },
  },
});

export const { postTarifaSeguridad, postTarifaMetodoPago } =
  coberturasSlice.actions;
export default coberturasSlice.reducer;
