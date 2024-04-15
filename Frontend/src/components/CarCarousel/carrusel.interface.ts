export interface CarView {
  image: string;
  model: string;
  brand: string;
}


interface Car {
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
export default Car;