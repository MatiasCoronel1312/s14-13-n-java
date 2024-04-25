export interface TMyReserve {
  id: number;
  vehicle: Vehicle;
  User: User;
  Insurance: Insurance;
  reservationDates: ReservationDates;
  iva: number;
  administrativeFee: number;
  Subtotal: number;
  total: number;
}

interface Insurance {
  id: number;
  name: string;
  price: number;
}

interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  identification: string;
  identificationNumber: string;
  country: string;
  phoneNumber: string;
}

interface ReservationDates {
  id: number;
  retirementPlace: RetPlace;
  retirementDate: Date;
  returnPlace: RetPlace;
  returnDate: Date;
}

interface RetPlace {
  id: number;
  name: string;
  country: string;
  address: string;
  phone: string;
}

interface Vehicle {
  id: number;
  brand: string;
  model: string;
  modelYear: number;
  engineSize: number;
  passengers: number;
  image: string;
  price: number;
  stock: number;
  features: string[];
  category: string;
}
