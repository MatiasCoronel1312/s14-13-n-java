import { createSlice } from "@reduxjs/toolkit";

type TBooking = 
    {
        id:number,
    };

interface bookingsState {
    bookings: TBooking[]
}

const estadoInicial:bookingsState = {
    bookings: []
}

const bookingsSlice = createSlice({
    name: 'bookings',
    initialState: estadoInicial,
    reducers: {
        getBookings: (state, actions)=>{
            state.bookings = actions.payload
        },
    },
});

export const { getBookings } = bookingsSlice.actions;
export default bookingsSlice.reducer;