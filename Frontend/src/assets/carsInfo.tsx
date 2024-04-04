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
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)",
  ],
  imagen: "ToyotaCorolla.png",
  pasajeros: 5,
  precio: 62,
  categoría: "Standard",
  stock: 5,
});

carros.push({
  id: 2,
  modelo: "Dodge Challenger",
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)",
  ],
  imagen: "DodgeChallenger.png",
  pasajeros: 4,
  precio: 82,
  categoría: "Standard",
  stock: 5,
});

carros.push({
  id: 3,
  modelo: "Chevrolet Tahoe",
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)",
  ],
  imagen: "ChevroletTahoe.png",
  pasajeros: 7,
  precio: 159,
  categoría: "Premium",
  stock: 5,
});

carros.push({
  id: 4,
  modelo: "Nissan Versa",
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)",
  ],
  imagen: "NissanVersa.png",
  pasajeros: 5,
  precio: 70,
  categoría: "Standard",
  stock: 5,
});

carros.push({
  id: 5,
  modelo: "Ford Transit",
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)",
  ],
  imagen: "FordTransit.png",
  pasajeros: 15,
  precio: 210,
  categoría: "Van",
  stock: 5,
});
carros.push({
  id: 6,
  modelo: "Chevrolet Express",
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)",
  ],
  imagen: "ChevroletExpress.png",
  pasajeros: 2,
  precio: 130,
  categoría: "Van",
  stock: 5,
});

carros.push({
  id: 7,
  modelo: "Ford Mustang Convertible",
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)",
  ],
  imagen: "FordMustangConvertible.png",
  pasajeros: 4,
  precio: 310,
  categoría: "Premium",
  stock: 5,
});
carros.push({
  id: 8,
  modelo: "Audi A5",
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)",
  ],
  imagen: "AudiA5.png",
  pasajeros: 5,
  precio: 140,
  categoría: "Premium",
  stock: 5,
});

carros.push({
  id: 9,
  modelo: "Toyota Prius",
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)",
  ],
  imagen: "ToyotaPrius.png",
  pasajeros: 5,
  precio: 80,
  categoría: "Standard",
  stock: 5,
});

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
