import { createSlice } from "@reduxjs/toolkit";

type TAgencia = 
    {
      id:number,
      name: string;
      country: string;
      address: string;
      tel: string;
      phone: string;
      excep: string;
    };

interface agenciasState {
    agencias: TAgencia[]
}

const estadoInicial:agenciasState = {
    agencias: []
}

const agenciasSlice = createSlice({
    name: 'agencias',
    initialState: estadoInicial,
    reducers: {
        getAgencias: (state, actions)=>{
            state.agencias = actions.payload
        },
    },
});

export const { getAgencias } = agenciasSlice.actions;
export default agenciasSlice.reducer;