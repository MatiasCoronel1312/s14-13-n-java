import { createSlice } from "@reduxjs/toolkit";
import { DataDestination } from "../components/DestinosCard/DataDestination.interface";


interface destinationState {
    destinations: DataDestination[]
}

const estadoInicial:destinationState = {
    destinations: []
}

const destinationSlice = createSlice({
    name: 'destinos',
    initialState: estadoInicial,
    reducers: {
        getDestinos: (state, actions)=>{
            state.destinations = actions.payload
        },
    },
});

export const { getDestinos } = destinationSlice.actions;
export default destinationSlice.reducer;