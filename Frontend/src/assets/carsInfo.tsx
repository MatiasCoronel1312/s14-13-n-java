import {
  AudiA5,
  ChevroletExpress,
  ChevroletTahoe,
  DodgeChallenger,
  FordMustangConvertible,
  FordTransit,
  NissanVersa,
  ToyotaCorolla,
  ToyotaPrius,
} from "./ImagenesCarros";

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

const carros: TCarro[] = [];

/*

TODO
carros.push({
  id: ,
  modelo: "",
  features: ["Automatic", "AM/FM Stereo Radio", "Bluetooth", "Cruise Control"],
  imagen: ,
  pasajeros: 5,
  precio: ,
  categoría: ,
  stock: 5,
});

*/
carros.push({
  id: 1,
  modelo: "Toyota Corolla",
  features: ["Automatic", "AM/FM Stereo Radio", "Bluetooth", "Cruise Control"],
  imagen: ToyotaCorolla,
  pasajeros: 5,
  precio: 62,
  categoría: "Standard",
  stock: 5,
});

carros.push({
  id: 2,
  modelo: "Dodge Challenger",
  features: ["Automatic", "AM/FM Stereo Radio", "Bluetooth", "Cruise Control"],
  imagen: DodgeChallenger,
  pasajeros: 4,
  precio: 82,
  categoría: "Standard",
  stock: 5,
});

carros.push({
  id: 3,
  modelo: "Chevrolet Tahoe",
  features: ["Automatic", "AM/FM Stereo Radio", "Bluetooth", "Cruise Control"],
  imagen: ChevroletTahoe,
  pasajeros: 7,
  precio: 159,
  categoría: "Premium",
  stock: 5,
});

carros.push({
  id: 4,
  modelo: "Nissan Versa",
  features: ["Automatic", "AM/FM Stereo Radio", "Bluetooth", "Cruise Control"],
  imagen: NissanVersa,
  pasajeros: 5,
  precio: 70,
  categoría: "Standard",
  stock: 5,
});

carros.push({
  id: 5,
  modelo: "Ford Transit",
  features: ["Automatic", "AM/FM Stereo Radio", "Bluetooth", "Cruise Control"],
  imagen: FordTransit,
  pasajeros: 15,
  precio: 210,
  categoría: "Van",
  stock: 5,
});
carros.push({
  id: 6,
  modelo: "Chevrolet Express",
  features: ["Automatic", "AM/FM Stereo Radio", "Bluetooth", "Cruise Control"],
  imagen: ChevroletExpress,
  pasajeros: 2,
  precio: 130,
  categoría: "Van",
  stock: 5,
});

carros.push({
  id: 7,
  modelo: "Ford Mustang Convertible",
  features: ["Automatic", "AM/FM Stereo Radio", "Bluetooth", "Cruise Control"],
  imagen: FordMustangConvertible,
  pasajeros: 4,
  precio: 310,
  categoría: "Premium",
  stock: 5,
});
carros.push({
  id: 8,
  modelo: "Audi A5",
  features: ["Automatic", "AM/FM Stereo Radio", "Bluetooth", "Cruise Control"],
  imagen: AudiA5,
  pasajeros: 5,
  precio: 140,
  categoría: "Premium",
  stock: 5,
});

carros.push({
  id: 9,
  modelo: "Toyota Prius",
  features: ["Automatic", "AM/FM Stereo Radio", "Bluetooth", "Cruise Control"],
  imagen: ToyotaPrius,
  pasajeros: 5,
  precio: 80,
  categoría: "Standard",
  stock: 5,
});

export default carros;
