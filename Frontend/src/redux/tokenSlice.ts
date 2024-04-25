import { createSlice } from "@reduxjs/toolkit";

interface TInicial {
  tokenData?: string;
}

const estadoInicial: TInicial = {
  tokenData: undefined,
};

const tokenSlice = createSlice({
  name: "tokenData",
  initialState: estadoInicial,
  reducers: {
    saveToken: (state, actions) => {
      state.tokenData = actions.payload;
    },
    deleteToken: (state) => {
      state.tokenData = estadoInicial.tokenData;
    },
  },
});

export const { saveToken, deleteToken } = tokenSlice.actions;
export default tokenSlice.reducer;
