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

type TCategoría =
  | "SEDAN"
  | " SEDAN_PREMIUM"
  | "HYBRID"
  | "SUV"
  | "SPORT"
  | "ECONOMIC"
  | "MINIVAN"
  | "VAN"
  | "TRUCK";
export type TCarro = {
  brand: string;
  category: TCategoría;
  engineSize: number;
  features: TFeatures[];
  id: number;
  image: string;
  model: string;
  modelYear: number;
  passengers: number;
  price: number;
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

[{}];
// carros.push({
//   id: 1,
//   modelo: "Toyota Corolla",
//   features: [
//     "4 puertas",
//     "Levantavidrios eléctricos",
//     "ABS",
//     "2 maleta(s) grande(s)",
//     "5 personas",
//     "Aire acondicionado",
//     "Cierre centralizado",
//     "Automático",
//     "Dir. Asistida Eléctrica",
//     "2 maleta(s) pequena(s)",
//   ],
//   imagen: "ToyotaCorolla.png",
//   pasajeros: 5,
//   precio: 62,
//   categoría: " SEDAN_PREMIUM",
//   stock: 5,
// });

// carros.push({
//   id: 2,
//   modelo: "Dodge Challenger",
//   features: [
//     "4 puertas",
//     "Levantavidrios eléctricos",
//     "ABS",
//     "2 maleta(s) grande(s)",
//     "5 personas",
//     "Aire acondicionado",
//     "Cierre centralizado",
//     "Automático",
//     "Dir. Asistida Eléctrica",
//     "2 maleta(s) pequena(s)",
//   ],
//   imagen: "DodgeChallenger.png",
//   pasajeros: 4,
//   precio: 82,
//   categoría: "ECONOMIC",
//   stock: 0,
// });
// carros.push({
//   id: 3,
//   modelo: "Chevrolet Tahoe",
//   features: [
//     "4 puertas",
//     "Levantavidrios eléctricos",
//     "ABS",
//     "2 maleta(s) grande(s)",
//     "5 personas",
//     "Aire acondicionado",
//     "Cierre centralizado",
//     "Automático",
//     "Dir. Asistida Eléctrica",
//     "2 maleta(s) pequena(s)",
//   ],
//   imagen: "ChevroletTahoe.png",
//   pasajeros: 7,
//   precio: 159,
//   categoría: "ECONOMIC",
//   stock: 3,
// });

// carros.push({
//   id: 3,
//   modelo: "Chevrolet Tahoe",
//   features: [
//     "4 puertas",
//     "Levantavidrios eléctricos",
//     "ABS",
//     "2 maleta(s) grande(s)",
//     "5 personas",
//     "Aire acondicionado",
//     "Cierre centralizado",
//     "Automático",
//     "Dir. Asistida Eléctrica",
//     "2 maleta(s) pequena(s)",
//   ],
//   imagen: "ChevroletTahoe.png",
//   pasajeros: 7,
//   precio: 159,
//   categoría: "HYBRID",
//   stock: 0,
// });

// carros.push({
//   id: 4,
//   modelo: "Nissan Versa",
//   features: [
//     "4 puertas",
//     "Levantavidrios eléctricos",
//     "ABS",
//     "2 maleta(s) grande(s)",
//     "5 personas",
//     "Aire acondicionado",
//     "Cierre centralizado",
//     "Automático",
//     "Dir. Asistida Eléctrica",
//     "2 maleta(s) pequena(s)",
//   ],
//   imagen: "NissanVersa.png",
//   pasajeros: 5,
//   precio: 70,
//   categoría: "HYBRID",
//   stock: 5,
// });

// carros.push({
//   id: 4,
//   modelo: "Nissan Versa",
//   features: [
//     "4 puertas",
//     "Levantavidrios eléctricos",
//     "ABS",
//     "2 maleta(s) grande(s)",
//     "5 personas",
//     "Aire acondicionado",
//     "Cierre centralizado",
//     "Automático",
//     "Dir. Asistida Eléctrica",
//     "2 maleta(s) pequena(s)",
//   ],
//   imagen: "NissanVersa.png",
//   pasajeros: 5,
//   precio: 70,
//   categoría: "MINIVAN",
//   stock: 5,
// });

// carros.push({
//   id: 5,
//   modelo: "Ford Transit",
//   features: [
//     "4 puertas",
//     "Levantavidrios eléctricos",
//     "ABS",
//     "2 maleta(s) grande(s)",
//     "5 personas",
//     "Aire acondicionado",
//     "Cierre centralizado",
//     "Automático",
//     "Dir. Asistida Eléctrica",
//     "2 maleta(s) pequena(s)",
//   ],
//   imagen: "FordTransit.png",
//   pasajeros: 15,
//   precio: 210,
//   categoría: "SEDAN",
//   stock: 5,
// });
// carros.push({
//   id: 6,
//   modelo: "Chevrolet Express",
//   features: [
//     "4 puertas",
//     "Levantavidrios eléctricos",
//     "ABS",
//     "2 maleta(s) grande(s)",
//     "5 personas",
//     "Aire acondicionado",
//     "Cierre centralizado",
//     "Automático",
//     "Dir. Asistida Eléctrica",
//     "2 maleta(s) pequena(s)",
//   ],
//   imagen: "ChevroletExpress.png",
//   pasajeros: 2,
//   precio: 130,
//   categoría: "SPORT",
//   stock: 0,
// });

// carros.push({
//   id: 7,
//   modelo: "Ford Mustang Convertible",
//   features: [
//     "4 puertas",
//     "Levantavidrios eléctricos",
//     "ABS",
//     "2 maleta(s) grande(s)",
//     "5 personas",
//     "Aire acondicionado",
//     "Cierre centralizado",
//     "Automático",
//     "Dir. Asistida Eléctrica",
//     "2 maleta(s) pequena(s)",
//   ],
//   imagen: "FordMustangConvertible.png",
//   pasajeros: 4,
//   precio: 310,
//   categoría: "SUV",
//   stock: 5,
// });
// carros.push({
//   id: 8,
//   modelo: "Audi A5",
//   features: [
//     "4 puertas",
//     "Levantavidrios eléctricos",
//     "ABS",
//     "2 maleta(s) grande(s)",
//     "5 personas",
//     "Aire acondicionado",
//     "Cierre centralizado",
//     "Automático",
//     "Dir. Asistida Eléctrica",
//     "2 maleta(s) pequena(s)",
//   ],
//   imagen: "AudiA5.png",
//   pasajeros: 5,
//   precio: 140,
//   categoría: "TRUCK",
//   stock: 5,
// });

// carros.push({
//   id: 9,
//   modelo: "Toyota Prius",
//   features: [
//     "4 puertas",
//     "Levantavidrios eléctricos",
//     "ABS",
//     "2 maleta(s) grande(s)",
//     "5 personas",
//     "Aire acondicionado",
//     "Cierre centralizado",
//     "Automático",
//     "Dir. Asistida Eléctrica",
//     "2 maleta(s) pequena(s)",
//   ],
//   imagen: "ToyotaPrius.png",
//   pasajeros: 5,
//   precio: 80,
//   categoría: "VAN",
//   stock: 5,
// });

export default carros;

export const iconFeacture = {
  "4 puertas": "",
  "Levantavidrios eléctricos": "",
  ABS: "",
  "2 maleta(s) grande(s)": "",
  "5 personas": "",
  "Aire acondicionado": "",
  "Cierre centralizado": "",
  Automático: "",
  "Dir. Asistida Eléctrica": "",
  "2 maleta(s) pequena(s)": "",
};
