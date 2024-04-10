import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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

const carsSlice = createSlice({
    name: 'reserve',
    initialState: estadoInicial,
    reducers: {
        postCars: (state, actions: PayloadAction<Treserve>)=>{    
            [...state.reserve,  actions.payload ]
        },
    },
});

export const { postCars } = carsSlice.actions;
export default carsSlice.reducer;