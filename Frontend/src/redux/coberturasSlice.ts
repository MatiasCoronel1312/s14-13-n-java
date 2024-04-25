import { createSlice } from "@reduxjs/toolkit";

export interface TSelectACard {
  id: number;
  name: string;
  price: number;
}
interface TTarifas {
  cargos: {
    metodoPago: TSelectACard;
    seguridad: TSelectACard;
  };
}

const estadoInicial: TTarifas = {
  cargos: {
    metodoPago: {
      id: 0,
      name: " ",
      price: 0,
    },
    seguridad: {
      id: 0,
      name: " ",
      price: 0,
    },
  },
};

const coberturasSlice = createSlice({
  name: "tarifas",
  initialState: estadoInicial,
  reducers: {
    reseCoberturas: (state) => {
      state.cargos = {
        ...state.cargos,
        ...estadoInicial.cargos,
      };
    },
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

export const { postTarifaSeguridad, postTarifaMetodoPago, reseCoberturas } =
  coberturasSlice.actions;
export default coberturasSlice.reducer;
