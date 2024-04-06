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

const estadoInicial: TCarro = {
    cars: [
        {
            id: 0,
            modelo: '',
            features: [],
            imagen: '',
            pasajeros: 0,
            precio: 0,
            categoría: TCategoría,
            stock: 0,
          }
        
    ]
}

const allCarsSlice = createSlice({
    name: 'cars',
    initialState: estadoInicial,
    reducers: {
        getCars: (state, actions: PayloadAction)=>{
            state.cars = actions.payload
        }
    }
})

export const { getCars } = allCarsSlice.actions;
export default allCarsSlice.reducer;