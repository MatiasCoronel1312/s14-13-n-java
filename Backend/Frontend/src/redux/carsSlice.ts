import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TFeatures =
  | "4 puertas"
  | "Levantavidrios eléctricos"
  | "ABS"
  | "2 maleta(s) grande(s)"
  | "5 personas"
  | "Aire acondicionado"
  | "Cierre centralizado"
  | "Automático"
  | "Dir. Asistida Eléctrica"
  | "2 maleta(s) pequena(s)";

type TCategoría = "4x4" | "Deportivo" | "Standard" | "Premium" | "Van";
export type TCarro = {
  id: number;
  modelo: string;
  features: TFeatures[];
  imagen: string;
  pasajeros: number;
  precio: number;
  categoría: TCategoría;
  stock: number;
};
interface CarsState {
    cars: TCarro[]
}

const estadoInicial:CarsState = {
    cars: []
}

const carsSlice = createSlice({
    name: 'cars',
    initialState: estadoInicial,
    reducers: {
        getCars: (state, actions: PayloadAction<TCarro[]>)=>{
            state.cars = actions.payload
        },
    },
});

export const { getCars } = carsSlice.actions;
export default carsSlice.reducer;