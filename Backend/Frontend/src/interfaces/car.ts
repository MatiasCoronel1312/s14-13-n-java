type TFeatures =
  | "Gasoline Vehicle"
  | "Bluetooth"
  | "Cruise Control"
  | "AM/FM Stereo Radio"
  | "Automatic";

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