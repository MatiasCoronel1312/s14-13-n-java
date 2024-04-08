import CategoriaDeVehiculos from "../pages/CategoriaDeVehiculos";
import Dudas from "../pages/Dudas";
import Home from "../pages/Home";
import RedDeAgencias from "../pages/RedDeAgencias";
import TipsTuristicos from "../pages/TipsTuristicos";

export const menuRoutes = [
    {
      id: "home",
      path: "/",
      Element: Home,
    },
    {
      id: "redDeAgencias",
      path: "/redDeAgencias",
      Element: RedDeAgencias,
    },
    {
      id: "tipsTuristicos",
      path: "/tipsTuristicos",
      Element: TipsTuristicos,
    },
    {
      id: "dudas",
      path: "/dudas",
      Element: Dudas,
    },
    {
      id: "categoriasDeVehiculos",
      path: "/categoriasDeVehiculos",
      Element: CategoriaDeVehiculos,
    }]