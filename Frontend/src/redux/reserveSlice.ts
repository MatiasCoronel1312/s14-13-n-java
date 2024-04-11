import { createSlice } from "@reduxjs/toolkit";

type Treserve = {
  user: {
    id: number,
    nameUser: string
  };
  dateInfo:{
    fechaEntrega: string,
  fechaDevolucion: string,
  horaEntrega: string,
  horaDevolucion: string,
  lugar: number,
}
  car: {
    idCar:number
},  
};

const estadoInicial:Treserve = {
    reserve: {}
}

const reserveSlice = createSlice({
    name: 'dataReserve',
    initialState: estadoInicial,
    reducers: {
        postReserve: (state, actions)=>{    
          state.dataReserve = { ...state.dataReserve, ...actions.payload }
        },
    },
});

export const { postReserve } = reserveSlice.actions;
export default reserveSlice.reducer;