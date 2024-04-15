import apiUrl from '../env/environment.prod.ts';
import axios from 'axios';

class ApiService {
  static getAllCars(): import("../components/CarCarousel/carrusel.interface.ts").default[] {
    throw new Error("Method not implemented.");
  }
  finalURL = '/vehicles/all';

  constructor() {}

  apiURL = apiUrl;

  async getAllCars() {
    try {
      const response = await axios.get(this.apiURL + this.finalURL);
      console.log(response);
      
      return response.data;
    } catch (error) {
      // Maneja el error de forma adecuada (lanzar error personalizado, etc.)
      console.error('Error al obtener vehículos:', error);
    }
  }
}

export default ApiService;
